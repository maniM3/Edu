import React, { Component } from "react";
import imR from "../../logo.svg";
import "./Carousel.css";
class carousel extends Component {
  // state = {  }
  render() {
    return (
      <div className="carousel-start">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#myCarousel" data-slide-to="1" />
            <li data-target="#myCarousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img className="img_d" src={imR} alt="Los Angeles" />
              <div className="carousel-caption">
                <h3>University</h3>
                <p>This University is always fun!</p>
              </div>
            </div>

            <div className="item">
              <img className="img_d" src={imR} alt="Chicago" />
              <div className="carousel-caption">
                <h3>University</h3>
                <p>Brainy nerds!</p>
              </div>
            </div>

            <div className="item">
              <img className="img_d" src={imR} alt="New York" />
              <div className="carousel-caption">
                <h3>University</h3>
                <p>Now that!</p>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            data-slide="prev"
          >
            <span className="glyphicon glyphicon-chevron-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            data-slide="next"
          >
            <span className="glyphicon glyphicon-chevron-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default carousel;
