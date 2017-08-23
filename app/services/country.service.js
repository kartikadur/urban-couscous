// Sample data
// const countries = [{
//   name: 'Afghanistan',
// }, {
//   name: 'Åland Islands',
// }, {
//   name: 'Albania',
// }, {
//   name: 'Algeria',
// }, {
//   name: 'American Samoa',
// }, {
//   name: 'Andorra',
// }, {
//   name: 'Angola',
// }, {
//   name: 'Anguilla',
// }, {
//   name: 'Antarctica',
//   relevance: '0',
// }, {
//   name: 'Antigua and Barbuda',
// }, {
//   name: 'Argentina',
// }, {
//   name: 'Armenia',
// }, {
//   name: 'Aruba',
// }, {
//   name: 'Australia',
// }, {
//   name: 'Austria',
// }, {
//   name: 'Azerbaijan',
// }, {
//   name: 'Bahamas',
// }, {
//   name: 'Bahrain',
// }, {
//   name: 'Bangladesh',
// }, {
//   name: 'Barbados',
// }, {
//   name: 'Belarus',
// }, {
//   name: 'Belgium',
// }, {
//   name: 'Belize',
// }, {
//   name: 'Benin',
// }, {
//   name: 'Bermuda',
// }, {
//   name: 'Bhutan',
// }, {
//   name: 'Bolivia (Plurinational State of)',
// }, {
//   name: 'Bonaire, Sint Eustatius and Saba',
// }, {
//   name: 'Bosnia and Herzegovina',
// }, {
//   name: 'Botswana',
// }, {
//   name: 'Bouvet Island',
// }, {
//   name: 'Brazil',
// }, {
//   name: 'British Indian Ocean Territory',
// }, {
//   name: 'United States Minor Outlying Islands',
// }, {
//   name: 'Virgin Islands (British)',
// }, {
//   name: 'Virgin Islands (U.S.)',
//   relevance: '0.5',
// }, {
//   name: 'Brunei Darussalam',
// }, {
//   name: 'Bulgaria',
// }, {
//   name: 'Burkina Faso',
// }, {
//   name: 'Burundi',
// }, {
//   name: 'Cambodia',
// }, {
//   name: 'Cameroon',
// }, {
//   name: 'Canada',
// }, {
//   name: 'Cabo Verde',
// }, {
//   name: 'Cayman Islands',
// }, {
//   name: 'Central African Republic',
// }, {
//   name: 'Chad',
// }, {
//   name: 'Chile',
// }, {
//   name: 'China',
// }, {
//   name: 'Christmas Island',
// }, {
//   name: 'Cocos (Keeling) Islands',
// }, {
//   name: 'Colombia',
// }, {
//   name: 'Comoros',
// }, {
//   name: 'Congo',
// }, {
//   name: 'Congo (Democratic Republic of the)',
// }, {
//   name: 'Cook Islands',
// }, {
//   name: 'Costa Rica',
// }, {
//   name: 'Croatia',
// }, {
//   name: 'Cuba',
// }, {
//   name: 'Curaçao',
// }, {
//   name: 'Cyprus',
// }, {
//   name: 'Czech Republic',
// }, {
//   name: 'Denmark',
// }, {
//   name: 'Djibouti',
// }, {
//   name: 'Dominica',
// }, {
//   name: 'Dominican Republic',
// }, {
//   name: 'Ecuador',
// }, {
//   name: 'Egypt',
// }, {
//   name: 'El Salvador',
// }, {
//   name: 'Equatorial Guinea',
// }, {
//   name: 'Eritrea',
// }, {
//   name: 'Estonia',
// }, {
//   name: 'Ethiopia',
// }, {
//   name: 'Falkland Islands (Malvinas)',
// }, {
//   name: 'Faroe Islands',
// }, {
//   name: 'Fiji',
// }, {
//   name: 'Finland',
// }, {
//   name: 'France',
// }, {
//   name: 'French Guiana',
// }, {
//   name: 'French Polynesia',
// }, {
//   name: 'French Southern Territories',
// }, {
//   name: 'Gabon',
// }, {
//   name: 'Gambia',
// }, {
//   name: 'Georgia',
// }, {
//   name: 'Germany',
// }, {
//   name: 'Ghana',
// }, {
//   name: 'Gibraltar',
// }, {
//   name: 'Greece',
// }, {
//   name: 'Greenland',
// }, {
//   name: 'Grenada',
// }, {
//   name: 'Guadeloupe',
// }, {
//   name: 'Guam',
// }, {
//   name: 'Guatemala',
// }, {
//   name: 'Guernsey',
// }, {
//   name: 'Guinea',
// }, {
//   name: 'Guinea-Bissau',
// }, {
//   name: 'Guyana',
// }, {
//   name: 'Haiti',
// }, {
//   name: 'Heard Island and McDonald Islands',
// }, {
//   name: 'Holy See',
// }, {
//   name: 'Honduras',
// }, {
//   name: 'Hong Kong',
// }, {
//   name: 'Hungary',
// }, {
//   name: 'Iceland',
// }, {
//   name: 'India',
// }, {
//   name: 'Indonesia',
// }, {
//   name: 'Côte d\'Ivoire',
// }, {
//   name: 'Iran (Islamic Republic of)',
// }, {
//   name: 'Iraq',
// }, {
//   name: 'Ireland',
// }, {
//   name: 'Isle of Man',
// }, {
//   name: 'Israel',
// }, {
//   name: 'Italy',
// }, {
//   name: 'Jamaica',
// }, {
//   name: 'Japan',
// }, {
//   name: 'Jersey',
// }, {
//   name: 'Jordan',
// }, {
//   name: 'Kazakhstan',
// }, {
//   name: 'Kenya',
// }, {
//   name: 'Kiribati',
// }, {
//   name: 'Kuwait',
// }, {
//   name: 'Kyrgyzstan',
// }, {
//   name: 'Lao People\'s Democratic Republic',
// }, {
//   name: 'Latvia',
// }, {
//   name: 'Lebanon',
// }, {
//   name: 'Lesotho',
// }, {
//   name: 'Liberia',
// }, {
//   name: 'Libya',
// }, {
//   name: 'Liechtenstein',
// }, {
//   name: 'Lithuania',
// }, {
//   name: 'Luxembourg',
// }, {
//   name: 'Macao',
// }, {
//   name: 'Macedonia (the former Yugoslav Republic of)',
// }, {
//   name: 'Madagascar',
// }, {
//   name: 'Malawi',
// }, {
//   name: 'Malaysia',
// }, {
//   name: 'Maldives',
// }, {
//   name: 'Mali',
// }, {
//   name: 'Malta',
// }, {
//   name: 'Marshall Islands',
// }, {
//   name: 'Martinique',
// }, {
//   name: 'Mauritania',
// }, {
//   name: 'Mauritius',
// }, {
//   name: 'Mayotte',
// }, {
//   name: 'Mexico',
// }, {
//   name: 'Micronesia (Federated States of)',
// }, {
//   name: 'Moldova (Republic of)',
// }, {
//   name: 'Monaco',
// }, {
//   name: 'Mongolia',
// }, {
//   name: 'Montenegro',
// }, {
//   name: 'Montserrat',
// }, {
//   name: 'Morocco',
// }, {
//   name: 'Mozambique',
// }, {
//   name: 'Myanmar',
// }, {
//   name: 'Namibia',
// }, {
//   name: 'Nauru',
// }, {
//   name: 'Nepal',
// }, {
//   name: 'Netherlands',
// }, {
//   name: 'New Caledonia',
// }, {
//   name: 'New Zealand',
// }, {
//   name: 'Nicaragua',
// }, {
//   name: 'Niger',
// }, {
//   name: 'Nigeria',
// }, {
//   name: 'Niue',
// }, {
//   name: 'Norfolk Island',
// }, {
//   name: 'Korea (Democratic People\'s Republic of)',
// }, {
//   name: 'Northern Mariana Islands',
// }, {
//   name: 'Norway',
// }, {
//   name: 'Oman',
// }, {
//   name: 'Pakistan',
// }, {
//   name: 'Palau',
// }, {
//   name: 'Palestine, State of',
// }, {
//   name: 'Panama',
// }, {
//   name: 'Papua New Guinea',
// }, {
//   name: 'Paraguay',
// }, {
//   name: 'Peru',
// }, {
//   name: 'Philippines',
// }, {
//   name: 'Pitcairn',
// }, {
//   name: 'Poland',
// }, {
//   name: 'Portugal',
// }, {
//   name: 'Puerto Rico',
// }, {
//   name: 'Qatar',
// }, {
//   name: 'Republic of Kosovo',
// }, {
//   name: 'Réunion',
// }, {
//   name: 'Romania',
// }, {
//   name: 'Russian Federation',
// }, {
//   name: 'Rwanda',
// }, {
//   name: 'Saint Barthélemy',
// }, {
//   name: 'Saint Helena, Ascension and Tristan da Cunha',
// }, {
//   name: 'Saint Kitts and Nevis',
// }, {
//   name: 'Saint Lucia',
// }, {
//   name: 'Saint Martin (French part)',
// }, {
//   name: 'Saint Pierre and Miquelon',
// }, {
//   name: 'Saint Vincent and the Grenadines',
// }, {
//   name: 'Samoa',
// }, {
//   name: 'San Marino',
// }, {
//   name: 'Sao Tome and Principe',
// }, {
//   name: 'Saudi Arabia',
// }, {
//   name: 'Senegal',
// }, {
//   name: 'Serbia',
// }, {
//   name: 'Seychelles',
// }, {
//   name: 'Sierra Leone',
// }, {
//   name: 'Singapore',
// }, {
//   name: 'Sint Maarten (Dutch part)',
// }, {
//   name: 'Slovakia',
// }, {
//   name: 'Slovenia',
// }, {
//   name: 'Solomon Islands',
// }, {
//   name: 'Somalia',
// }, {
//   name: 'South Africa',
// }, {
//   name: 'South Georgia and the South Sandwich Islands',
// }, {
//   name: 'Korea (Republic of)',
// }, {
//   name: 'South Sudan',
// }, {
//   name: 'Spain',
// }, {
//   name: 'Sri Lanka',
// }, {
//   name: 'Sudan',
// }, {
//   name: 'Suriname',
// }, {
//   name: 'Svalbard and Jan Mayen',
// }, {
//   name: 'Swaziland',
// }, {
//   name: 'Sweden',
// }, {
//   name: 'Switzerland',
// }, {
//   name: 'Syrian Arab Republic',
// }, {
//   name: 'Taiwan, Province of China',
// }, {
//   name: 'Tajikistan',
// }, {
//   name: 'Tanzania, United Republic of',
// }, {
//   name: 'Thailand',
// }, {
//   name: 'Timor-Leste',
// }, {
//   name: 'Togo',
// }, {
//   name: 'Tokelau',
// }, {
//   name: 'Tonga',
// }, {
//   name: 'Trinidad and Tobago',
// }, {
//   name: 'Tunisia',
// }, {
//   name: 'Turkey',
// }, {
//   name: 'Turkmenistan',
// }, {
//   name: 'Turks and Caicos Islands',
// }, {
//   name: 'Tuvalu',
// }, {
//   name: 'Uganda',
// }, {
//   name: 'Ukraine',
// }, {
//   name: 'United Arab Emirates',
// }, {
//   name: 'United Kingdom of Great Britain and Northern Ireland',
// }, {
//   name: 'United States of America',
// }, {
//   name: 'Uruguay',
// }, {
//   name: 'Uzbekistan',
// }, {
//   name: 'Vanuatu',
// }, {
//   name: 'Venezuela (Bolivarian Republic of)',
// }, {
//   name: 'Viet Nam',
// }, {
//   name: 'Wallis and Futuna',
// }, {
//   name: 'Western Sahara',
// }, {
//   name: 'Yemen',
// }, {
//   name: 'Zambia',
// }, {
//   name: 'Zimbabwe',
// }];

// const country = [{
//   name: 'Colombia',
//   topLevelDomain: ['.co'],
//   alpha2Code: 'CO',
//   alpha3Code: 'COL',
//   callingCodes: ['57'],
//   capital: 'Bogotá',
//   altSpellings: ['CO', 'Republic of Colombia', 'República de Colombia'],
//   region: 'Americas',
//   subregion: 'South America',
//   population: 48759958,
//   latlng: [4.0, -72.0],
//   demonym: 'Colombian',
//   area: 1141748.0,
//   gini: 55.9,
//   timezones: ['UTC-05:00'],
//   borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
//   nativeName: 'Colombia',
//   numericCode: '170',
//   currencies: [{
//     code: 'COP',
//     name: 'Colombian peso',
//     symbol: '$',
//   }],
//   languages: [{
//     iso639_1: 'es',
//     iso639_2: 'spa',
//     name: 'Spanish',
//     nativeName: 'Español',
//   }],
//   translations: {
//     de: 'Kolumbien',
//     es: 'Colombia',
//     fr: 'Colombie',
//     ja: 'コロンビア',
//     it: 'Colombia',
//     br: 'Colômbia',
//     pt: 'Colômbia',
//   },
//   flag: 'https://restcountries.eu/data/col.svg',
//   regionalBlocs: [{
//     acronym: 'PA',
//     name: 'Pacific Alliance',
//     otherAcronyms: [],
//     otherNames: ['Alianza del Pacífico'],
//   }, {
//     acronym: 'USAN',
//     name: 'Union of South American Nations',
//     otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
//     otherNames: [
//       'Unión de Naciones Suramericanas',
//       'União de Nações Sul-Americanas',
//       'Unie van Zuid-Amerikaanse Naties',
//       'South American Union'],
//   }],
// }];

const url = 'https://restcountries.eu/rest/v2';

// Local variable to store previously fetched data
// let preCalledCountries = [];

const apiError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

// TODO: store data in local variable before returning value;
const handleDetailData = data => data[0];

const handleNameData = data => data;

const filterError = (data) => {
  if (data.status > 399) {
    return data.json().then((json) => { throw apiError(data.status, json.message); });
  }

  return data.json();
};

const countryNames = () => {
  const uri = `${url}/all?fields=name`;
  return window.fetch(uri)
    .then(filterError)
    .then(handleNameData);
};

// TODO: check local variable if data already exists before fetch call
const countryDetails = (name, fullText = true) => {
  let uri = `${url}/name/${name}`;
  if (fullText) {
    uri = `${uri}?fullText=true`;
  }
  return window.fetch(uri)
    .then(filterError)
    .then(handleDetailData);
};

module.exports = {
  countryNames,
  countryDetails,
};
