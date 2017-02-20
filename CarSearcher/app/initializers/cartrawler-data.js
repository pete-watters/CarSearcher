import Ember from 'ember';

const loadDataFromLocalJSON = (url) => {
  return new Ember.RSVP.Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'json';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
        }
      }
    }
  });
};

const populateLocalStorage = (url) => {
  loadDataFromLocalJSON(url).then(function(json) {
    window.localStorage.setItem("VehRentalCore", JSON.stringify(json[0].VehAvailRSCore.VehRentalCore));
    window.localStorage.setItem("VehVendorAvails", JSON.stringify(json[0].VehAvailRSCore.VehVendorAvails));
  }, function(reason) {
    console.log("Cannot load local JSON: " + reason);
  });
};

export function initialize( ) {
  // api.json
  // http://www.cartrawler.com/ctabe/cars.json

  // TODO - specify 'Access-Control-Allow-Origin' header on the resource

  populateLocalStorage('api.json');
}

export default {
  name: 'cartrawler-data',
  initialize: initialize
};
