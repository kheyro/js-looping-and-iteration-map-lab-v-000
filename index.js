// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(function (name) { return name.toLowerCase() })
}

function nameToAttributes(arr) {
  return arr.map(
    function (user) {
      splitted = user.split(' ')
      return { firstName: splitted[0], lastName: splitted[1] }
    }
  )
}

function nameToAttributes(arr) {
  
}
