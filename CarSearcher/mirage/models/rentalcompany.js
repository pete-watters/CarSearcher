import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  vendorCode: DS.attr('string'),
  vendorName: DS.attr('string')
});
