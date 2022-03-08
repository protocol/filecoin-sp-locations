# filecoin-sp-locations
Versioned query system to find SP locations

# How to use
findLocation takes as input:

```
{ "minerID": string, // the SP minerID you are searching for the location of
"loc_version": string } // version of the location information used 
```

And returns as output:
```
{ "minerID": string, // the SP minerID you are searching for the location of
"loc_version": string, // version of the location information used 
"country": string, // If all locations are from the same country, contains country code
"locations": [ // array of the locations found for this minerID in this location version
  {"region_code": string, // varies based on version, generally COUNTRY-PROVINCE
  "long": num, // longitude
  "lat":num} //latitude
  ...]
  }
  
```

# Versions
## v 1.2.0
Uses synthetic location information from Jim Pick's provider quest project
See Jim's presentation on the methodology [here](https://youtu.be/PyxSRV0UlFc?t=2633)
Data pulled from [this textile bucket](https://hub.textile.io/thread/bafkwblbznyqkmqx5l677z3kjsslhxo2vbbqh6wluunvvdbmqattrdya/buckets/bafzbeibjg7kky45npdwnogui5ffla7dint62xpttvvlzrsbewlrfmbusya/synthetic-country-state-province-locations-latest.json)
