import React, { Component } from "react";
import Slider from "react-slick";
import adisha from "../images/adisha.png";
import bharvi from "../images/bharvi.png";
import darshil from "../images/darshil.png";
import isha from "../images/isha.png";
import ishita from "../images/ishita.png";
import nikki from "../images/nikki.png";
import niyati from "../images/niyati.png";
import radhika from "../images/radhika.png";
import raj from "../images/raj.png";
import riya from "../images/riya.png";
import shalin from "../images/shalin.png";
import veda from "../images/veda.png";
import vedanshi from "../images/vedanshi.png";
import yasha from "../images/yasha.png";
import zeel from "../images/zeel.png";
import MediaQuery from 'react-responsive'
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const settingsMobile = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <MediaQuery minDeviceWidth={1024}> 
        <Slider {...settings}>
          <div>
          <img src={adisha} className = "monkpics"  alt="monk"/>               
          </div>
          <div>
          <img src={bharvi} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={darshil} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={isha} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={ishita} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={nikki} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={niyati} className = "monkpics"  alt="monk"/>               
          </div>
          <div>
          <img src={radhika} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={raj} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={riya} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={shalin} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={veda} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={vedanshi} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={yasha} className = "monkpics"  alt="monk"/>
          </div>
          <div>
          <img src={zeel} className = "monkpics"  alt="monk"/>
          </div>
        </Slider>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023.9}> 
        <Slider {...settingsMobile}>
          <div>
          <img src={adisha} className = "monkpicsMobile"  alt="monk"/>               
          </div>
          <div>
          <img src={bharvi} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={darshil} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={isha} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={ishita} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={nikki} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={niyati} className = "monkpicsMobile"  alt="monk"/>               
          </div>
          <div>
          <img src={radhika} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={raj} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={riya} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={shalin} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={veda} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={vedanshi} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={yasha} className = "monkpicsMobile"  alt="monk"/>
          </div>
          <div>
          <img src={zeel} className = "monkpicsMobile"  alt="monk"/>
          </div>
        </Slider>
        </MediaQuery>  
      </div>
    );
  }
}