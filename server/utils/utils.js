const utils = {};


utils.dataFormatter = (data) => {
  const favorites = [];
  data.forEach(obj => {
    const formattedObj = {};
    formattedObj.parkCode = obj.parkCode;
    formattedObj.fullName = obj.fullName;
    formattedObj.weatherInfo = obj.weatherInfo;
    formattedObj.images = obj.images;
    formattedObj.activities = obj.activities;
    formattedObj.latitude = obj.latitude;
    formattedObj.longitude = obj.longitude;
    favorites.push(formattedObj)
  })
  return favorites;
}

utils.parkDataFormatter = (data) => {
  const parkData = [];
  data.forEach(obj => {
    const formattedObj = {};
    formattedObj.fullName = obj.fullName;
    formattedObj.parkCode = obj.parkCode;
    formattedObj.latitude = obj.latitude;
    formattedObj.longitude = obj.longitude;
    parkData.push(formattedObj)
  })
  return parkData
}

module.exports = utils;