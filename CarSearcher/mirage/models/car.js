import { Model } from 'ember-cli-mirage';
import DS from 'ember-data';

export default Model.extend({
  vendorName: DS.attr('string'),
  vendorCode: DS.attr('string')
});
