import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
const user = (props) => {
  //console.log(props);
  //alert(props.x.fullName);
  return (
    <div class="container">
      <div class="row">
      <div class="col">
      <p className="myImage">
        <h2> Profile Photo :</h2>
        <span> {props.children}</span>
      </p>
      </div>
      <div class="col">
      <p className="Name">
        <h2> Name :</h2>
        <span> {props.x.fullName}</span>
      </p>
        </div>
        <div class="col">
      <p className="bio">
        <h2> Bio :</h2> <span>{props.x.bio}</span>
      </p>
      </div>
      <div class="col">
      <p className="Profession">
        <h2> Profession :</h2> <span>{props.x.profession}</span>
      </p>
      </div>
      </div>

    </div>
  );
};
export default user;
user.propTypes = {
  Type: PropTypes.object,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

user.defaultProps = {
  fullName: 'Person Name',
  bio: 'Professional Bio',
  profession: 'Profession & Occupations',
  src: './profile/img.png'
};