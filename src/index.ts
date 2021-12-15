/** Use Axios to get data from restcountries api */
import axios from 'axios';
import { get } from 'http';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(country: string) {
    const getApi = await axios(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const countryData = getApi.data[0];
   const requiredData={
     capital:countryData.capital[0],
     region: countryData.region,
    numericCode: countryData.ccn3
   }
    console.log(requiredData);
    return requiredData ;
  }
  

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  console.log(countries)
  return countries;
}

// getRegionCountries("EU");
/** Create getRegionCapitals function here */
async function getRegionCapitals(region: string) {
    const getApi = await axios(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = getApi.data;
    const capitals = [];
    for (let i = 0; i < data.length; i++) {
      capitals.push(data[i].capital[0]);
    }
    console.log(capitals)
    return capitals;
  }
  
  // getRegionCapitals("africa")



export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
