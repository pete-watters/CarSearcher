import DS from 'ember-data';

export default DS.Model.extend({
  vendorCode: DS.attr('string'),
  vendorName: DS.attr('string')
});
