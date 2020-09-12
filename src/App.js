import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./profile/Profile";
import img from "./profile/img.png"
import { Button } from 'react-bootstrap';
const user = {
  fullName: "Meftah Jaâfer",
  bio: "After discovering my passion for web development, I couldn’t get enough. I made websites for friends and family, interned with a local business, and hired myself out as a freelancer. I’m looking forward to bringing that passion to a full-time role.",
  profession: "Web Developer",
  src: img,
};

class App extends Component {
  handleName= () => {
    alert (`My Name is ${user.fullName}`);
  }
    render() {
      const myStyle = {
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
      <div className="App" style={myStyle}>
        <div class="container"  >
        <User x={user}  >
          <img className="img" src={user.src} alt={"Profile Photo"} style={{width: "150px"}} />
          <div class="row mt-3"> 
          <Button  onClick={this.handleName}>Click Here !</Button>
          </div>
        </User>
        
      </div>
      </div>
    );
  }
}
export default App;

