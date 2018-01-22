import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Card.css';
import { sampleData } from './sample_data'

class Card extends Component {
  render() {
    let promoMessage, promoCode, features;
    if (sampleData.promoMessage) {
      promoMessage = <div id="promo-message">{sampleData.promoMessage}</div>
    }
    if (sampleData.promoCode) {
      promoCode = <div>Use promo code: <span id="promo-code">{sampleData.promoCode}</span></div>
    }
    if (sampleData.features.length > 0) {
      features = (
      <ul className="features-list">
        {sampleData.features.map(function(feature,index){
          return <li key={index}><i className="fa fa-check" aria-hidden="true"></i> {feature}</li>;
        })}
      </ul>
      )
    }
    return (
      <div className="Card">
        <div id="logo-img">
          <img src={sampleData.logoUrl} alt="Penske logo" />
        </div>
        <div id="name">{sampleData.name}</div>
        {promoMessage}
        {promoCode}
        <MediaQuery minDeviceWidth={992}>
          <div id="features">{features}</div>
        </MediaQuery>
        <div id="view-profile">
          <a href={sampleData.profileHref} className="view-profile-link" target="_blank">View Profile</a>
        </div>
        <div id="rent-truck-btn">
          <a href={sampleData.ctaUrl} className="rent-truck-btn">Rent Truck</a>
        </div>
      </div>
    );
  }
}

export default Card;
