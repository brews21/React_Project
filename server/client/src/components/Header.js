import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google" style={{ margin: "0 10px" }}>
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="0" style={{ margin: "10px 10px" }}>
            <img src={this.props.auth.Picture} alt="new" />
          </li>,
          <li key="1" style={{ margin: "0 10px" }}>
            {this.props.auth.DisplayName}
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="4" style={{ margin: "0 10px" }}>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ margin: "0 10px" }}
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
