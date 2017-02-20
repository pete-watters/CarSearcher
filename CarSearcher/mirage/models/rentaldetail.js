import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  pickupDate: DS.attr('string'),
  returnDate: DS.attr('string'),
  pickupLocation: DS.attr('string'),
  returnLocation: DS.attr('string')
});
