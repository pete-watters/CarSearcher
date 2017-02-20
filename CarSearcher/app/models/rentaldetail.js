import DS from 'ember-data';

export default DS.Model.extend({
  pickupDate: DS.attr('string'),
  returnDate: DS.attr('string'),
  pickupLocation: DS.attr('string'),
  returnLocation: DS.attr('string')
});
