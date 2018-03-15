// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(function (name) { return name.toLowerCase() })
}

function nameToAttributes(arr) {
  return arr.map(
    function (user) {
      return Object.assign({}, { firstName: user.split(' ')[0], lastName: user.split(' ')[1]})
    }
  )
}
