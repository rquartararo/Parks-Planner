
// * the below function was used to create an array of objects due to National Park Service's slow API response...
// array of objects syntax: [ { name: 'National Park Name, parkCode: 'parkCode', latitude: 12345, longitude: 12345 }]
// * this was then stored into our SQL database which we send the initial request to instead :-)
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const npsAPIKey = process.env.NPS_API_KEY;

const parkCodes =
  'anac,appa,arch,badl,bibe,blca,brca,cany,cave,coga,crla,cuva,drto,ever,foth,fofr,gaar,jeff,glba,glac,glec,grba,grsa,gumo,hosp,indu,jeca,jomu,kefj,lavo,lode,maac,maca,mnrr,mora,npnh,jazz,ozar,pefo,redw,romo,seki,thro,viis,whis,whsa,wotr,wrst,yell,yose';
npsController.getParksAPI = (req, res, next) => {
  const url = 'https://developer.nps.gov/api/v1/parks';

  axios
    .get(url, {
      params: {
        parkCode: parkCodes,
        api_key: npsAPIKey,
      },
    })
    .then((data) => {
      let parks = [];

      for (let el of data.data.data) {
        let parkObj = {};
        parkObj.fullName = el.fullName;
        parkObj.parkCode = el.parkCode;
        parkObj.latitude = parseFloat(el.latitude);
        parkObj.longitude = parseFloat(el.longitude);
        parkObj.weatherInfo = el.weatherInfo;
        parkObj.images = el.images;
        parkObj.activities = el.activities;

        parks.push(parkObj);
      }

      fs.writeFileSync(path.resolve(__dirname, '../json/parks.json'), JSON.stringify(parks));
      console.log(parks);
      res.locals.parks = parks;
      next();
    })
    .catch((err) => {
      return next({
        log: err,
        message: 'Something went wrong with the get request to NPS.gov/api',
      });
    });
};

// * used to load SQL database with NPS response...

npsController.loadSQL = (req, res, next) => {
  const query = `INSERT INTO parks ("parkCode", "fullName", "latitude", "longitude", "weatherInfo", "images", "activities") VALUES($1, $2, $3, $4, $5, $6, $7)`;
  const parksArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../json/parks.json')));

  for (let array of parksArray) {
    let park = [
      array.parkCode,
      array.fullName,
      array.latitude,
      array.longitude,
      array.weatherInfo,
      JSON.stringify(array.images),
      JSON.stringify(array.activities),
    ];

    db.query(query, park)
      .then((added) => {
        console.log(added);
      })
      .catch((err) => console.log(err));
  }
};
