import Ember from 'ember';

const loadDataFromLocalJSON = (url) => {
  return new Ember.RSVP.Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onreadystatechange = handler;
    xhr.responseType = 'text';
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(this.responseText);
        } else {
          reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
        }
      }
    }
  });
};

const populateLocalStorage = (url) => {
  loadDataFromLocalJSON(url).then((json) => {
    // the promise has now resolved so we can populate localstorage
    window.localStorage.setItem("carTrawlerAPI", json);
  }, function(reason) {
    console.log("Cannot load local JSON: " + reason);
    // it has failed so lets have a fallback ready
    window.localStorage.setItem("carTrawlerAPI", JSON.stringify([{"VehAvailRSCore":{"VehRentalCore":{"@PickUpDateTime":"2014-09-22T10:00:00Z","@ReturnDateTime":"2014-10-06T10:00:00Z","PickUpLocation":{"@Name":"Las Vegas - Airport"},"ReturnLocation":{"@Name":"Las Vegas - Airport"}},"VehVendorAvails":[{"Vendor":{"@Code":"125","@Name":"ALAMO"},"VehAvails":[{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5+","@BaggageQuantity":"3","@Code":"IFAR","@CodeContext":"CARTRAWLER","@DoorCount":"5","VehMakeModel":{"@Name":"Toyota Rav4 or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"878.98","@EstimatedTotalAmount":"878.98","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"4","@Code":"PCAR","@CodeContext":"CARTRAWLER","@DoorCount":"4","VehMakeModel":{"@Name":"Chrysler 300 or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"851.03","@EstimatedTotalAmount":"851.03","@CurrencyCode":"CAD"}}]},{"Vendor":{"@Code":"1364","@Name":"AVIS"},"VehAvails":[{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"4","@Code":"FDAR","@CodeContext":"CARTRAWLER","@DoorCount":"4","VehMakeModel":{"@Name":"Chevrolet Impala or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"836.25","@EstimatedTotalAmount":"836.25","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"4","@Code":"FCAR","@CodeContext":"CARTRAWLER","@DoorCount":"3","VehMakeModel":{"@Name":"Chevrolet Impala or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"836.25","@EstimatedTotalAmount":"836.25","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5+","@BaggageQuantity":"3","@Code":"IFAR","@CodeContext":"CARTRAWLER","@DoorCount":"5","VehMakeModel":{"@Name":"Ford Escape or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/ford/escape_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"928.29","@EstimatedTotalAmount":"928.29","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"5","@Code":"LDAR","@CodeContext":"CARTRAWLER","@DoorCount":"4","VehMakeModel":{"@Name":"Cadillac CTS or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/cadillac/cts_sedan_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"1118.83","@EstimatedTotalAmount":"1118.83","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"5","@Code":"PDAR","@CodeContext":"CARTRAWLER","@DoorCount":"4","VehMakeModel":{"@Name":"Chrysler 300 or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"1071.92","@EstimatedTotalAmount":"1071.92","@CurrencyCode":"CAD"}}]},{"Vendor":{"@Code":"2338","@Name":"HERTZ"},"VehAvails":[{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"4","@Code":"ICAR","@CodeContext":"CARTRAWLER","@DoorCount":"3","@Size":"6","VehMakeModel":{"@Name":"Toyota Corolla or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/toyota/corolla_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"752.31","@EstimatedTotalAmount":"752.31","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"2","@Code":"ECAR","@CodeContext":"CARTRAWLER","@DoorCount":"2","VehMakeModel":{"@Name":"Kia Rio or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/kia/rio_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"731.47","@EstimatedTotalAmount":"731.47","@CurrencyCode":"CAD"}},{"@Status":"Available","Vehicle":{"@AirConditionInd":"true","@TransmissionType":"Automatic","@FuelType":"Petrol","@DriveType":"Unspecified","@PassengerQuantity":"5","@BaggageQuantity":"2","@Code":"CDAR","@CodeContext":"CARTRAWLER","@DoorCount":"5","VehMakeModel":{"@Name":"Ford Focus or similar"},"PictureURL":"https://cdn.cartrawler.com/otaimages/ford/focus_sedan_nologo.jpg"},"TotalCharge":{"@RateTotalAmount":"731.49","@EstimatedTotalAmount":"731.49","@CurrencyCode":"CAD"}}]}]}}]));
  });
};

export function initialize( ) {
  // FIXME
  // - specify 'Access-Control-Allow-Origin' header on the resource
  // - then it can be loaded from : http://www.cartrawler.com/ctabe/cars.json
  populateLocalStorage('api.json');
}

export default {
  name: 'load-data-from-json',
  initialize: initialize
};
