import React from "react"
const pathToImages = require.context('../images/', true)

const ProfilePicture = ({ mentor: { image } }) => (
  <img className="avatar-picture" alt="Avatar" src={pathToImages(image, true)} ></img>
)

export default ProfilePicture
