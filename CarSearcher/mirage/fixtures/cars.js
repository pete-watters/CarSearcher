const apiResponse = window.localStorage.getItem("carTrawlerAPI");
const API = JSON.parse(apiResponse);

const vehiclesAvailableObject = API[0].VehAvailRSCore.VehVendorAvails;
console.log("HOLY MOLY");
const vehiclesArray = [];



vehiclesAvailableObject.forEach(function(item, index) {
  vehiclesArray.push({id: `${index+1}`, vendorCode: item["Vendor"]["@Code"] , vendorName: item["Vendor"]["@Name"], vehicles: item["VehAvails"]});
});

const reducedVehiclesArray = [];
let vehicleID = 1;



var vehiclesArrayReduced = vehiclesArray.reduce(function(obj,item, currentIndex, array){
  // obj[item.vendorCode] = item.vehicles;
  // reducedVehiclesArray.push({id: currentIndex+1, vehicles: item.vehicles , array: array});
  //
  // const id = currentIndex+1;
  const vendorName = item.vendorName;
  const vendorCode = Number(item.vendorCode);
  console.log("currentIndex" + currentIndex);


  item.vehicles.forEach((item, index) =>{


    console.log("index" + index);

    reducedVehiclesArray.push({
      id: vehicleID,
      status: item["@Status"],
      vendorName: vendorName,
      vendorCode: vendorCode,
      totalChargeCurrencyCode: item["TotalCharge"]["@CurrencyCode"],
      totalChargeEstimatedTotalAmount: item["TotalCharge"]["@CurrencyCode"],
      totalChargeRateTotalAmount: item["TotalCharge"]["@RateTotalAmount"],
      vehicleSpecAirConditionInd : item["Vehicle"]["@AirConditionInd"],
      vehicleSpecCode : item["Vehicle"]["@Code"],
      vehicleSpecCodeContext : item["Vehicle"]["@CodeContext"],
      vehicleSpecDoorCount: item["Vehicle"]["@DoorCount"],
      vehicleSpecDriveType : item["Vehicle"]["@DriveType"],
      vehicleSpecFuelType : item["Vehicle"]["@FuelType"],
      vehicleSpecPassengerQuantity : item["Vehicle"]["@PassengerQuantity"],
      vehicleSpecTransmissionType : item["Vehicle"]["@TransmissionType"],
      vehicleSpecPictureURL : item["Vehicle"]["PictureURL"],
      vehicleSpecDescription : item["Vehicle"]["VehMakeModel"]["@Name"]
    });

    JSON.stringify({
      id: vehicleID,
      status: item["@Status"],
      vendorName: vendorName,
      vendorCode: vendorCode,
      totalChargeCurrencyCode: item["TotalCharge"]["@CurrencyCode"],
      totalChargeEstimatedTotalAmount: item["TotalCharge"]["@CurrencyCode"],
      totalChargeRateTotalAmount: item["TotalCharge"]["@RateTotalAmount"],
      vehicleSpecAirConditionInd : item["Vehicle"]["@AirConditionInd"],
      vehicleSpecCode : item["Vehicle"]["@Code"],
      vehicleSpecCodeContext : item["Vehicle"]["@CodeContext"],
      vehicleSpecDoorCount: item["Vehicle"]["@DoorCount"],
      vehicleSpecDriveType : item["Vehicle"]["@DriveType"],
      vehicleSpecFuelType : item["Vehicle"]["@FuelType"],
      vehicleSpecPassengerQuantity : item["Vehicle"]["@PassengerQuantity"],
      vehicleSpecTransmissionType : item["Vehicle"]["@TransmissionType"],
      vehicleSpecPictureURL : item["Vehicle"]["PictureURL"],
      vehicleSpecDescription : item["Vehicle"]["VehMakeModel"]["@Name"]
    });

    vehicleID++;
  });

  // todo now loop through vehicles to push into array

  return obj;
},{});

console.log(vehiclesArrayReduced);
console.log(reducedVehiclesArray);
// // export default vehiclesArray;
// var formattedResponse = [];
//
// reducedVehiclesArray.reduce(function(obj,item, currentIndex, array){
//   // formattedResponse.push({id: index+1,  });
//   // obj[item.vendorCode] = item.vehicles;
//   obj[item.id] = currentIndex;
//   // reducedVehiclesArray.push({id: currentIndex+1, vehicles: item.vehicles , array: array});
//   console.log(obj);
//   return obj;
// });
var test = [];
reducedVehiclesArray.forEach(function(item, index) {
  test.push(item);
  console.log(item + index);
});
console.log(test);

export default [
  {id: 1, title: 'Check out the first title', text: 'Test123 title1', dog: 'woof'},
  {id: 2, title: 'Check out the second title', text: 'Test123 title2', dog: 'woof'},
  {id: 3, title: 'Check out the third title', text: 'Test123 title3', dog: 'woof'},
  {id: 4, title: 'Check out the fourth title', text: 'Test123 title4', dog: 'woof'}
];
