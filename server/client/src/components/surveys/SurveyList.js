import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import { Link } from "react-router-dom";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    //console.log(this.props.surveys.length);

    if (this.props.surveys.length == 0) {
      return <div>{this.renderNoSurveys()}</div>;
    } else {
      return <div>{this.renderSurveyCards()}</div>;
    }
  }

  renderNoSurveys() {
    return (
      <div>
        <p>You have no Surveys click below to create one</p>
        <Link to="/surveys/new" className="waves-effect waves-light btn-large">
          <i className="material-icons right">cloud</i>
          button
        </Link>
      </div>
    );
  }

  renderSurveyCards() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
