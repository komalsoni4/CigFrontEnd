import React, { Component } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import bg from "./images/home_bg1.svg";
import hand from "./images/home_hand.svg";
import man from "./images/man1.svg";
import up from "./images/up.png";
import home_head from "./images/home_head.svg";
import home_head_a from "./images/home_head_a.png";
import left_arrow from "./images/left_arrow.svg";
import right_arrow from "./images/right_arrow.svg";
import man_a from "./images/man_a1.svg";
import line from "./images/line.svg";

import Mask from "./images/mask.png";
// import Img from "./images/image.png";
import Comp from "./images/cls_comp.svg";
import Collab from "./collab.js";
// import Featured from "./featured.js";
// import Testinomials from "./testinomial.js";
// import CLS from "./cls.js";
import "./home.css";
import axios from "axios";
import CircleIcon from "@mui/icons-material/Circle";
//alert(window.innerWidth);
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CLS: [
        {
          date: " 5 sept 2019",
          name: "Ratan Tata",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology  in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        {
          date: " 5 sept 2019",
          name: "Ratan Tata",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology   in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        {
          date: " 5 sept 2019",
          name: "ZAID",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology   in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        {
          date: " 5 sept 2019",
          name: "Ratan Tata",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology   in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        {
          date: " 5 sept 2019",
          name: "BIN JUNAID",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology   in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        {
          date: " 5 sept 2019",
          name: "Ratan Tata",
          icon: Comp,
          img: Mask,
          heading:
            "Convergence of Geo-spatial Technology   in AI and IoT for New India ",
          des: "Director, ESRI India Technologies LTD",
        },
        { date: " 5 sept 2019", name: "", icon: "", heading: "", des: "" },
      ],
      x_disp: 0,
      testimonialArr: [],
    };
    this.slide = this.slide.bind(this);
    this.getViewportSize = this.getViewportSize.bind(this);
    this.scroll_bar = React.createRef();
  }

  componentDidMount() {
    console.log("req to backend to fetch testimonial");
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/testimonial",
    }).then((d) => {
      console.log("data");
      this.setState({ testimonialArr: d.data });
      console.log(d);
    });
  }

  scroll() {
    if (window.scrollY !== 0) {
      setTimeout(() => {
        window.scrollTo(0, window.scrollY - 60);
        this.scroll();
      }, 2);
    }
  }

  getViewportSize() {
    // const vw = window.innerWidth;
    var e = window;
    var a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return { width: e.innerWidth, height: e[a + "Height"] };
  }

  slide(e) {
    var arr = this.getViewportSize();
    let wdth = arr.width;
    // alert(wdth);
    let mov = (0.615 * wdth * 50) / 50;
    let add = 0;
    if (e.target.name === "right") {
      var sliding = setInterval(() => {
        add += 50;
        if (add > mov) {
          clearInterval(sliding);
          // eslint-disable-next-line react/no-direct-mutation-state
          this.state.x_disp = mov;
          return;
        }

        this.scroll_bar.current.scrollLeft += 50;
      }, 17);
    } else {
      let position = this.state.x_disp;
      sliding = setInterval(() => {
        position -= 100;
        if (position <= 0) {
          clearInterval(sliding);
          return;
        }

        this.scroll_bar.current.scrollLeft -= 50;
      }, 17);
    }

    //  (this.scroll_bar.current).scrollLeft+=mov;
  }

  render() {
    return (
      <div id="home-main">
        <div id="home_img">
          <div id="btn_home">
            <span> Let’s Collaborate</span>{" "}
          </div>
          <img id="img_home" src={bg} alt="img-home" />
          <img id="home_head" src={home_head} alt="home-head" />
          <img id="home_head_a" src={home_head_a} alt="home-head-a" />
          {/* <img id="hand" src={hand} alt="hand-img" /> */}
          <img id="line" src={line} alt="line-img" />
          {/* <img
            name="left"
            id="left_arrow_home"
            onClick={this.slide}
            src={left_arrow}
            alt="left-arrow"
          />
          <img
            name="right"
            id="right_arrow_home"
            onClick={this.slide}
            src={right_arrow}
            alt="right-arrow"
          /> */}

          <a href="/view" id="vw">
            {" "}
            View resources
          </a>
          <a href="/view" id="vw_a">
            {" "}
            View resources
          </a>
          <img
            id="arrow"
            onClick={this.scroll.bind(this)}
            src={up}
            alt="arrw"
          />
        </div>
        <div>
          <img id="man" src={man} alt="man-img" />
        </div>
        <div>
          <img id="man_a" src={man_a} alt="img-man-a" />
        </div>

        <div id="suc_col">Successful Collaborations </div>
        <div id="col">
          <Collab />
        </div>
      </div>
    );
  }
}

export default Home;
