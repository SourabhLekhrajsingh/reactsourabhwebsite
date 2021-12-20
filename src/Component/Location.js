import React, { Component, Redirect } from 'react';
import Images from './location.png';
// import AutoDetect from './AutoDetect';
import { GoogleComponent } from 'react-google-location';// import App from '../App';
import SalonNearMe from './SalonNearMe';
import { NavLink } from 'react-router-dom';
const API_KEY = "AIzaSyB8zi0FbQWcuOpXbyy2OCpvMSkZbyv2A5U";// how to get key - step are below


// fetch('https://lokaci.com/andromeda/vendorLite/apis/bookings')
// .then(console.log(response))
// .catch(console.error(error))


class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }



  render() {
    let lat = "";
    let lng = "";
    if (this.state.place != null) {
      // console.log("return here", this.state.place.coordinates);
      lat = this.state.place.coordinates.lat;
      lng = this.state.place.coordinates.lng;
      console.log(lat, lng);
      localStorage.setItem("lat", lat);
      localStorage.setItem("lng", lng);
    }
    return (
      <>
        <div >
          <GoogleComponent
            apiKey={API_KEY}
            language={'en'}
            country={'country:in|country:us'}
            coordinates={true}
            placeholder={'Start typing location'}
            locationBoxStyle={'custom-style'}
            locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ place: e }) }}
          />
        </div>
        <div className="atuodetect">
          <img src={Images} className="locationimg" />
        </div>
      </>

    )
  }
}
export default Location;
