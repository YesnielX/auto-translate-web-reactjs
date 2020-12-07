import React, { PureComponent } from "react";
import "./Header.styles.css";

class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      hasError: false,
      active: "home",
    };
    this.changeActive = this.changeActive.bind(this);
  }

  componentDidMount = () => {
    console.log("Header mounted");
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentDidUpdate = () => {
    console.log("Header did update");
  };

  componentWillUnmount = () => {
    console.log("Header will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <nav>
        <label className="logo">
          <img src="/logo.png" alt="logo" />
          Auto Translate
        </label>
        <ul>
          <li>
            <a
              className={this.isActive("home")}
              href="/"
              onMouseEnter={this.changeActive.bind(this, "home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={this.isActive("support")}
              href="https://discord.gg/ah6BHUd"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={this.changeActive.bind(this, "support")}
              onMouseOut={this.changeActive.bind(this, 'home')}
            >
              Support Server
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isActive(name) {
    //console.log(name)
    return name === this.state.active ? "active" : "";
  }

  changeActive(name) {
    this.setState({
      active: name,
    });
  }
}

export default Header;