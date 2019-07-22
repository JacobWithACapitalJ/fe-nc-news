import React, { Component } from "react";
import { Carousel, Card } from "antd";

class Splash extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Carousel autoplay>
          <div>
            <a href="https://github.com/JacobWithACapitalJ/fe-nc-news">
              <img
                src="https://www.netmatters.co.uk/uploads/article/636/github-NVKO.png"
                alt="github logo"
                style={{
                  width: "auto",
                  height: this.props.height
                }}
              />
            </a>
          </div>
          <div>
            <img
              src="https://flaviocopes.com/netlify/banner.png"
              alt="netlify logo"
              style={{
                width: "auto",
                height: this.props.height
              }}
            />
          </div>
          <div>
            <a href="https://jacobs-nc-news.herokuapp.com/api">
              <img
                src="https://www.logolynx.com/images/logolynx/44/4446f640e166634677d836fcf105cca0.png"
                alt="heroku logo"
                style={{
                  width: "auto",
                  height: this.props.height
                }}
              />
            </a>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Splash;
