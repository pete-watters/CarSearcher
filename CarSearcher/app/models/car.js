import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  vendorCode: DS.attr('string'),
  vendorName: DS.attr('string'),
  totalChargeCurrencyCode: DS.attr('string'),
  totalChargeEstimatedTotalAmount: DS.attr('string'),
  totalChargeRateTotalAmount: DS.attr('number'),
  vehicleSpecAirConditionInd: DS.attr('string'),
  vehicleSpecCode: DS.attr('string'),
  vehicleSpecCodeContext: DS.attr('string'),
  vehicleSpecDoorCount: DS.attr('string'),
  vehicleSpecDriveType: DS.attr('string'),
  vehicleSpecFuelType: DS.attr('string'),
  vehicleSpecPassengerQuantity: DS.attr('string'),
  vehicleSpecTransmissionType: DS.attr('string'),
  vehicleSpecPictureURL: DS.attr('string'),
  vehicleSpecDescription: DS.attr('string')
});
