import React from "react"
import requireContext from 'require-context.macro'
const pathToImages = requireContext('../images/', true)

const ProfilePicture = ({ mentor: { image } }) => (
  <img className="avatar-picture" alt="Avatar" src={pathToImages(image, true)} ></img>
)

export default ProfilePicture
