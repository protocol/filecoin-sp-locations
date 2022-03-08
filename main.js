let findLocation = require("./findLocation").findLocation

exampleQuery = {
  "minerID": 'f01012', // the SP minerID you are searching for the location of
  "loc_version": '1.2.0' // version of the location information used
}


console.log(findLocation(exampleQuery))
