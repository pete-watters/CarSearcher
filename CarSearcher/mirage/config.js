export default function() {
  this.timing = 400;  // simulate network delay
  this.get('cars');
  this.get('cars/:id');
}
