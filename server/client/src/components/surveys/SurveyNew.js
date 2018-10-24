import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  // work the same as a constructor for state components
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFormReview />;
    }

    return <SurveyForm />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
