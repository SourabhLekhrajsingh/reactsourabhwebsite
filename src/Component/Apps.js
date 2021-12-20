import React,{Component} from 'react';
import { GoogleComponent } from 'react-google-location';


const API_KEY = "AIzaSyD6VBPB80S0HdQN99P6e3Nv3LztnkLz3Fk" // how to get key - step are below


class Apps extends Component {
    constructor(props) {
      super(props)
      this.state = {
        place: null,
      };
    }
  
    render() {
      console.log("result return here", this.state.place)
      return (
        <div >
           <GoogleComponent
           
           apiKey={API_KEY}
          language={'en'}
          country={'country:in|country:us'}
          coordinates={true}
          currentCoordinates={{
            "lat": 41.7151377,
            "lng": 44.827096
          }}
          placeholder={'Start typing location'}
          locationBoxStyle={'custom-style'}
          locationListStyle={'custom-style-list'}
            onChange={(e) => { this.setState({ india: e }) }} />
        </div>
  
      )
    } 
  }
  export default Apps;