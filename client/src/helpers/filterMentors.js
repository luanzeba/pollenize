// ** flatArrayFromObject
// Turns all the attributes of a JSON object into a flat array no matter how deep
// Example -- This JSON:
// {
//   id: "mentor1",
//   name: "Jon Doe",
//   image: "./jon-doe.jpg",
//   schooling: [{
//     field: "Computer Engineering",
//     level: "Bachelor",
//   }],
//   work: {
//     title: "Software Engineer",
//     focus: "Games and Graphics",
//   },
// }
//
// Becomes this:
// ["mentor1", "Jon Doe", "./jon-doe.jpg", "Computer Engineering", "Bachelor", "Software Engineer", "Games and Graphics"]

const allStrings = array => (
  array.length > 0 && array.every(value => typeof value === "string")
)

const flatArrayFromObject = deepObject => {
  let resultArray = Object.values(deepObject).flat()
  while (!allStrings(resultArray)) {
    resultArray = resultArray.flatMap(value => (typeof value === "string") ? value : Object.values(value))
  }

  return resultArray
}

// ** filterMentors
// returns any mentors from the mentorList provided
// where any of the mentors attributes match the searchTerm provided

const filterMentors = (mentorsList, searchTerm) => {
  const searchRegex = new RegExp(searchTerm, 'i')
  return mentorsList.filter(mentor => {
    return flatArrayFromObject(mentor).some(attribute => searchRegex.test(attribute))
  })
}

export default filterMentors
