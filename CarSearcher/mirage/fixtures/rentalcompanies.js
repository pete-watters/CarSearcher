const apiResponse = window.localStorage.getItem("carTrawlerAPI");
const API = JSON.parse(apiResponse);

const vehicleVendorsAvailableObject = API[0].VehAvailRSCore.VehVendorAvails;

const vendorArray = [];

vehicleVendorsAvailableObject.forEach(function(item, index) {
  vendorArray.push({id: `${index+1}`, vendorCode: item["Vendor"]["@Code"] , vendorName: item["Vendor"]["@Name"]});
});

export default vendorArray;
