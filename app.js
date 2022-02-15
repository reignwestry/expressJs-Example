const express = require('express')
const app = express()
const port = process.env.port || 4444;  //default port

//? ROUTES(endpoints) 
//.get === pulls data
app.get('/', (req, res) => {
    //handle root
  res.send('Hello World!')
})

//# Basic Routing
// app.get('/things/cars', (req, res) => {
//     //handle root
//   res.send('things/cars')
// })
// app.post('/things/cars', (req, res) => {
//     //handle root
//   res.send('Hello World!')
// })

// app.get('/things/cars/:carid', (req, res) => {
//     //handle root
//   res.send('Hello World!')
// })
// app.put('/things/cars/:carid', (req, res) => {
    
// })

//# Route Method of Routing
//? Chaining the methods together
app
    .route("/things/cars")
    .get((req, res) => { })
    .post((req, res) => { });
    
app
    .route("/things/cars/:carid")
    .get((req, res) => { })
    .put((req, res) => { });







app.listen(port, (err) => {
  if(err) {
    return console.log("ERROR", err);
  }
    console.log(`Example app listening on port ${port}`)
});


/** //# (ADDRESS) REGULAR EXPRESSION STRING RULES in route paths
 *      =====================
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 *
 */