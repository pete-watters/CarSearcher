import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    console.log('sort cars by price');

    return Ember.RSVP.hash({
      rentaldetails: this.store.findAll('rentaldetail' , { reload: true }),
      rentalcompanys: this.store.findAll('rentalcompany', { reload: true }),
      cars: this.store.findAll('car', { reload: true }).then(function(cars){
        return cars.sortBy('totalChargeRateTotalAmount');
      })
    });

  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});
