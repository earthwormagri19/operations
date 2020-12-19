// const express = require('express');
// const router = express.Router();
// var request = require('request');
// const item = require('../models/item');
// router.get('/', function(req, res, next) {
//   request({
//     uri: 'https://zf-api.herokuapp.com/process/API_link/order_list.php?from_id=ZFO0933&to_id=ZFO0973',
//   },
//   function (error, response, body) {
//     var orders = JSON.parse(body);

//     var products = [
//       {
//         "productName": "Tomato-Local",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Brinjal",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Ladies finger ",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": [],
//       },
//       {
//         "productName": "Coriander",
//         "qty": 0,
//         "baseQty": 0.2,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Cluster Beans / Goru Chikkudukaya",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Onions - White",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Sorakaya / Bottle Gourd",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Potato",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Mint",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Bunch",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Ginger",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Garlic",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Organic Black Rice - Old",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Thota Kura",
//         "qty": 0,
//         "baseQty": 2,
//         "totalQty": 0,
//         "unit": "Bunch",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Organic Turmeric powder",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Keera Dosa",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Lemon - Small",
//         "qty": 0,
//         "baseQty": 6,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Dondakaya / Tindora",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Green Chillies",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Beerakaya",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Methi",
//         "qty": 0,
//         "baseQty": 2,
//         "totalQty": 0,
//         "unit": "Bunch",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Red onion ",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Curry Leaves",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Bunch",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Beetroot",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Carrot",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Banana",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Dozen",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Pomegranate",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Corn ",
//         "qty": 0,
//         "baseQty": 3,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Kakarakaya",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Pedda Chikkudu",
//         "qty": 0,
//         "baseQty": 0.5,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Cauliflower ",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Cabbage",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Capsicum",
//         "qty": 0,
//         "baseQty": 0.25,
//         "totalQty": 0,
//         "unit": "Kg",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Drumstick",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Papaya",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       },
//       {
//         "productName": "Ankapur Desi Chicken (Cooked)",
//         "qty": 0,
//         "baseQty": 1,
//         "totalQty": 0,
//         "unit": "Pc",
//         "packingList": [],
//         "OrderList": []
//       } 
//     ];

//     var confirmedOrders = 0;
//     orders.forEach(function(value , i){
//       // && value.payment_mode === 'online'
//       var onlineTotal = 0;
//       if(value.status === 'Confirmed'){
//         console.log(value.order_id);
//         // if(value.payment_mode === 'online') {
          
//         // }
//         confirmedOrders++
//         var items = value.service_name;
//         products.forEach(function(product){
//           items.forEach(function(item){
//             if(item.product_name === product.productName) {
//               product.qty = product.qty + item.product_quantity;
//               product.packingList.push(item.product_quantity*product.baseQty + ' '+ product.unit);
//               product.OrderList.push(value.cust_name + ' ('+value.order_id+ ')'+ ' : '+ item.product_quantity*product.baseQty + ' '+ product.unit);
//               product.totalQty = product.qty * product.baseQty;
//             }
//           });
//         });
//       }
//     });
//     products.sort(function(a, b){return b.totalQty - a.totalQty});
//     console.log('--------------------------------\nTotal Oders:' + confirmedOrders+'\n--------------------------------');
//     console.log('***Procurement List***');
//     products.forEach(function(product){ 
//       console.log(product.productName+ ' : '+product.totalQty+ ' '+product.unit);
//     });
//     console.log('\n***Packing List***');
//     products.forEach(function(product){
//       if(product.unit ==='Kg') {
//         product.packingList.length >0 && console.log('\n'+product.productName);
//         var arr = {};
//         product.packingList.map(x=>{ 
//           if(typeof(arr[x])=="undefined") 
//           arr[x]=0; 
//           arr[x]++;
//         });
//         for (const [key, value] of Object.entries(arr)) {
//           console.log(`${key} : ${value}`);
//         }
//       }
//       // product.OrderList.length >0 && console.log('\nOrder List:');
//       // product.OrderList.forEach(function(item){
//       //   console.log(item);
//       // });
//     });
//     console.log('--------------------------------');
//   }).pipe(res);
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();

// var request = require('request');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'dec4st_orders.csv',
//     header: [
//         {id: 'Customer Name', title: 'Customer Name'},
//         {id: 'Mobile No', title: 'Mobile No'},
//         {id: 'Customer Address', title: 'Customer Address'},
//         {id: 'Amount', title: 'Amount'},
//         {id: 'Payment', title: 'Payment'},
//     ]
// });
// router.get('/', function(req, res, next) {
//   request({
//     uri: 'https://zf-api.herokuapp.com/process/API_link/order_list.php?from_id=ZFO1197&to_id=ZFO1204',
//   },
//   function (error, response, body) {
//     const records = [];
//     var orders = JSON.parse(body);
//     var slNumber = 0;
//     orders.forEach(function(value , i){
//       if(value.status === 'Confirmed'){
//         var amount = 0;
//         slNumber = slNumber+1;
//         value.service_name.forEach(function(item){
//           amount = amount+item.product_price;
//         });
//         records.push({
//           'Customer Name': value.cust_name,
//           'Mobile No': value.cust_mobile_no,
//           'Customer Address': value.cust_servicing_address,
//           'Amount': amount,
//           'Payment': value.payment_mode    
//         });
//       }
//     });
//     csvWriter.writeRecords(records)       // returns a promise
//           .then(() => {
//                 console.log('...Done');
//         });
//   }).pipe(res);
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

var request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'users_dec10.csv',
    header: [
        {id: 'Customer Name', title: 'Customer Name'},
        {id: 'Customer Address', title: 'Customer Address'},
        {id: 'Mobile No', title: 'Mobile No'},
    ]
});
router.get('/', function(req, res, next) {
  request({
    uri: 'https://zf-api.herokuapp.com/process/API_link/user.php',
  },
  function (error, response, body) {
    const records = [];
    var orders = JSON.parse(body);
    orders.forEach(function(value , i){
      records.push({
        'Customer Name': value.name,
        'Mobile No': value.mobile_no,
        'Customer Address': value.serving_address,   
      });
    });
    csvWriter.writeRecords(records)       // returns a promise
          .then(() => {
                console.log('...Done');
        });
  }).pipe(res);
});

module.exports = router;

// const express = require('express');
// const router = express.Router();

// var request = require('request');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;
// const csvWriter = createCsvWriter({
//     path: 'products.csv',
//     header: [
//         {id: 'Product name', title: 'Product name'},
//     ]
// });
// router.get('/', function(req, res, next) {
//   request({
//     uri: 'https://zf-api.herokuapp.com/process/API_link/product.php',
//   },
//   function (error, response, body) {
//     const records = [];
//     var orders = JSON.parse(body);
//     orders.forEach(function(value , i){
//       records.push({
//         'Product name': value.name
//       });
//     });
//     csvWriter.writeRecords(records)       // returns a promise
//           .then(() => {
//                 console.log('...Done');
//         });
//   }).pipe(res);
// });

// module.exports = router;

