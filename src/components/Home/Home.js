import React, { PureComponent } from "react";
import "./Home.styles.css";
import Header from "../Header/Header";
import api from "../../services/api.service";


class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
    this.api = new api()
  }

  componentDidMount = () => {
    console.log("Home mounted");
    // eslint-disable-next-line no-undef
    ScrollReveal().reveal(".Home", { delay: 300 });
    this.api.getGuildsAndusers().then(res => {
      this.setState({
        servers: res.servers,
        users: res.users
      })
    })
    
   
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentDidUpdate = () => {
    console.log("Home did update");
  };

  componentWillUnmount = () => {
    console.log("Home will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <section className="Home">
        <Header />
        <div className="main">
          <div className="description">
            <img src="/logo.png" alt="bot-logo" />
            <div className="info">
              <p>
                Talk to anyone in the world, translate the message you want into
                the language you want with auto translate, configure automatic
                channels to translate messages automatically!
              </p>
              <ul>
                <li>{this.state.servers} Servers</li>
                <li>{this.state.users} Users</li>
              </ul>
              <button>
                <a
                  href="https://auto-translate.gitbook.io/auto-translate-docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GET STARTED
                </a>
              </button>
              <button>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=682352252521938972&permissions=121856&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ADD TO SERVER
                </a>
              </button>
            </div>
          </div>
          <svg
            className="curve"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0099ff"
              fillOpacity="1"
              d="M0,64L34.3,74.7C68.6,85,137,107,206,128C274.3,149,343,171,411,181.3C480,192,549,192,617,165.3C685.7,139,754,85,823,69.3C891.4,53,960,75,1029,101.3C1097.1,128,1166,160,1234,160C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    );
  }
}

export default Home;
