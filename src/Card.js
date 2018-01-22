import React, { Component } from 'react';
import './Card.css';
import { sampleData } from './sample_data'

const CardHeading = () => (
  <span>
    <div id="logo-img">
      <img src={sampleData.logoUrl} alt="Penske logo" />
    </div>
    <div id="name">{sampleData.name}</div>
  </span>
)

const CardPromoMessage = () => {
  return (sampleData.promoMessage ? (
    <div id="promo-message">{sampleData.promoMessage}</div>
  ) : null)
}

const CardPromoCode = () => {
  return (sampleData.promoCode ? (
    <div>Use promo code:<span id="promo-code"> {sampleData.promoCode}</span></div>
  ) : null)
}

const CardFeatures = () => {
  return (sampleData.features.length > 0 ? (
    <ul className="features-list">
      {sampleData.features.map(function(feature,index){
        return <li key={index}><i className="fa fa-check" aria-hidden="true"></i> <span className="feature"> {feature}</span></li>
      })}
    </ul>
  ) : null)
}

const CardProfile = () => {
  return (sampleData.profileHref ? (
    <div id="view-profile">
      <a href={sampleData.profileHref} className="view-profile-link" target="_blank">View Profile</a>
    </div>
  ) : null)
}

const CardRentTruck = () => (
  <div id="rent-truck-btn">
    <a href={sampleData.ctaUrl} className="rent-truck-btn" target="_blank">Rent Truck</a>
  </div>
)

class Card extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { width } = this.state
    const isMobile = width <= 992
    if (isMobile) {
      return (
        <div className="Card">
          <CardHeading />
          <CardPromoMessage />
          <CardPromoCode />
          <CardRentTruck />
        </div>
      ); 
    } else {
      return (
        <div className="Card">
          <CardHeading />
          <CardPromoMessage />
          <CardPromoCode />
          <CardFeatures />
          <CardProfile />      
          <CardRentTruck />
        </div>
      )
    }
  }
}

export default Card;
