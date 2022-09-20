import React, { Component } from "react";
import "./about.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaGlobeAsia,
  FaLinkedinIn,
  FaCodepen,
} from "react-icons/fa";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      iFrameHeight: "0px",
    };
  }

  render() {
    return (
      <div id="page">
        <div class="cards">
          <div class="half half-left">
            <div class="img-container">
              <img
                src="https://avatars.githubusercontent.com/u/68281712?v=4"
                alt=""
              />
            </div>
          </div>
          <div class="half half-right">
            <a href="" class="online">
              online
            </a>
            <h2 class="name">Borhan Uddin</h2>
            <p>Front-End Developer</p>
            <h3 class="bio">Bio</h3>
            <p>
              Hi, this is Borhan Uddin have over 3 years of experience in
              Website Development.
              <br />
              <br />
              I like working with JavaScript. Therefore I use React JS to make
              stunning UI. I am ready to work with honesty, dedication,
              sincerity, and confidence to adapt to any situation to achieve my
              purpose.
              <br />
            </p>
            <h3 class="location">Location</h3>
            <p>Bheramara, Kushtia, Khulna</p>
            <button>Message</button>
          </div>
          <div class="triangle">
            <ul>
              <li>
                <a
                  href="http://www.facebook.com/wapborhan"
                  class="fa fa-facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com/wapborhan"
                  class="fa fa-twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="http://www.github.com/wapborhan" class="fa fa-skype">
                  <FaGithub />
                </a>
              </li>

              <li>
                <a
                  href="http://www.linkedin.com/in/wapborhan"
                  class="fa fa-instagram"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="http://www.codepen.io/wapborhan"
                  class="fa fa-snapchat-ghost"
                >
                  <FaCodepen />
                </a>
              </li>
            </ul>
          </div>
          <a href="http://www.wapborhan.com" class="fa fa-plus">
            <FaGlobeAsia />
          </a>
        </div>
      </div>
    );
  }
}
