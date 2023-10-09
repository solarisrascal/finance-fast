import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 1.5,
    margin: 5
  },
  768: {
    items: 2.5,
    margin: 10
  },
  1024: {
    items: 3.5,
    margin: 20
  },
}


export default function Slider() {
    return (
      <OwlCarousel
        responsive={Responsive}
      >
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
      </OwlCarousel>
    )
}