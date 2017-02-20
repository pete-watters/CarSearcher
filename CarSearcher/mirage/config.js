export default function() {

  this.get('cars');
  this.get('cars/:id');

  //single data
//   this.get('/cars/:id', function(db, request) {
//     let id = request.params.id;
//
//     return {
//       data: {
//         type: 'cars',
//         id: id,
//         attributes: db.cars.find(id)
//       }
//     };
//   });
//
// //collection of data
//   this.get('/cars', function(db) {
//     return {
//       data: db.cars.map(attrs => (
//       {type: 'cars', id: attrs.id, attributes: attrs }
//       ))
//     };
//   });
}
