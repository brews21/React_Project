import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

// stipecheckout defaults to US Dollars
// and amount is in cents 100 US cents to 1 US dollar
// look at changing it to Pounds or other currencies

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        discription="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
