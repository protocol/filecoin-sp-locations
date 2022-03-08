locIndex = require("./loc_data/location_version_lookup.json")

function findLocation(input){

  // Load location data based on version
  loc_data = null
  try{
    loc_file_name = locIndex[input.loc_version]
    loc_data = require("./loc_data/"+loc_file_name)
  } catch{
    console.log("ERROR: Bad location info version, or missing data")
  }

  // Reformat input information based on version
  // Requirements for each elem:
    // Have a minerID key
    // Have a country key
  // Consider region schema issues (like CN-HK interconnection)
  switch(input.loc_version){
    case('1.2.0'):
      loc_data = loc_data.providerLocations.map(elem => {
        elem['minerID'] = elem.provider
        // Account for interconnection between HK and CN power grid
        if (elem.country == 'HK'){elem['region'] = 'CN-HK'; elem['country'] = 'CN'}
        return elem
      })
  }

  // Find relevant location(s)
  minerID_locations = loc_data.filter(x => x.minerID == input.minerID)
  // console.log(minerID_locations)

  // Find how many countries the location information spans
  minerID_countries = []
  for (i=0; i<minerID_locations.length; i++){
    if (!(minerID_countries.includes(minerID_locations[i].country))){
      minerID_countries.push(minerID_locations[i].country)
    }
  }
  // console.log(minerID_countries)

  // If there is only one country, output that
  country = 'XX'
  if (minerID_countries.length == 1){country = minerID_countries[0]}
  // console.log(country)

  // output
  return { "minerID": input.minerID,
    "loc_version": input.loc_version,
    "country": country,
    "locations": minerID_locations
  }

}

module.exports = {findLocation}
