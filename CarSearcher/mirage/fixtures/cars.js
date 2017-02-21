const apiResponse = window.localStorage.getItem("carTrawlerAPI");
const API = JSON.parse(apiResponse);

const vehiclesAvailableObject = API[0].VehAvailRSCore.VehVendorAvails;
const vehiclesArray = [];

vehiclesAvailableObject.forEach(function(item, index) {
  vehiclesArray.push({id: `${index+1}`, vendorCode: item["Vendor"]["@Code"] , vendorName: item["Vendor"]["@Name"], vehicles: item["VehAvails"]});
});

const reducedVehiclesArray = [];
let vehicleID = 1;

vehiclesArray.reduce(function(obj,item){
  const vendorName = item.vendorName;
  const vendorCode = Number(item.vendorCode);

  item.vehicles.forEach((item) =>{
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
    vehicleID++;
  });
  return obj;
},{});
export default reducedVehiclesArray;
