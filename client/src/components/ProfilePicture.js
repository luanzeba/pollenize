import React from "react";
const pathToImages = require.context('../images/', true);

class ProfilePicture extends React.Component {

  render() {
    return (
      <img className="avatar-picture" alt="Avatar" src={pathToImages(this.props.mentor.image, true)} ></img>
    )
  }
};

export default ProfilePicture;
