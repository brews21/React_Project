import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true });
    //, () => {
    //  document.addEventListener("click", this.hideDropdownMenu);
    //  console.log("Clicked dropdown 1");
    console.log(this.state.displayMenu);
  }
  //);
  //}

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.showDropdownMenu);
      console.log("Clicked dropdown 2");
      console.log(this.state.displayMenu);
    });
  }

  renderDropdown() {
    console.log(this.state.displayMenu);

    return (
      <div>
        <a
          className="dropdown-trigger btn"
          href="#"
          data-target="dropdown1"
          onClick={this.handleClick}
        >
          Drop Me!
        </a>

        {this.state.isToggleOn ? (
          <ul id="dropdown1" className="dropdown-content">
            <li>
              <a href="#!">one</a>
            </li>
            ,
            <li>
              <a href="#!">two</a>
            </li>
            ,<li className="divider" tabIndex="-1" />,
            <li>
              <a href="#!">three</a>
            </li>
            ,
            <li>
              <a href="#!">
                <i className="material-icons">view_module</i>
                four
              </a>
            </li>
            ,
            <li>
              <a href="#!">
                <i className="material-icons">cloud</i>
                five
              </a>
            </li>
            ,
          </ul>
        ) : null}
      </div>
    );
  }

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
          </li>,
          <li key="5" style={{ margin: "0 10px" }}>
            {this.renderDropdown()}
          </li>
        ];
    }
  }

  render() {
    //console.log(this.props);

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
