import DS from 'ember-data';

export default DS.Model.extend({
  vendorName: DS.attr('string'),
  vendorCode: DS.attr('string')
});
