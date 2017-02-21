export default function() {

  this.timing = 400; // add delay to boot
  window.localStorage.getItem("carTrawlerAPI");

  this.passthrough('/api.json'); // allow passthrough for data file
  this.get('rentaldetails');
  this.get('rentalcompanies');
  this.get('cars');
  this.get('cars/:id');
}
