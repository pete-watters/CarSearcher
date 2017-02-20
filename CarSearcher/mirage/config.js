export default function() {

  window.localStorage.getItem("carTrawlerAPI");
  this.passthrough('/api.json');
  this.get('rentaldetails');
  this.get('rentalcompanies');
  this.get('cars');
  this.get('cars/:id');
}
