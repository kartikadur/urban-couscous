const D3 = require('d3');
const topojson = require('topojson');

const jsonData = new Promise((resolve, reject) => {
  D3.json('assets/worldCountriesMap.json', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const tsvData = new Promise((resolve, reject) => {
  D3.tsv('assets/worldCountryNames.tsv', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const makeMapOf = (cID, userOptions) => (([map]) => {
  // Default options
  const options = Object.assign({
    container: '#card__map',
    width: 560,
    height: 200,
    margin: {
      bottom: 5, left: 5, right: 5, top: 5,
    },
  }, userOptions);

  const mapWidth = options.width - options.margin.left - options.margin.right;
  const mapHeight = options.height - options.margin.top - options.margin.bottom;

  const svg = D3.select(options.container)
    .append('svg')
    .attr('width', mapWidth)
    .attr('height', mapHeight);

  const g = svg.append('g')
    .style('stroke-width', '1.5px');

  const projection = D3.geoMercator()
    .scale(100)
    .translate([mapWidth / 2, mapHeight / 2]);

  const path = D3.geoPath()
    .projection(projection);

  const border = topojson.mesh(map, map.objects.countries, (a, b) => a !== b);
  const countries = topojson.feature(map, map.objects.countries).features;

  // Merge country names from names object into countries object using country id
  // countries.map(d => (Object.assign(d, names.filter(n => +n.id === +d.id)[0])));

  // User selected country
  const chosenCountry = countries.filter(c => c.properties.id === cID)[0];

  // console.log(chosenCountry);

  g.selectAll('path')
    .data(countries)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('class', (d) => {
      if (d.properties.id === cID) {
        return 'country active';
      }
      return 'country';
    });

  g.append('path')
    .datum(border)
    .attr('class', 'border')
    .attr('d', path);

  if (chosenCountry) {
    const bounds = path.bounds(chosenCountry);
    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[1][0] + bounds[0][0]) / 2;
    const y = (bounds[1][1] + bounds[0][1]) / 2;
    const scale = 0.9 / Math.max(dx / mapWidth, dy / mapHeight);
    const translate = [(mapWidth / 2) - (scale * x), (mapHeight / 2) - (scale * y)];

    g.transition()
      .style('stroke-width', `${1.5 / scale}px`)
      .duration(1250)
      .attr('transform', `translate(${translate})scale(${scale})`);
  }
});

module.exports = {
  jsonData,
  tsvData,
  makeMapOf,
};

