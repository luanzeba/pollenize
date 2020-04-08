import React from "react";

class MentorDetails extends React.Component {
  nameWithLastInitial = mentorName => {
    const nameArray = mentorName.split(" ");
    if (nameArray.length > 1) {
      const lastInitial = nameArray[nameArray.length - 1].charAt(0).toUpperCase();
      return `${nameArray[0]} ${lastInitial}.`
    } else {
      return nameArray[0];
    }
  };

  render() {
    const mentor = this.props.mentor;
    return (
      <div className="mentor-result-details" >
        <p><b>{ this.nameWithLastInitial(mentor.name) }</b></p>
        <p>{ `${ mentor.schooling[0].level } in ${ mentor.schooling[0].field }` }</p>
        <p>{ `Works as ${ mentor.work.title } with a focus in ${ mentor.work.focus }` }</p>
      </div>
    )
  }
};

export default MentorDetails;