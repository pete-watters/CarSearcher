const apiResponse = window.localStorage.getItem("carTrawlerAPI");
const API = JSON.parse(apiResponse);

const rentalDetailObject = API[0].VehAvailRSCore.VehRentalCore;

export default [
  { id: 1,
    pickupDate: Date(rentalDetailObject["@PickUpDateTime"]),
    returnDate: Date(rentalDetailObject["@ReturnDateTime"]),
    pickupLocation: rentalDetailObject["PickUpLocation"]["@Name"],
    returnLocation: rentalDetailObject["ReturnLocation"]["@Name"]
  }
];
