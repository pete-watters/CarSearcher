import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentaldetails: this.store.findAll('rentaldetail' , { reload: true }),
      rentalcompanys: this.store.findAll('rentalcompany', { reload: true }),
      cars: this.store.findAll('car', { reload: true }).then(function(cars){
        // automatically sort the cars by price
        return cars.sortBy('totalChargeRateTotalAmount');
      })
    });

  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});
