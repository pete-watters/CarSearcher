import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cars', {path: '/cars/:car_id'});
  this.route('rentaldetails', {path: '/rentaldetails/:rental_id'});
  this.route('rentalcompanies', {path: '/rentalcompanies/:rental_id'});
});

export default Router;
