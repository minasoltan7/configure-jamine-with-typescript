import countries from "../index";

it("should get basic data on the country canada", async () => {
  const data = await countries.getCountry('canada');
  expect(data).toEqual({
    capital: 'Ottawa',
    region: 'Americas',
    numericCode: '124'
  });
});

/** Add test for getRegionCountries function here */


it("should get capitals of AFRICA countries", async () => {
  const data = await countries.getRegionCapitals('africa');
  expect(data).toEqual([
    'Moroni',       'Cairo',        'Ouagadougou', 'Maseru',
    'Lomé',         'Antananarivo', 'Port Louis',  'Mbabane',
    'Lilongwe',     'Gaborone',     'Djibouti',    'Brazzaville',
    'Lusaka',       'Conakry',      'Kigali',      'Kinshasa',
    'Asmara',       'El Aaiún',     'Niamey',      'Algiers',
    'Mogadishu',    'Yaoundé',      'Gitega',      'Bamako',
    'Dodoma',       'Windhoek',     'Khartoum',    'Bissau',
    'Abuja',        'Yamoussoukro', 'Tunis',       'Nouakchott',
    'Praia',        'Kampala',      'Luanda',      'Rabat',
    'Tripoli',      'Victoria',     'Freetown',    'Accra',
    'Juba',         'Maputo',       'Harare',      'Porto-Novo',
    'São Tomé',     'Addis Ababa',  'Pretoria',    "N'Djamena",
    'Monrovia',     'Libreville',   'Mamoudzou',   'Malabo',
    'Bangui',       'Dakar',        'Saint-Denis', 'Banjul',
    'Diego Garcia', 'Nairobi',      'Jamestown'
  ]);
});



it("should get all countries in Europe", async () => {
    const data = await countries.getRegionCountries('EU');
    expect(data).toEqual([
        'Åland Islands',  'Austria',
        'Belgium',        'Bulgaria',
        'Croatia',        'Cyprus',
        'Czech Republic', 'Denmark',
        'Estonia',        'Finland',
        'France',         'French Guiana',
        'Germany',        'Gibraltar',
        'Greece',         'Hungary',
        'Ireland',        'Isle of Man',
        'Italy',          'Latvia',
        'Lithuania',      'Luxembourg',
        'Malta',          'Netherlands',
        'Poland',         'Portugal',
        'Romania',        'Slovakia',
        'Slovenia',       'Spain',
        'Sweden'
      ]);
  });