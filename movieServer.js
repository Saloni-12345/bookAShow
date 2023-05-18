let express = require("express");
let jwt = require("jsonwebtoken");
let passport = require("passport");
let JWTStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;
let app = express();
app.use(express.json());
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers",
"Origin,X-Requested-With,Content-Type,Accept,Authorization");
res.header("Access-Control-Allow-Methods",
"GET, POST, PUT, HEAD, PATCH, DELETE, OPTIONS");
next();
})
app.use(passport.initialize());
let port = process.env.PORT||2410;
app.listen(port,()=> console.log(`Node app listening on port ${port}!`));
let params = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : "jwtToken12345678",
}
let cityBookingArr = [  
  { cityId: 1 , cityName: "Mumbai"  
    , cityBookSlot:[        
     {dateID: 01, date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
        {  place:"Cross Place, Sakshi Nagar",like:false , timingAvailable:[
            { time: "08:00 AM", price: 90 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
              ]}]
            },{ time: "11:20 AM", price: 120 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
                ]}]}, { time: "01:10 PM", price: 220 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
                { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
              ]}]},{ time: "03:20 PM", price: 130 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
                  { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},
        ]},    {  place:"Vishal Nagar, Ragini Palace",like:false, timingAvailable:[
          { time: "09:30 AM", price: 150 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
              ]}]},{ time: "12:00 PM", price: 180 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]}, { time: "01:15 PM", price: 210 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
              ]}]},{ time: "03:00 PM", price: 200 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
              { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
            ]}]},
      ]},
      {  place:"Mall Road, Lulu Mall",like:false, timingAvailable:[
          { time: "07:50 AM", price: 270,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
                { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
                { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
              ]}] },{ time: "12:00 PM", price: 110 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
              { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
            ]}]}, { time: "01:15 PM", price: 230 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
                { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
              ]}]},{ time: "03:00 PM", price: 340,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                    { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                    { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
                  ]}] },
          { time: "05:30 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
              { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
            ]}]}
      ]},  {  place:"Ganga Takeej, Amar Nagar",like:false, timingAvailable:[
          { time: "08:40 AM", price: 220,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
                { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
              ]}] },{ time: "12:30 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
              { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
            ]}]}, { time: "01:45 PM", price: 342 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
                { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
              ]}]},{ time: "04:20 PM", price: 347,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                    { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                    { seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
                  ]}] },
      ]},
        {  place:"Zuhu Mall, Vikash Nagar",like:false,  timingAvailable:[
            { time: "09:20 AM", price: 190 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
                { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
              ]}]},{ time: "12:00 PM", price: 100 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
                { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
              ]}]}, { time: "01:15 PM", price: 220,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
                  { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
                ]}] },{ time: "03:00 PM", price: 200 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
                { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
              ]}]},{ time:"06:30 PM", price: 200,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
                  { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
                ]}]},
            { time: "11:20 PM", price: 300,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[1,5,8,12,16,19]},{ seatName: "B", totalSeat:16, booked:[4,10,16]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[4,10,12,17,23,25]},{ seatName: "D", totalSeat:25, booked:[9,12,18,20,25]},
                  { seatName: "E", totalSeat:22, booked:[5,8,11,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,14,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,18,20]},{ seatName: "H", totalSeat:20, booked:[5,6,9,15,16,19]},
                  { seatName: "I", totalSeat:25, booked:[1,3,6,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[8,11,15,18,22]},
                ]}] }
        ]},
        {  place:"Rajdhani Marg: Mohini takeej",like:false, timingAvailable:[
            { time: "09:30 AM", price: 320 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
                  { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
                ]}]},{ time: "12:30 PM", price: 210 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
                { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
              ]}]}, { time: "01:45 PM", price: 310 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
                  { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
                  { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
                ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                    { seatType:"RECLINER", seatValue:420, seatInfo:[
                      { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                      { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                      { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                      { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                      { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
                    ]}]},
            { time: "06:40 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
                ]}]}
        ]}
    ]},
    {dateID: 02 , date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}) ,timingSlots:[
        {  place:"Amrat Nagar, Vaishnav Palace",like:false, timingAvailable:[
            { time: "08:20 AM", price: 150 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
                  { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
                ]}]},{ time: "01:10 PM", price: 180 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
              ]}]}, { time: "03:15 PM", price: 210 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
                ]}]},{ time: "06:10 PM", price: 200 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
              ]}]},
        ]},   {  place:"Akbar Pur, Ganga Takeej",like:false, timingAvailable:[
          { time: "09:00 AM", price: 150 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
              ]}]},{ time: "12:00 PM", price: 180 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
            ]}]}, { time: "01:15 PM", price: 210 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
              ]}]},{ time: "03:00 PM", price: 200 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
              { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
              { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
            ]}]},
      ]},
      {  place:"Chinepolis: Zuhu Mall, Govind Nagar",like:false, timingAvailable:[
          { time: "09:40 AM", price: 270,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
                { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
                { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
              ]}] },{ time: "12:30 PM", price: 110 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
              { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
            ]}]}, { time: "01:25 PM", price: 230 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
              ]}]},{ time: "03:40 PM", price: 340,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,7,20]},
                  ]}] },
          { time: "05:10 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
              { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
          ]}]}
      ]},{  place:"Raja Nagar, Sahjahan Place",like:false, timingAvailable:[
       { time: "08:35 AM", price: 230 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[3,10,12,16,19]},{ seatName: "B", totalSeat:18, booked:[3,10,12,17]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,10,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[6,10,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "12:30 PM", price: 220 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:15, booked:[7,9,10,12,15]},{ seatName: "B", totalSeat:15, booked:[10,12]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[3,10,11,15,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,4,12,15,17,20]},{ seatName: "J", totalSeat:25, booked:[1,9,13,17,20,22]},
           { seatName: "K", totalSeat:22, booked:[1,12,17,18,20,22]},
         ]}]}, { time: "01:15 PM", price: 180 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[2,7,10,12,17,19]},{ seatName: "B", totalSeat:16, booked:[2,5,7,10,11,16]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[1,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,15,18,21,25]},
           { seatName: "E", totalSeat:22, booked:[6,9,11,14,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[5,7,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:25, booked:[1,3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           { seatName: "F", totalSeat:25, booked:[1,5,7,16,22]},
         ]}]},{ time: "03:00 PM", price: 310 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,13,17]},
             { seatName: "C", totalSeat:20, booked:[2,6,10,12,20,23]},{ seatName: "D", totalSeat:15, booked:[6,7,10,15]},
          
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "E", totalSeat:20, booked:[1,3,6,12,17,20]},{ seatName: "F", totalSeat:22, booked:[1,3,6,12,16,18,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:25, booked:[1,3,15,17,19,20]},{ seatName: "J", totalSeat:22, booked:[5,12,15,18,20]},
           ]}]},
   ]},
      {  place:"Carnival: RGJD",like:false, timingAvailable:[
          { time: "09:20 AM", price: 290 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "01:00 PM", price: 300 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
              { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
              { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
              { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
            ]}]}, { time: "02:45 PM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
              { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
            ]}]},{ time: "05:00 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
              { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "05:50 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
                { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
              ]}]},
      ]},
        {  place:"Krishna Nagar Road, Lulu Mall",like:false, timingAvailable:[
            { time: "09:20 AM", price: 270,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
                ]}] },{ time: "12:40 PM", price: 120 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
                { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
              ]}]}, { time: "01:15 PM", price: 230 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "03:00 PM", price: 340,seats:[
                    { seatType:"RECLINER", seatValue:420, seatInfo:[
                      { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                      { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                      { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                      { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                      { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                      { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                    ]}] },
            { time: "05:20 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
                { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},
              { time: "08:20 PM", price: 310 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
                ]}]}
        ]},
        {  place:"Rajdhani Marg: Mohini takeej",like:false, timingAvailable:[
            { time: "08:40 AM", price: 290 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
                  { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
                ]}]},{ time: "12:20 PM", price: 300 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
                { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
              ]}]}, { time: "01:30 PM", price: 320 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:40 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
                { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
              ]}]},
              { time: "05:35 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
                  { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
                ]}]},
        ]}
    ]},
    {dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
        {  place:"Chinepolis: DLF Place, Ram Nagar",like:false, timingAvailable:[
            { time: "10:30 AM", price: 160 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "12:30 PM", price: 190,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                    { seatType:"RECLINER", seatValue:420, seatInfo:[
                      { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                      { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                      { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                      { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                      { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                    ]}]},{ time: "04:10 PM", price: 170 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},
            { time: "06:30 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},
  
        ]}, {  place:"Amrat Nagar, Vaishnav Palace",like:false, timingAvailable:[
          { time: "08:30 AM", price: 100 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "12:10 PM", price: 190,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  ]}]},{ time: "03:00 PM", price: 170 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
          { time: "06:00 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
              ]}]},
              { time: "09:30 PM", price: 320 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
                ]}]}
      ]},
      {  place:"Raja Nagar, Sahjahan Place",like:false, timingAvailable:[
          { time: "07:50 AM", price: 220,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
              ]}] },  { time: "10:20 AM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},
              { time: "01:20 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]}, { time: "03:15 PM", price: 342 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "05:00 PM", price: 347,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  ]}] },
                  { time: "10:30 PM", price: 390 ,seats:[
                    { seatType:"RECLINER", seatValue:420, seatInfo:[
                      { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                      { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                      { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                      { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                      { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                    ]}]}
      ]},
      {  place:"Zuhu Mall, Vikash Nagar",like:false, timingAvailable:[
          { time: "08:00 AM", price: 230 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "11:10 PM", price: 220 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]}, { time: "01:15 PM", price: 180 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "04:20 PM", price: 310 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},
              { time: "09:40 PM", price: 240 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
                  { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
                  { seatName: "K", totalSeat:22, booked:[5,19,21]},
                ]}]}
      ]},
        {  place:"Chinepolis: Zuhu Mall, Govind Nagar",like:false, timingAvailable:[
            { time: "09:00 AM", price: 220,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] },{ time: "12:00 PM", price: 210 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]}, { time: "01:30 PM", price: 342 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "03:50 PM", price: 347,seats:[
                    { seatType:"RECLINER", seatValue:420, seatInfo:[
                      { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                      { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                      { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                      { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                      { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                    ]}] },
        ]},
        {  place:"Krishna Nagar Road, Lulu Mall",like:false, timingAvailable:[
            { time: "09:40 AM", price: 230 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
                  { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
                  { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
                ]}]},{ time: "12:30 PM", price: 220 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
                { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
                { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
                { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
              ]}]}, { time: "01:40 PM", price: 180 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
                { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
                { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
              ]}]},{ time: "03:00 PM", price: 310 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
                ]}]},
                { time: "09:30 PM", price: 347,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
                  ]}] },
        ]}
    ]}
  ]},{ cityId: 2, cityName: "NCR",
     cityBookSlot:[        
  {dateID: 01,  date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
     {  place:"Kathy: White Place, Saket",like:false , timingAvailable:[
         { time: "08:00 AM", price: 90 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
           ]}]
         },{ time: "11:20 AM", price: 120 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
             ]}]}, { time: "01:10 PM", price: 220 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
             { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
           ]}]},{ time: "03:20 PM", price: 130 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
               { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}]},
     ]},    {  place:"Amrat Jaha, Rohini Palace",like:false, timingAvailable:[
       { time: "09:30 AM", price: 150 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
           ]}]},{ time: "12:00 PM", price: 180 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]}, { time: "01:15 PM", price: 210 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
           ]}]},{ time: "03:00 PM", price: 200 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
           { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
         ]}]},
   ]},
   {  place:"Agartala Road, Lulu Mall",like:false, timingAvailable:[
       { time: "07:50 AM", price: 270,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
             { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
             { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
           ]}] },{ time: "12:00 PM", price: 110 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
           { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
         ]}]}, { time: "01:15 PM", price: 230 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
             { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
           ]}]},{ time: "03:00 PM", price: 340,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                 { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                 { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
               ]}] },
       { time: "05:30 PM", price: 390 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
           { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
         ]}]}
   ]},  {  place:"Manju Takeej, Vijay Nagar",like:false, timingAvailable:[
       { time: "08:40 AM", price: 220,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
             { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
           ]}] },{ time: "12:30 PM", price: 210 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
           { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
         ]}]}, { time: "01:45 PM", price: 342 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
             { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
           ]}]},{ time: "04:20 PM", price: 347,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                 { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                 { seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                 { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
               ]}] },
   ]},
   {  place:"Carnival: RGJD",like:false, timingAvailable:[
       { time: "08:35 AM", price: 230 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[3,10,12,16,19]},{ seatName: "B", totalSeat:18, booked:[3,10,12,17]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,10,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[6,10,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "12:30 PM", price: 220 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:15, booked:[7,9,10,12,15]},{ seatName: "B", totalSeat:15, booked:[10,12]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[3,10,11,15,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,4,12,15,17,20]},{ seatName: "J", totalSeat:25, booked:[1,9,13,17,20,22]},
           { seatName: "K", totalSeat:22, booked:[1,12,17,18,20,22]},
         ]}]}, { time: "01:15 PM", price: 180 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[2,7,10,12,17,19]},{ seatName: "B", totalSeat:16, booked:[2,5,7,10,11,16]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[1,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,15,18,21,25]},
           { seatName: "E", totalSeat:22, booked:[6,9,11,14,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[5,7,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:25, booked:[1,3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           { seatName: "F", totalSeat:25, booked:[1,5,7,16,22]},
         ]}]},{ time: "03:00 PM", price: 310 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,13,17]},
             { seatName: "C", totalSeat:20, booked:[2,6,10,12,20,23]},{ seatName: "D", totalSeat:15, booked:[6,7,10,15]},
          
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "E", totalSeat:20, booked:[1,3,6,12,17,20]},{ seatName: "F", totalSeat:22, booked:[1,3,6,12,16,18,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:25, booked:[1,3,15,17,19,20]},{ seatName: "J", totalSeat:22, booked:[5,12,15,18,20]},
           ]}]},
   ]},
     {  place:"Lulu Mall, Shahdara Nagar",like:false,  timingAvailable:[
         { time: "09:20 AM", price: 190 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
             { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
             { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
           ]}]},{ time: "12:00 PM", price: 100 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
             { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
           ]}]}, { time: "01:15 PM", price: 220,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
               { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
             ]}] },{ time: "03:00 PM", price: 200 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
             { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
           ]}]},{ time:"06:30 PM", price: 200,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
               { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
               { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
             ]}]},
         { time: "11:20 PM", price: 300,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[1,5,8,12,16,19]},{ seatName: "B", totalSeat:16, booked:[4,10,16]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[4,10,12,17,23,25]},{ seatName: "D", totalSeat:25, booked:[9,12,18,20,25]},
               { seatName: "E", totalSeat:22, booked:[5,8,11,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,14,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15,18,20]},{ seatName: "H", totalSeat:20, booked:[5,6,9,15,16,19]},
               { seatName: "I", totalSeat:25, booked:[1,3,6,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[8,11,15,18,22]},
             ]}] }
     ]},
     {  place:"Rajdhani Marg: Mohini takeej",like:false, timingAvailable:[
         { time: "09:30 AM", price: 320 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
               { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
             ]}]},{ time: "12:30 PM", price: 210 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
             { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
           ]}]}, { time: "01:45 PM", price: 310 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
               { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
               { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
             ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                   { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
                 ]}]},
         { time: "06:40 PM", price: 390 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
             ]}]}
     ]}
 ]},
 {dateID: 02 , date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
     {  place:"Govind Nagar, Near Ambedkar park",like:false, timingAvailable:[
         { time: "08:20 AM", price: 150 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
               { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
             ]}]},{ time: "01:10 PM", price: 180 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
           ]}]}, { time: "03:15 PM", price: 210 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
             ]}]},{ time: "06:10 PM", price: 200 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
           ]}]},
     ]},   {  place:"Akbar Pur, Gayatri",like:false, timingAvailable:[
       { time: "09:00 AM", price: 150 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
           ]}]},{ time: "12:00 PM", price: 180 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
         ]}]}, { time: "01:15 PM", price: 210 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
           ]}]},{ time: "03:00 PM", price: 200 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
           { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
           { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
         ]}]},
   ]},
   {  place:"Kathy: White Place, Saket",like:false, timingAvailable:[
       { time: "09:40 AM", price: 270,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
             { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
             { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
           ]}] },{ time: "12:30 PM", price: 110 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
        { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
           { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
         ]}]}, { time: "01:25 PM", price: 230 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
           ]}]},{ time: "03:40 PM", price: 340,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,7,20]},
               ]}] },
       { time: "05:10 PM", price: 390 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
           { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
       ]}]}
   ]},
   {  place:"Carnival: RGJD",like:false, timingAvailable:[
       { time: "09:20 AM", price: 290 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "01:00 PM", price: 300 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
           { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
           { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
           { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
         ]}]}, { time: "02:45 PM", price: 320 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
           { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
         ]}]},{ time: "05:00 PM", price: 390 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
           { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]},{ time: "05:50 PM", price: 390 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
             { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
           ]}]},
   ]},
     {  place:"Lulu Mall, Shahdara Nagar",like:false, timingAvailable:[
         { time: "09:20 AM", price: 270,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
               { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
             ]}] },{ time: "12:40 PM", price: 120 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
             { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
           ]}]}, { time: "01:15 PM", price: 230 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}]},{ time: "03:00 PM", price: 340,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                   { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                   { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                 ]}] },
         { time: "05:20 PM", price: 390 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
             { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
             { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},
           { time: "08:20 PM", price: 310 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
               { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
             ]}]}
     ]},
     {  place:"Rajdhani Marg: Mohini takeej",like:false, timingAvailable:[
         { time: "08:40 AM", price: 290 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
               { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
             ]}]},{ time: "12:20 PM", price: 300 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
             { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
           ]}]}, { time: "01:30 PM", price: 320 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "03:40 PM", price: 390 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
             { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
           ]}]},
           { time: "05:35 PM", price: 390 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
               { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
             ]}]},
     ]}
 ]},
 {dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
     {  place:"Chinepolis: DLF Place, Saket",like:false, timingAvailable:[
         { time: "10:30 AM", price: 160 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "12:30 PM", price: 190,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                   { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                 ]}]},{ time: "04:10 PM", price: 170 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},
         { time: "06:30 PM", price: 390 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}]},

     ]}, {  place:"Amrat Jaha, Rohini Palace",like:false, timingAvailable:[
       { time: "08:30 AM", price: 100 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]},{ time: "12:10 PM", price: 190,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}] }, { time: "01:15 PM", price: 180 ,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
               ]}]},{ time: "03:00 PM", price: 170 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]},
       { time: "06:00 PM", price: 390 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
           ]}]},
           { time: "09:30 PM", price: 320 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
             ]}]}
   ]},
   {  place:"Manju Takeej, Vijay Nagar",like:false, timingAvailable:[
       { time: "07:50 AM", price: 220,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
           ]}] },  { time: "10:20 AM", price: 390 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}]},
           { time: "01:20 PM", price: 210 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]}, { time: "03:15 PM", price: 342 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "05:00 PM", price: 347,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
               ]}] },
               { time: "10:30 PM", price: 390 ,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                   { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                 ]}]}
   ]},
   {  place:"Lulu Mall, Shahdara Nagar",like:false, timingAvailable:[
       { time: "08:00 AM", price: 230 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},{ time: "11:10 PM", price: 220 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]}, { time: "01:15 PM", price: 180 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
           { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
         ]}]},{ time: "04:20 PM", price: 310 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]},
           { time: "09:40 PM", price: 240 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
               { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
               { seatName: "K", totalSeat:22, booked:[5,19,21]},
             ]}]}
   ]},
     {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
         { time: "09:00 AM", price: 220,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}] },{ time: "12:00 PM", price: 210 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
           ]}]}, { time: "01:30 PM", price: 342 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
             ]}]},{ time: "03:50 PM", price: 347,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                 ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                   { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                   { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                   { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                 ]}] },
     ]},
     {  place:"Agartala Road, Lulu Mall",like:false, timingAvailable:[
         { time: "09:40 AM", price: 230 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
               { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
               { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
             ]}]},{ time: "12:30 PM", price: 220 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
             { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
             { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
             { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
           ]}]}, { time: "01:40 PM", price: 180 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
             { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
             { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
           ]}]},{ time: "03:00 PM", price: 310 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
               { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
             ]}]},
             { time: "09:30 PM", price: 347,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
               ]}] },
     ]}
 ]}
]},
{ cityId: 3 , cityName:"Ahmedabad", 
cityBookSlot:[        
 {dateID: 01,  date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Carnival: Rosen Place, Ahmad Nagar",like:false , timingAvailable:[
        { time: "08:00 AM", price: 90 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
          ]}]
        },{ time: "11:20 AM", price: 120 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
            ]}]}, { time: "01:10 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
            { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
          ]}]},{ time: "04:50 PM", price: 130 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
              { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},  { time: "08:10 PM", price: 390 ,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
               { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
             ]}]}
    ]},    {  place:"Gomti Nagar, Raj Ratan Palace",like:false, timingAvailable:[
      { time: "09:30 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
          { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
        ]}]},
  ]},
  {  place:"Kainal Road, Zuhu Mall",like:false, timingAvailable:[
      { time: "07:50 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
            { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
          ]}] },{ time: "12:00 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
          { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
        ]}]}, { time: "01:15 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
            { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
          ]}]},{ time: "03:00 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
              ]}] },
      { time: "05:30 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
          { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
        ]}]}
  ]},  {  place:"Saraswati Takeej, Vikash Nagar",like:false, timingAvailable:[
      { time: "08:40 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
          ]}] },{ time: "12:30 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
          { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
        ]}]}, { time: "01:45 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
            { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
          ]}]},{ time: "04:20 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                { seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
              ]}] },
  ]},
    {  place:"Lulu Mall, Satyam Nagar",like:false,  timingAvailable:[
        { time: "09:20 AM", price: 190 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
            { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
          ]}]},{ time: "12:00 PM", price: 100 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
            { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
          ]}]}, { time: "01:15 PM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
              { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
            ]}] },{ time: "03:00 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
          ]}]},{ time:"06:30 PM", price: 200,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
              { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
            ]}]},
        { time: "11:20 PM", price: 300,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,5,8,12,16,19]},{ seatName: "B", totalSeat:16, booked:[4,10,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,10,12,17,23,25]},{ seatName: "D", totalSeat:25, booked:[9,12,18,20,25]},
              { seatName: "E", totalSeat:22, booked:[5,8,11,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,14,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,18,20]},{ seatName: "H", totalSeat:20, booked:[5,6,9,15,16,19]},
              { seatName: "I", totalSeat:25, booked:[1,3,6,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[8,11,15,18,22]},
            ]}] }
    ]},
    {  place:"Samasta, Kuhu Takeej",like:false, timingAvailable:[
        { time: "09:30 AM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
              { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
            ]}]},{ time: "12:30 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
            { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
          ]}]}, { time: "01:45 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
              { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
              { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
            ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
                ]}]},
        { time: "06:40 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
            ]}]}
    ]}
]},
{dateID: 02 , date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Govind Nagar, GDCF Place",like:false, timingAvailable:[
        { time: "08:20 AM", price: 150 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
              { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
            ]}]},{ time: "01:10 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
          ]}]}, { time: "03:15 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
            ]}]},{ time: "06:10 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
          ]}]},
    ]},   {  place:"Akbar Pur, Gayatri Takeej",like:false, timingAvailable:[
      { time: "09:00 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
          { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
          { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
        ]}]},
  ]},
  {  place:"Kainal Road, Zuhu Mall",like:false, timingAvailable:[
      { time: "09:40 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
            { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
            { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
          ]}] },{ time: "12:30 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
       { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
          { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
        ]}]}, { time: "01:25 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
          ]}]},{ time: "03:40 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,7,20]},
              ]}] },
      { time: "05:10 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
          { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
      ]}]}
  ]},
  {  place:"Samasta, Kuhu Takeej",like:false, timingAvailable:[
      { time: "09:20 AM", price: 290 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "01:00 PM", price: 300 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
          { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
          { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
          { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
        ]}]}, { time: "02:45 PM", price: 320 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
          { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
        ]}]},{ time: "05:00 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
          { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
        { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "05:50 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
  ]},
    {  place:"Lulu Mall, Satyam Nagar",like:false, timingAvailable:[
        { time: "09:20 AM", price: 270,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
            ]}] },{ time: "12:40 PM", price: 120 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
            { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
          ]}]}, { time: "01:15 PM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:00 PM", price: 340,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                ]}] },
        { time: "05:20 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
            { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "08:20 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
            ]}]}
    ]},
    {  place:"Rajdhani Marg: Ganga takeej",like:false, timingAvailable:[
        { time: "08:40 AM", price: 290 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
              { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
            ]}]},{ time: "12:20 PM", price: 300 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
          ]}]}, { time: "01:30 PM", price: 320 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "03:40 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
          { time: "05:35 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
              { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
            ]}]},
    ]}
]},
{dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Chinepolis: DLF Place, Saket",like:false, timingAvailable:[
        { time: "10:30 AM", price: 160 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "12:30 PM", price: 190,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "04:10 PM", price: 170 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
        { time: "06:30 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},

    ]}, {  place:"Govind Nagar, GDCF Place",like:false, timingAvailable:[
      { time: "08:30 AM", price: 100 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "12:10 PM", price: 190,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}] }, { time: "01:15 PM", price: 180 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:00 PM", price: 170 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},
      { time: "06:00 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
          ]}]},
          { time: "09:30 PM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
            ]}]}
  ]},
  {  place:"Rajdhani Marg: Ganga takeej",like:false, timingAvailable:[
      { time: "07:50 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
          ]}] },  { time: "10:20 AM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
          { time: "01:20 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "03:15 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "05:00 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] },
              { time: "10:30 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]}
  ]},
  {  place:"Lulu Mall, Shahdara Nagar",like:false, timingAvailable:[
      { time: "08:00 AM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "11:10 PM", price: 220 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "04:20 PM", price: 310 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "09:40 PM", price: 240 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
              { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
              { seatName: "K", totalSeat:22, booked:[5,19,21]},
            ]}]}
  ]},
    {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
        { time: "09:00 AM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] },{ time: "12:00 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "01:30 PM", price: 342 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:50 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] },{ time:"06:30 PM", price: 200,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:18, booked:[2,8,9,13]},
                   { seatName: "C", totalSeat:15, booked:[1,3,7,11]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                   { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
                   { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
                 ]}]},
    ]},
    {  place:"Amrat Jaha, Rohini Palace",like:false, timingAvailable:[
        { time: "09:40 AM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
              { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
              { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
            ]}]},{ time: "12:30 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
            { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
            { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
          ]}]}, { time: "01:40 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
            { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
            { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
            ]}]},
            { time: "09:30 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
              ]}] },
    ]}
]}
]},
{ cityId: 4, cityName:"Banglore",
 cityBookSlot:[        
   {dateID: 01, date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
      {  place:"Cross Place, Maharaj Nagar",like:false , timingAvailable:[
          { time: "08:00 AM", price: 90 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
            ]}]
          },{ time: "11:20 AM", price: 120 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
              ]}]}, { time: "01:10 PM", price: 220 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
              { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
            ]}]},{ time: "03:20 PM", price: 130 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
                { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},
      ]},    {  place:"Roza Place, Ganga Nagar",like:false, timingAvailable:[
        { time: "09:30 AM", price: 150 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
            ]}]},{ time: "12:00 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "01:15 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
            ]}]},{ time: "03:00 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
            { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
          ]}]},
    ]},
    {  place:"Kanchan Nagar Road, Zuhu Mall",like:false, timingAvailable:[
        { time: "07:50 AM", price: 270,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
              { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
            ]}] },{ time: "12:00 PM", price: 110 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
            { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
          ]}]}, { time: "01:15 PM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
              { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
            ]}]},{ time: "03:00 PM", price: 340,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                  { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
                ]}] },
        { time: "05:30 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
            { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
          ]}]}
    ]},  {  place:"Ganga Nagar, Krishna Takeejr",like:false, timingAvailable:[
        { time: "08:40 AM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
            ]}] },{ time: "12:30 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
            { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
          ]}]}, { time: "01:45 PM", price: 342 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
              { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
            ]}]},{ time: "04:20 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                  { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                  { seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
                ]}] },
    ]},
    {  place:"Alvar Road, Ratan Takeej",like:false, timingAvailable:[
        { time: "08:35 AM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,10,12,16,19]},{ seatName: "B", totalSeat:18, booked:[3,10,12,17]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,10,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,10,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "12:30 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:15, booked:[7,9,10,12,15]},{ seatName: "B", totalSeat:15, booked:[10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,11,15,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,4,12,15,17,20]},{ seatName: "J", totalSeat:25, booked:[1,9,13,17,20,22]},
            { seatName: "K", totalSeat:22, booked:[1,12,17,18,20,22]},
          ]}]}, { time: "01:15 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,7,10,12,17,19]},{ seatName: "B", totalSeat:16, booked:[2,5,7,10,11,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[1,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,15,18,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,9,11,14,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[5,7,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:25, booked:[1,3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            { seatName: "F", totalSeat:25, booked:[1,5,7,16,22]},
          ]}]},{ time: "03:00 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,13,17]},
              { seatName: "C", totalSeat:20, booked:[2,6,10,12,20,23]},{ seatName: "D", totalSeat:15, booked:[6,7,10,15]},
           
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "E", totalSeat:20, booked:[1,3,6,12,17,20]},{ seatName: "F", totalSeat:22, booked:[1,3,6,12,16,18,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:25, booked:[1,3,15,17,19,20]},{ seatName: "J", totalSeat:22, booked:[5,12,15,18,20]},
            ]}]},{ time:"07:30 PM", price: 200,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
               { seatName: "C", totalSeat:25, booked:[1,4,11,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
               { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
             ]}]},
    ]},
      {  place:"Lulu Mall, Shahdara Nagar",like:false,  timingAvailable:[
          { time: "09:20 AM", price: 190 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
              { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
            ]}]},{ time: "12:00 PM", price: 100 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
              { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
            ]}]}, { time: "01:15 PM", price: 220,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
                { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
              ]}] },{ time: "03:00 PM", price: 200 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
              { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
            ]}]},{ time:"06:30 PM", price: 200,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
                { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
              ]}]},
          { time: "11:20 PM", price: 300,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[1,5,8,12,16,19]},{ seatName: "B", totalSeat:16, booked:[4,10,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[4,10,12,17,23,25]},{ seatName: "D", totalSeat:25, booked:[9,12,18,20,25]},
                { seatName: "E", totalSeat:22, booked:[5,8,11,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,14,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,18,20]},{ seatName: "H", totalSeat:20, booked:[5,6,9,15,16,19]},
                { seatName: "I", totalSeat:25, booked:[1,3,6,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[8,11,15,18,22]},
              ]}] }
      ]},
  ]},
  {dateID: 02 ,date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
      {  place:"Govind Nagar, Sagar Mall",like:false, timingAvailable:[
          { time: "08:20 AM", price: 150 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
                { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
              ]}]},{ time: "01:10 PM", price: 180 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
            ]}]}, { time: "03:15 PM", price: 210 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
              ]}]},{ time: "06:10 PM", price: 200 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
            ]}]},
      ]},   {  place:"Hem Nagar, Krishna Takeej",like:false, timingAvailable:[
        { time: "09:30 AM", price: 150 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
            ]}]},{ time: "01:00 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
          ]}]}, { time: "02:30 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
            ]}]},{ time: "05:20 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
            { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
            { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
          ]}]},{ time:"10:30 PM", price: 200,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[7,9,12,17,19]},{ seatName: "B", totalSeat:20, booked:[2,8,9,13,17,19]},
             { seatName: "C", totalSeat:22, booked:[1,4,10,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:20, booked:[6,12,17,20]},
             { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
             { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
             { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
           ]}]},
    ]},
    {  place:"Kanchan Nagar Road, Zuhu Mall",like:false, timingAvailable:[
        { time: "09:40 AM", price: 270,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
              { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
              { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
            ]}] },{ time: "12:30 PM", price: 110 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
            { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
          ]}]}, { time: "01:25 PM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
            ]}]},{ time: "03:40 PM", price: 340,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,7,20]},
                ]}] },
        { time: "05:10 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
            { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
        ]}]}
    ]},
    {  place:"Alvar Road, Ratan Takeej",like:false, timingAvailable:[
        { time: "09:20 AM", price: 290 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "01:00 PM", price: 300 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
            { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
            { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
            { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
          ]}]}, { time: "02:45 PM", price: 320 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
            { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
          ]}]},{ time: "05:00 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
            { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "08:50 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
              { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
            ]}]},
    ]},
      {  place:"Lulu Mall, Brahma Nagar",like:false, timingAvailable:[
          { time: "09:20 AM", price: 270,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
                { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
              ]}] },{ time: "12:40 PM", price: 120 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
              { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
            ]}]}, { time: "01:15 PM", price: 230 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:00 PM", price: 340,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                    { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                  ]}] },
          { time: "05:20 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
              { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
            { time: "08:20 PM", price: 310 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
              ]}]}
      ]},
      {  place:"Dada Nagar, Satyam Takeej",like:false, timingAvailable:[
          { time: "08:40 AM", price: 290 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
                { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
              ]}]},{ time: "12:20 PM", price: 300 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
              { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
            ]}]}, { time: "01:30 PM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:40 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
            ]}]},
            { time: "05:35 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
                { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
              ]}]},
      ]}
  ]},
  {dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
      {  place:"Roza Place, Ganga Nagar",like:false, timingAvailable:[
          { time: "10:30 AM", price: 160 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "12:30 PM", price: 190,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  ]}]},{ time: "04:10 PM", price: 170 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
          { time: "06:30 PM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},

      ]}, {  place:"Cross Place, Maharaj Nagar",like:false, timingAvailable:[
        { time: "08:30 AM", price: 100 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "12:10 PM", price: 190,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] }, { time: "01:15 PM", price: 180 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "03:00 PM", price: 170 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
        { time: "06:00 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
            ]}]},
            { time: "09:30 PM", price: 320 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
              ]}]}
    ]},
    {  place:"Hem Nagar, Krishna Takeej",like:false, timingAvailable:[
        { time: "07:50 AM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
            ]}] },  { time: "10:20 AM", price: 390 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},
            { time: "01:20 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "03:15 PM", price: 342 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "05:00 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] },
                { time: "10:30 PM", price: 390 ,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  ]}]}
    ]},
    {  place:"Lulu Mall, Brahma Nagar",like:false, timingAvailable:[
        { time: "08:00 AM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "11:10 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "01:15 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "04:20 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
            { time: "09:40 PM", price: 240 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
                { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
                { seatName: "K", totalSeat:22, booked:[5,19,21]},
              ]}]}
    ]},
      {  place:"Chinepolis: Cross River Mall, Shahdara",like:false, timingAvailable:[
          { time: "09:00 AM", price: 220,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] },{ time: "12:00 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]}, { time: "01:30 PM", price: 342 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:50 PM", price: 347,seats:[
                  { seatType:"RECLINER", seatValue:420, seatInfo:[
                    { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                    { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                    { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                    { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  ]}] },
      ]},
      {  place:"Dada Nagar, Satyam Takeej",like:false, timingAvailable:[
          { time: "09:40 AM", price: 230 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
                { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
                { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
              ]}]},{ time: "12:30 PM", price: 220 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
              { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
              { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
              { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
            ]}]}, { time: "01:40 PM", price: 180 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
              { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
              { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
            ]}]},{ time: "03:00 PM", price: 310 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
              ]}]},
              { time: "09:30 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
                ]}] },
      ]},
      {  place:"Rajdhani Marg: Mohini takeej",like:false, timingAvailable:[
       { time: "09:30 AM", price: 320 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
             { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
           ]}]},{ time: "12:30 PM", price: 210 ,seats:[
         { seatType:"RECLINER", seatValue:420, seatInfo:[
           { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
         ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
           { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
           { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
           { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
         ]}]}, { time: "01:45 PM", price: 310 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
             { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
             { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
           ]}]},{ time: "03:00 PM", price: 210 ,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
               ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                 { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                 { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
               ]}]},
       { time: "06:40 PM", price: 390 ,seats:[
           { seatType:"RECLINER", seatValue:420, seatInfo:[
             { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
           ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
             { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
             { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
             { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
           ]}]}
   ]}
  ]}
] 
},
{ cityId: 5, cityName:"Chennai",
cityBookSlot:[        
 {dateID: 01, date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Chai Sai Restaurant, Akbar Pur Roa",like:false , timingAvailable:[
        { time: "08:00 AM", price: 90 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
          ]}]
        },{ time: "11:20 AM", price: 120 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
            ]}]}, { time: "01:10 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
            { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
          ]}]},{ time: "03:20 PM", price: 130 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
              { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
    ]},    {  place:"Amrat Jaha, Rohini Palace",like:false, timingAvailable:[
      { time: "09:30 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
          { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
        ]}]},
  ]},
  {  place:"Agartala Road, Lulu Mall",like:false, timingAvailable:[
      { time: "07:50 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
            { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
          ]}] },{ time: "12:00 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
          { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
        ]}]}, { time: "01:15 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
            { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
          ]}]},{ time: "03:00 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
              ]}] },
      { time: "05:30 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
          { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
        ]}]}
  ]},  {  place:"Manju Takeej, Vijay Nagar",like:false, timingAvailable:[
      { time: "08:40 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
          ]}] },{ time: "12:30 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
          { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
        ]}]}, { time: "01:45 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
            { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
          ]}]},{ time: "04:20 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                { seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
              ]}] },
  ]},
  {  place:"Khan Pani Restaurant, Mall Road",like:false, timingAvailable:[
      { time: "08:35 AM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,10,12,16,19]},{ seatName: "B", totalSeat:18, booked:[3,10,12,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,10,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "12:30 PM", price: 220 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[7,9,10,12,15]},{ seatName: "B", totalSeat:15, booked:[10,12]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[3,10,11,15,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,4,12,15,17,20]},{ seatName: "J", totalSeat:25, booked:[1,9,13,17,20,22]},
          { seatName: "K", totalSeat:22, booked:[1,12,17,18,20,22]},
        ]}]}, { time: "01:15 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[2,7,10,12,17,19]},{ seatName: "B", totalSeat:16, booked:[2,5,7,10,11,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[1,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,15,18,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,9,11,14,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[5,7,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:25, booked:[1,3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          { seatName: "F", totalSeat:25, booked:[1,5,7,16,22]},
        ]}]},{ time: "03:00 PM", price: 310 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,13,17]},
            { seatName: "C", totalSeat:20, booked:[2,6,10,12,20,23]},{ seatName: "D", totalSeat:15, booked:[6,7,10,15]},
         
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:20, booked:[1,3,6,12,17,20]},{ seatName: "F", totalSeat:22, booked:[1,3,6,12,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:25, booked:[1,3,15,17,19,20]},{ seatName: "J", totalSeat:22, booked:[5,12,15,18,20]},
          ]}]},
  ]},
    {  place:"Lulu Mall, Gomti Nagar",like:false,  timingAvailable:[
        { time: "09:20 AM", price: 190 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
            { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
          ]}]},{ time: "12:00 PM", price: 100 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
            { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
          ]}]}, { time: "01:15 PM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
              { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
            ]}] },{ time: "03:00 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
          ]}]},{ time:"06:30 PM", price: 200,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
              { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
            ]}]},
        { time: "11:20 PM", price: 300,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,5,8,12,16,19]},{ seatName: "B", totalSeat:16, booked:[4,10,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,10,12,17,23,25]},{ seatName: "D", totalSeat:25, booked:[9,12,18,20,25]},
              { seatName: "E", totalSeat:22, booked:[5,8,11,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,14,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,18,20]},{ seatName: "H", totalSeat:20, booked:[5,6,9,15,16,19]},
              { seatName: "I", totalSeat:25, booked:[1,3,6,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[8,11,15,18,22]},
            ]}] }
    ]},
    {  place:"Amrat Jaha, Rohini Palace",like:false, timingAvailable:[
        { time: "09:30 AM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
              { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
            ]}]},{ time: "12:30 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
            { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
          ]}]}, { time: "01:45 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
              { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
              { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
            ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
                ]}]},
        { time: "06:40 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
            ]}]}
    ]}
]},
{dateID: 02 , date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Satyam Nagar, RCT Place",like:false, timingAvailable:[
        { time: "08:20 AM", price: 150 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
              { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
            ]}]},{ time: "01:10 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
          ]}]}, { time: "03:15 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
            ]}]},{ time: "06:10 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
          ]}]},
    ]},   {  place:"Hemant Nagar, Taj Palace",like:false, timingAvailable:[
      { time: "09:00 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
          { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
          { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
        ]}]},
  ]},
  {  place:"Chai Sai Restaurant, Akbar Pur Road",like:false, timingAvailable:[
      { time: "09:40 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
            { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
            { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
          ]}] },{ time: "12:30 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
       { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
          { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
        ]}]}, { time: "01:25 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
          ]}]},{ time: "03:40 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,7,20]},
              ]}] },
      { time: "05:10 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
          { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
      ]}]}
  ]},
  {  place:"Rajdhani Marg: Ragini Takeej",like:false, timingAvailable:[
      { time: "09:20 AM", price: 290 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "01:00 PM", price: 300 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
          { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
          { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
          { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
        ]}]}, { time: "02:45 PM", price: 320 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
          { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
        ]}]},{ time: "05:00 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
          { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
        { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "05:50 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
  ]},
    {  place:"Lulu Mall, Shahdara Nagar",like:false, timingAvailable:[
        { time: "09:20 AM", price: 270,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
            ]}] },{ time: "12:40 PM", price: 120 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
            { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
          ]}]}, { time: "01:15 PM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:00 PM", price: 340,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                ]}] },
        { time: "05:20 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
            { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "08:20 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
            ]}]}
    ]},
    {  place:"Kailasha Road, Zuhu Mall",like:false, timingAvailable:[
        { time: "08:40 AM", price: 290 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
              { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
            ]}]},{ time: "12:20 PM", price: 300 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
          ]}]}, { time: "01:30 PM", price: 320 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "03:40 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
          { time: "05:35 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
              { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
            ]}]},
    ]}
]},
{dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Chinepolis: DLF Place, Saket",like:false, timingAvailable:[
        { time: "10:30 AM", price: 160 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "12:30 PM", price: 190,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "04:10 PM", price: 170 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
        { time: "06:30 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},

    ]}, {  place:"Chai Sai Restaurant, Akbar Pur Road",like:false, timingAvailable:[
      { time: "08:30 AM", price: 100 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "12:10 PM", price: 190,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}] }, { time: "01:15 PM", price: 180 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:00 PM", price: 170 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},
      { time: "06:00 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
          ]}]},
          { time: "09:30 PM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
            ]}]}
  ]},
  {  place:"Manju Takeej, Vijay Nagar",like:false, timingAvailable:[
      { time: "07:50 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
          ]}] },  { time: "10:20 AM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
          { time: "01:20 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "03:15 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "05:00 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] },
              { time: "10:30 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]}
  ]},
  {  place:"Hemant Nagar, Taj Palace",like:false, timingAvailable:[
      { time: "08:00 AM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "11:10 PM", price: 220 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "04:20 PM", price: 310 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "09:40 PM", price: 240 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
              { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
              { seatName: "K", totalSeat:22, booked:[5,19,21]},
            ]}]}
  ]},
    {  place:"Lulu Mall, Gomti Nagar",like:false, timingAvailable:[
        { time: "09:00 AM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] },{ time: "12:00 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "01:30 PM", price: 342 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:50 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] },
    ]},
    {  place:"Kailasha Road, Zuhu Mall",like:false, timingAvailable:[
        { time: "09:40 AM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
              { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
              { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
            ]}]},{ time: "12:30 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
            { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
            { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
          ]}]}, { time: "01:40 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
            { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
            { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
            ]}]},
            { time: "09:30 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
              ]}] },
    ]}
]}
]},
{ cityId: 6, cityName:"Hyderabad",
cityBookSlot:[        
 {dateID: 01, date:new Date().getDate(), month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Amar Nagar, Green River Place",like:false , timingAvailable:[
        { time: "08:00 AM", price: 90 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,4,7,12,19]},{ seatName: "B", totalSeat:18, booked:[2,9,11,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,10,15,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[6,9,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,6,8,12,18,20,22]},
          ]}]
        },{ time: "11:20 AM", price: 120 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:20, booked:[8,10,13,17,19]},{ seatName: "B", totalSeat:15, booked:[8,10,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,7,14,17,23,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[6,9,15,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[10,14,15,17,20]},{ seatName: "J", totalSeat:22, booked:[5,6,10,13,15,19]},
            ]}]}, { time: "01:40 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,12,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,17,19]},
            { seatName: "I", totalSeat:20, booked:[6,7,12,16,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,17,18,22]},
          ]}]},{ time: "03:20 PM", price: 130 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,9,12,19]},{ seatName: "B", totalSeat:15, booked:[4,7,14]},
              { seatName: "C", totalSeat:25, booked:[5,9,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,10,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,20]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
            { time:"07:30 PM", price: 200,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
               { seatName: "C", totalSeat:20, booked:[1,4,11,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,7,9,16,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
               { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
             ]}]},
    ]},    {  place:"Mahak Takeej, Birhana Road",like:false, timingAvailable:[
      { time: "09:30 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,7,11,12,19]},{ seatName: "B", totalSeat:15, booked:[2,6,7,10]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,8,12,13,15]},{ seatName: "H", totalSeat:20, booked:[5,7,10,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[2,6,10,14,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,13,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,18]},{ seatName: "F", totalSeat:22, booked:[1,6,12,19,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,9,15,17,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[3,6,10,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,7,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,8,9,17,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[12,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[8,12,16,19,21]},{ seatName: "B", totalSeat:16, booked:[1,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[15,18,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,11,14,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,12,15,18,22]},
          { seatName: "K", totalSeat:25, booked:[6,10,15,19,22]},
        ]}]},
  ]},
  {  place:"Amarat Takeej, Binda Nagar",like:false, timingAvailable:[
      { time: "07:50 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1,5,8,10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,13,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,14,20,21]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,17,20]},
            { seatName: "I", totalSeat:20, booked:[1,5,6,13,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,10,16,18,22]},
          ]}] },{ time: "12:00 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:21, booked:[2,9,12,19]},{ seatName: "B", totalSeat:18, booked:[3,10,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,12,15,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:20, booked:[6,8,12,20]},{ seatName: "F", totalSeat:22, booked:[1,6,16,21,22]},
          { seatName: "G", totalSeat:20, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,6,9,15,19,20]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[4,8,15,18,22]},
        ]}]}, { time: "01:15 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[1,2,6,15,19]},{ seatName: "B", totalSeat:16, booked:[10,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,15,21]},{ seatName: "H", totalSeat:25, booked:[5,7,15,19]},
            { seatName: "I", totalSeat:20, booked:[2,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,4,8,15,18,22]},
          ]}]},{ time: "03:00 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[2,7,10,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                { seatName: "C", totalSeat:25, booked:[8,9,16,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:25, booked:[6,10,12,17,22,25]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:24, booked:[1,5,9,12,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                { seatName: "K", totalSeat:20, booked:[1,4,5,16,18,22]},
              ]}] },
      { time: "05:30 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:22, booked:[6,8,9,12,19,21]},{ seatName: "B", totalSeat:15, booked:[3,6,10,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[7,10,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,10,12,19,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,12,14,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[3,5,13,17,19,20]},{ seatName: "J", totalSeat:22, booked:[3,10,19,21]},
          { seatName: "K", totalSeat:24, booked:[1,12,16,18,22]},
        ]}]}
  ]},  {  place:"Carnival: Tata Mall, Gokul",like:false, timingAvailable:[
      { time: "08:40 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,18,19]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,14,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,20,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,13,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,8,12,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,3,8,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,10,13,18,22]},
          ]}] },{ time: "12:30 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[8,10,13,15,19]},{ seatName: "B", totalSeat:19, booked:[3,10,12,15,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:24, booked:[2,5,10,13,18,20,24]},{ seatName: "F", totalSeat:22, booked:[4,7,9,16,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
          { seatName: "I", totalSeat:20, booked:[3,5,10,14,17,20]},{ seatName: "J", totalSeat:22, booked:[2,8,12,18,21,22]},
        ]}]}, { time: "01:45 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[4,10,12,15,19]},{ seatName: "B", totalSeat:17, booked:[3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[2,14,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,12,14,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,15,19,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,11,15]},{ seatName: "H", totalSeat:22, booked:[2,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[3,5,14,17,20]},{ seatName: "J", totalSeat:25, booked:[5,13,16,18,22]},
            { seatName: "K", totalSeat:22, booked:[4,7,15,18,21]},{ seatName: "L", totalSeat:25, booked:[3,12,14,16,17,20,25]},
          ]}]},{ time: "04:20 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[10,13,17,18]},{ seatName: "B", totalSeat:18, booked:[1,12,16]},
                { seatName: "C", totalSeat:25, booked:[7,12,20,23]}, ]},
                { seatType:"GOLD", seatValue:250, seatInfo:[
               { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[1,4,7,16,18,21]},{ seatName: "F", totalSeat:22, booked:[3,5,10,16,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15,17,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,2,5,10,17,20]},{ seatName: "J", totalSeat:22, booked:[2,9,11,15,18,20,22]},
              ]}] },
  ]},
    {  place:"Zuhu Mall, Mahant Nagar",like:false,  timingAvailable:[
        { time: "09:20 AM", price: 190 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[4,6,11,12,19]},{ seatName: "B", totalSeat:15, booked:[1,3,6,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,10,12,17,19,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,19,22]},{ seatName: "F", totalSeat:22, booked:[1,6,11,12,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[2,5,7,9,15,22]},
            { seatName: "I", totalSeat:24, booked:[1,5,10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[1,5,12,16,18,22]},
          ]}]},{ time: "12:00 PM", price: 100 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[5,7,9,10,15,21]},{ seatName: "F", totalSeat:22, booked:[1,4,9,12,13,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,10,13,15,22]},{ seatName: "H", totalSeat:22, booked:[4,7,9,15,17,19]},
            { seatName: "I", totalSeat:25, booked:[1,6,10,13,17,20,25]}
          ]}]}, { time: "01:50 PM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[4,10,16,19]},{ seatName: "B", totalSeat:15, booked:[1,4,8,10,12,15]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,15,17,23,24]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,8,15,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,16,19,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15,18]},{ seatName: "H", totalSeat:22, booked:[4,5,7,9,12,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,13,15,17,20]},{ seatName: "J", totalSeat:22, booked:[3,12,15,18,20]},
              { seatName: "K", totalSeat:22, booked:[4,5,12,17,19]},
            ]}] },{ time: "03:20 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,11,15,19]},{ seatName: "B", totalSeat:15, booked:[1,10,13,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[1,5,9,11,16,21]},{ seatName: "F", totalSeat:22, booked:[1,3,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:25, booked:[5,7,9,10,15,19,22]},
            { seatName: "I", totalSeat:20, booked:[1,3,5,6,12,14,18,20]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
          ]}]},{ time:"06:30 PM", price: 200,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[7,9,11,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
              { seatName: "C", totalSeat:25, booked:[8,12,14,17,23]},
             ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
            ]}]},
            { time:"11:30 PM", price: 200,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
               { seatName: "C", totalSeat:20, booked:[1,4,11,17,23]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
               { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
             ]}]},
    ]},
    {  place:"Amar Nagar, Green River Place",like:false, timingAvailable:[
        { time: "09:30 AM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[10,13,18]},{ seatName: "B", totalSeat:14, booked:[1,4,7,10]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,3,7,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[4,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,17,20,22]},
              { seatName: "G", totalSeat:25, booked:[2,7,10,15,17,19,23]},{ seatName: "H", totalSeat:25, booked:[5,7,9,15,17,19]},
            ]}]},{ time: "12:30 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:21, booked:[10,12,15,19]},{ seatName: "B", totalSeat:22, booked:[2,9,11,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,10,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,22,25]},
            { seatName: "E", totalSeat:22, booked:[3,12,16,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,15,17,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,9,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,10,13,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,4,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,15,18,22]},
          ]}]}, { time: "01:45 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:22, booked:[2,10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[1,6,7,11]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,13,19,21,23]},{ seatName: "D", totalSeat:25, booked:[6,12,14,18,22,25]},
              { seatName: "E", totalSeat:25, booked:[3,7,13,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[4,9,11,15,17,20]},
              { seatName: "I", totalSeat:25, booked:[1,3,5,12,16,20]},{ seatName: "J", totalSeat:22, booked:[3,9,10,15,19,22]},
            ]}]},{ time: "03:00 PM", price: 210 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:20, booked:[2,8,11,12,19]},{ seatName: "B", totalSeat:16, booked:[1,7,9,12]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:20, booked:[4,6,17,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,5,7,10,12,15,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,3,10,13,17,20]},
                ]}]},
        { time: "06:40 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[1,8,13,15,19]},{ seatName: "B", totalSeat:16, booked:[5,10,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[1,8,11,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[5,8,12,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,8,10,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:20, booked:[6,7,10,15,17,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,6,17,20]},{ seatName: "J", totalSeat:22, booked:[3,10,12,18,22]},
            ]}]},
            { time:"11:30 PM", price: 230,seats:[
             { seatType:"RECLINER", seatValue:420, seatInfo:[
               { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
               { seatName: "C", totalSeat:15, booked:[1,4,11,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
               { seatName: "E", totalSeat:20, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
               { seatName: "G", totalSeat:22, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
               { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
             ]}]},
    ]}
]},
{dateID: 02 , date:new Date().getDate()+1, month:new Date().toLocaleDateString("default",{month:"short"}) ,timingSlots:[
    {  place:"Amar Nagar, Green River Place",like:false, timingAvailable:[
        { time: "08:20 AM", price: 150 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:15, booked:[1,7,10,12,14]},{ seatName: "B", totalSeat:19, booked:[3,8,11,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,13,17,21,22]},
              { seatName: "G", totalSeat:22, booked:[7,10,15]},{ seatName: "H", totalSeat:22, booked:[9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
            ]}]},{ time: "01:10 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[10,12,17,19]},{ seatName: "B", totalSeat:15, booked:[5,10,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,12,15,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,16,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[1,12,16,18,22]},
          ]}]}, { time: "03:15 PM", price: 210 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:20, booked:[3,6,10,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,10,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[3,15,17,20]},{ seatName: "J", totalSeat:22, booked:[4,5,7,11,18,22]},
            ]}]},{ time: "06:10 PM", price: 200 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,17,19]},{ seatName: "B", totalSeat:18, booked:[4,7,10,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[1,13,16,17,25]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[6,11,15,18]},{ seatName: "F", totalSeat:22, booked:[2,6,9,12,16,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,18,22]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[15,18,20]},
          ]}]},
    ]},   {  place:"Chinepolis: Cross River Mall, Geeta Nagar",like:false, timingAvailable:[
      { time: "09:00 AM", price: 150 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[5,10,16,19]},{ seatName: "B", totalSeat:25, booked:[3,6,12,14,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,11,16,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,12,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[8,10,12,18,20,22]},
          ]}]},{ time: "12:00 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[1,7,10,12,15]},{ seatName: "B", totalSeat:20, booked:[2,13,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[6,12,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,13,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,7,17,20]},{ seatName: "J", totalSeat:22, booked:[2,7,11,17,18,22]},
        ]}]}, { time: "01:15 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[6,12,18,19]},{ seatName: "B", totalSeat:15, booked:[1,9,12]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,15,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,13,20,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,11,15,17,22]},{ seatName: "H", totalSeat:24, booked:[2,4,6,14,16,18,21]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[3,8,12,15,19,21]},
          ]}]},{ time: "03:00 PM", price: 200 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:16, booked:[1,2,6,10,13,19]},{ seatName: "B", totalSeat:15, booked:[4,8,9,11,13]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[3,6,8,11,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[10,13,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,8,12,16,19,22]},
          { seatName: "G", totalSeat:25, booked:[2,7,9,12,17,19,22]},{ seatName: "H", totalSeat:22, booked:[5,7,10,16,19]},
          { seatName: "I", totalSeat:22, booked:[1,5,8,12,14,17,21]},{ seatName: "J", totalSeat:20, booked:[2,9,11,15,17,18]},
        ]}]},
  ]},
  {  place:"Pooja Takeej, Mahant Nagar",like:false, timingAvailable:[
      { time: "09:40 AM", price: 270,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,11,16,19]},{ seatName: "B", totalSeat:17, booked:[3,7,9,12,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "E", totalSeat:22, booked:[8,11,17,20]},{ seatName:"F", totalSeat:22, booked:[1,5,10,16,20]},
            { seatName: "G", totalSeat:22, booked:[5,9,12,14,19]},{ seatName: "H", totalSeat:20, booked:[5,8,10,12,16,19]},
            { seatName: "I", totalSeat:24, booked:[1,6,13,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,9,13,16,23]},
          ]}] },{ time: "12:30 PM", price: 110 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:20, booked:[3,6,7,11,13,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          { seatName: "C", totalSeat:22, booked:[3,7,10,14,18,20,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
       { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:25, booked:[1,5,10,13,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,18,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,9,13,15]},{ seatName: "H", totalSeat:20, booked:[7,9,11,15,18]},
          { seatName: "I", totalSeat:22, booked:[1,8,12,16,18,22]},{ seatName: "J", totalSeat:24, booked:[4,9,12,16,19,23]},
        ]}]}, { time: "01:25 PM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[10,12,14,19]},{ seatName: "B", totalSeat:18, booked:[8,12,14]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[10,14,19,23]},{ seatName: "D", totalSeat:25, booked:[4,10,13,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,3,8,10,15,24]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,15,17,20]},
          ]}]},{ time: "03:40 PM", price: 340,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:22, booked:[3,10,12,20]},{ seatName: "B", totalSeat:20, booked:[4,10,13]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[2,9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[14,18,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:25, booked:[2,7,9,10,15,25]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,7,20]},
              ]}] },{ time:"05:30 PM", price: 200,seats:[
               { seatType:"RECLINER", seatValue:420, seatInfo:[
                 { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
                 { seatName: "C", totalSeat:20, booked:[1,4,11,17,23]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                 { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,3,6,10,16,21,22]},
                 { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                 { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[5,9,12,14,18,20]},
               ]}]},
      { time: "05:10 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,17,19]},{ seatName: "B", totalSeat:19, booked:[3,12,18]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:20, booked:[8,10,17,20]},{ seatName: "D", totalSeat:25, booked:[6,10,18,21,25]},
          { seatName: "E", totalSeat:22, booked:[11,15,22]},{ seatName: "F", totalSeat:24, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,6,10,12,15]},{ seatName: "H", totalSeat:22, booked:[6,10,11,15,19]},
      ]}]}
  ]},
  {  place:"Carnival: Tata Mall, Gokul",like:false, timingAvailable:[
      { time: "09:20 AM", price: 290 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,7,15,19]},{ seatName: "B", totalSeat:18, booked:[1,8,9,17]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,17,19,22,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[16,20,21]},{ seatName: "F", totalSeat:22, booked:[1,5,6,10,20]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,14,19]},{ seatName: "H", totalSeat:26, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,13,22]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "01:00 PM", price: 300 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:15, booked:[3,9,11,12,15]},{ seatName: "B", totalSeat:15, booked:[6,8,12,15]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:24, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,20,22]},
          { seatName: "E", totalSeat:20, booked:[4,10,14,18,22]},{ seatName: "F", totalSeat:22, booked:[7,9,12,16,21]},
          { seatName: "G", totalSeat:20, booked:[7,8,12,16,19]},{ seatName: "H", totalSeat:25, booked:[5,9,13,17,18,19,23]},
          { seatName: "I", totalSeat:25, booked:[1,4,8,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[5,10,13,18,22]},
        ]}]}, { time: "02:45 PM", price: 320 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,9,18,19]},{ seatName: "B", totalSeat:20, booked:[1,6,12,19]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[4,10,12,23,24]},{ seatName: "D", totalSeat:20, booked:[6,9,12,15,18,20]},
          { seatName: "E", totalSeat:22, booked:[1,13,15,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]}
        ]}]},{ time: "05:00 PM", price: 390 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[1,2,10,16,19]},{ seatName: "B", totalSeat:15, booked:[2,12,14,15]},
          { seatName: "C", totalSeat:25, booked:[3,10,15,18,22]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
        { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "05:50 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[3,11,16,17]},
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
  ]},
    {  place:"Lulu Mall, Dada Nagar",like:false, timingAvailable:[
        { time: "09:20 AM", price: 270,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,7,10,12,19]},{ seatName: "B", totalSeat:20, booked:[3,8,10,17,19]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:22, booked:[3,5,17,20,21]},{ seatName: "D", totalSeat:25, booked:[6,10,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[9,10,15,20]},{ seatName: "F", totalSeat:22, booked:[1,14,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,15,17,20]},
            ]}] },{ time: "12:40 PM", price: 120 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[5,7,9,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[2,7,18,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[3,10,12,19,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:25, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,15,17,20]},{ seatName: "J", totalSeat:24, booked:[15,18,22]},
            { seatName: "K", totalSeat:25, booked:[3,14,17,20]},{ seatName: "L", totalSeat:20, booked:[2,14,18,19]},
          ]}]}, { time: "01:15 PM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:18, booked:[5,6,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,12,17,19,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:00 PM", price: 340,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[9,12,16,18]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[1,6,13,17,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15,20]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                  { seatName: "K", totalSeat:24, booked:[3,10,13,19,20]},
                ]}] },
        { time: "05:20 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,10,14,18,19]},{ seatName: "B", totalSeat:14, booked:[2,6,8,10,12]},
            { seatName: "C", totalSeat:25, booked:[4,7,16,20,23]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
         { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,3,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,13,14,15,21]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
            { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "08:20 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[12,14,18,19]},{ seatName: "B", totalSeat:19, booked:[2,16,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[4,7,16,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[1,6,8,19,21]},{ seatName: "F", totalSeat:22, booked:[10,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,12,14,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,5,7,19,20]},
            ]}]}
    ]},
    {  place:"Maharaj Pur, Satya Mall",like:false, timingAvailable:[
        { time: "08:40 AM", price: 290 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,9,10,12,19]},{ seatName: "B", totalSeat:25, booked:[1,5,9,12,16,21,22]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,13,18]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,5,9,12,16]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,20]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19,21]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:20, booked:[6,8,17,20]},
              { seatName: "K", totalSeat:25, booked:[1,5,9,12,18,22]}
            ]}]},{ time: "12:20 PM", price: 300 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[1,5,9,12,16,21,22]},{ seatName: "B", totalSeat:18, booked:[1,5,9,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,16,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,5,10,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,11,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,15,18,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[1,8,12,18]},
          ]}]}, { time: "01:30 PM", price: 320 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,10,12,19]},{ seatName: "B", totalSeat:15, booked:[4,12,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[1,5,9,12,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "03:40 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,9,12,16,21]},{ seatName: "B", totalSeat:18, booked:[5,9,11,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[4,8,17,23]},{ seatName: "D", totalSeat:20, booked:[10,17,19,20]},
            { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
          ]}]},
          { time: "05:35 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,16,21]},{ seatName: "B", totalSeat:18, booked:[11,16,18]},
              { seatName: "C", totalSeat:25, booked:[4,8,17,23]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[2,12,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,5,13,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[10,16,17,20]},
            ]}]},
    ]}
]},
{dateID: 03, date:new Date().getDate()+2, month:new Date().toLocaleDateString("default",{month:"short"}),timingSlots:[
    {  place:"Mahak Takeej, Birhana Road",like:false, timingAvailable:[
        { time: "10:30 AM", price: 160 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[3,16,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[5,8,14,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[9,13,16,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "12:30 PM", price: 190,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] }, { time: "02:15 PM", price: 200 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[1,10,12,18]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[17,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]},{ time: "04:10 PM", price: 170 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[7,13,20,22]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[10,16,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,7,10,16,19,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
        { time: "06:30 PM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:20, booked:[2,14,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},

    ]}, {  place:"Amarat Takeej, Binda Nagar",like:false, timingAvailable:[
      { time: "08:30 AM", price: 100 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[10,12,19]},{ seatName: "B", totalSeat:18, booked:[3,11,13,16]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "E", totalSeat:22, booked:[2,16,19,10]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "12:10 PM", price: 190,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}] }, { time: "01:15 PM", price: 180 ,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}]},{ time: "03:00 PM", price: 170 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},
      { time: "06:00 PM", price: 390 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,14,18]},{ seatName: "B", totalSeat:20, booked:[3,10,13,18]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,13,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[2,8,13,17,18,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[5,10,14,15,18,22]},
          ]}]},
          { time: "09:30 PM", price: 320 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:16, booked:[3,10,11,13]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[5,6,10,17]},{ seatName: "F", totalSeat:22, booked:[1,9,10,13,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[6,9,10,14,16,17,20]},
            ]}]}
  ]},
  {  place:"Pooja Takeej, Mahant Nagar",like:false, timingAvailable:[
      { time: "07:50 AM", price: 220,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[2,3,14,18,19]},{ seatName: "B", totalSeat:18, booked:[3,13,16]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[6,11,14,17,19,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[12,22]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[10,12,14,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            { seatName: "K", totalSeat:26, booked:[10,12,19,20,22,25]},
          ]}] },  { time: "10:20 AM", price: 390 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[2,5,7,15,19]},{ seatName: "B", totalSeat:15, booked:[4,8,12,14]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:20, booked:[1,10,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[4,9,10,15,19,21]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:22, booked:[10,15,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},
          { time: "01:20 PM", price: 210 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "03:15 PM", price: 342 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "05:00 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:22, booked:[12,19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
              ]}] },
              { time: "10:30 PM", price: 390 ,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}]}
  ]},
  {  place:"Lulu Mall, Dada Nagar",like:false, timingAvailable:[
      { time: "08:00 AM", price: 230 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[3,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[13,15]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},{ time: "11:10 PM", price: 220 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]}, { time: "01:15 PM", price: 180 ,seats:[
        { seatType:"RECLINER", seatValue:420, seatInfo:[
          { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[12,17]},
        ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
          { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
          { seatName: "E", totalSeat:22, booked:[12,17]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
          { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
          { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
        ]}]},{ time: "04:20 PM", price: 310 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[10,15]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[9,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[19,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]},
          { time: "09:40 PM", price: 240 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[6,9,12,19]},{ seatName: "B", totalSeat:20, booked:[4,6,15,18]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[3,12,17,23]},{ seatName: "D", totalSeat:22, booked:[2,6,7,12,20]},
              { seatName: "E", totalSeat:22, booked:[13,12,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,18,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[6,9,15,18,22]},
              { seatName: "K", totalSeat:22, booked:[5,19,21]},
            ]}]}
  ]},
    {  place:"Chinepolis: Cross River Mall, Geeta Nagar",like:false, timingAvailable:[
        { time: "09:00 AM", price: 220,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[7,12,19,20]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:25, booked:[2,10,15,18]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}] },{ time: "12:20 PM", price: 210 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[2,6,14,19]},{ seatName: "B", totalSeat:19, booked:[1,5,8,20]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:25, booked:[12,16,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[1,5,16,21,22]},
            { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
          ]}]}, { time: "01:30 PM", price: 342 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[8,12,19]},{ seatName: "B", totalSeat:15, booked:[1]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
              { seatName: "C", totalSeat:25, booked:[8,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[]},{ seatName: "F", totalSeat:22, booked:[5,9,12,16,20,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
            ]}]},{ time: "03:50 PM", price: 347,seats:[
                { seatType:"RECLINER", seatValue:420, seatInfo:[
                  { seatName: "A", totalSeat:19, booked:[5,7,12,19]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
                ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                  { seatName: "E", totalSeat:25, booked:[1,7,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                  { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
                  { seatName: "I", totalSeat:24, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[15,18,22]},
                ]}] },{ time:"05:30 PM", price: 200,seats:[
                 { seatType:"RECLINER", seatValue:420, seatInfo:[
                   { seatName: "A", totalSeat:22, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:15, booked:[2,8,9,13]},
                  ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                  { seatName: "D", totalSeat:20, booked:[2,13,18]},
                   { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:25, booked:[1,3,6,10,16,21,22]},
                   { seatName: "G", totalSeat:25, booked:[2,7,10,12,15,19,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                   { seatName: "I", totalSeat:20, booked:[1,3,8,10,13,17,20]},{ seatName: "J", totalSeat:25, booked:[5,9,10,13,17,20]},
                 ]}]},{ time:"09:30 PM", price: 200,seats:[
                   { seatType:"RECLINER", seatValue:420, seatInfo:[
                     { seatName: "A", totalSeat:20, booked:[7,9,12,16,19]},{ seatName: "B", totalSeat:17, booked:[2,8,9,13,16]},
                     { seatName: "C", totalSeat:20, booked:[1,4,11,12]},
                    ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                    { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                     { seatName: "E", totalSeat:22, booked:[5,7,9,15,19]},{ seatName: "F", totalSeat:22, booked:[1,5,10,16,21,22]},
                     { seatName: "G", totalSeat:25, booked:[2,9,15,18,20,22]},{ seatName: "H", totalSeat:20, booked:[5,7,9,12,15,19]},
                     { seatName: "I", totalSeat:20, booked:[5,9,10,13,17,20]},{ seatName: "J", totalSeat:22, booked:[2,5,9,18,20]},
                   ]}]},
    ]},
    {  place:"Maharaj Pur, Satya Mall",like:false, timingAvailable:[
        { time: "09:40 AM", price: 230 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:19, booked:[3,6,11,12,16,19]},{ seatName: "B", totalSeat:20, booked:[3,8,11,13]},
              { seatName: "C", totalSeat:20, booked:[3,14,15,17,20]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
           { seatName: "D", totalSeat:25, booked:[2,7,12,13,19,21,25]},
              { seatName: "E", totalSeat:22, booked:[11,14,17,21]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,4,7,9,11,13,16,21]},{ seatName: "H", totalSeat:20, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[1,4,10,14,18,20]},{ seatName: "J", totalSeat:24, booked:[1,5,8,13,17,20]},
            ]}]},{ time: "12:30 PM", price: 220 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:20, booked:[2,7,10,12,15,18]},{ seatName: "B", totalSeat:25, booked:[4,7,10,13,18,22]},
            { seatName: "C", totalSeat:18, booked:[2,7,10,13,17]}
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "D", totalSeat:20, booked:[6,8,10,14,17,19]},
            { seatName: "E", totalSeat:25, booked:[3,10,11,16,19]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,15,18,22]},
            { seatName: "G", totalSeat:22, booked:[2,4,9,11,13,15]},{ seatName: "H", totalSeat:24, booked:[5,9,12,15,19]},
            { seatName: "I", totalSeat:20, booked:[1,6,10,13,17,20]}
          ]}]}, { time: "01:40 PM", price: 180 ,seats:[
          { seatType:"RECLINER", seatValue:420, seatInfo:[
            { seatName: "A", totalSeat:22, booked:[3,7,8,13,16,19]},{ seatName: "B", totalSeat:18, booked:[5,8,11,13]},
          ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
            { seatName: "C", totalSeat:24, booked:[3,7,12,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
            { seatName: "E", totalSeat:22, booked:[4,9,11,13,19,21]},{ seatName: "F", totalSeat:22, booked:[1,7,12,16,20,22]},
            { seatName: "G", totalSeat:20, booked:[2,7,10,12,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,12,16,19]},
            { seatName: "I", totalSeat:25, booked:[1,7,13,18,20]},{ seatName: "J", totalSeat:22, booked:[10,14,18,22]},
          ]}]},{ time: "03:00 PM", price: 310 ,seats:[
            { seatType:"RECLINER", seatValue:420, seatInfo:[
              { seatName: "A", totalSeat:24, booked:[2,8,11,14,19,22]},{ seatName: "B", totalSeat:16, booked:[1,5,16]},
            ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
             { seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
              { seatName: "E", totalSeat:22, booked:[12,17,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
              { seatName: "G", totalSeat:22, booked:[2,7,10,15]},{ seatName: "H", totalSeat:22, booked:[5,7,9,15,19]},
              { seatName: "I", totalSeat:24, booked:[7,9,11,15,19,23]},{ seatName: "J", totalSeat:22, booked:[1,5,8,14,19,22]},
            ]}]},
            { time: "09:30 PM", price: 347,seats:[
              { seatType:"RECLINER", seatValue:420, seatInfo:[
                { seatName: "A", totalSeat:14, booked:[5,7,12]},{ seatName: "B", totalSeat:20, booked:[11,16,20]},
              ]},{ seatType:"GOLD", seatValue:250, seatInfo:[
                { seatName: "C", totalSeat:25, booked:[3,14,17,23]},{ seatName: "D", totalSeat:25, booked:[6,12,17,21,25]},
                { seatName: "E", totalSeat:20, booked:[1,9,12,18,20]},{ seatName: "F", totalSeat:22, booked:[1,5,9,12,16,21,22]},
                { seatName: "G", totalSeat:24, booked:[2,7,10,15]},{ seatName: "H", totalSeat:24, booked:[5,7,9,15,19]},
                { seatName: "I", totalSeat:20, booked:[1,5,17,20]},{ seatName: "J", totalSeat:22, booked:[10,13,18,22]},
              ]}] },
    ]}
]}
]}];
let jwtExpirySecond = 3600;
let allData = require("./data.js");

let fname = "movie.json";
let fs = require("fs");
let strategy = new JWTStrategy(params, function(token, done ){
  console.log("In All Strategy Login", token);
  fs.readFile(fname,"utf8",function(err,result){
if(err) res.status(401).send(err);
else{
  let data = JSON.parse(result);
  let user = data.loginData.find(u=> u.id === token.id);
  if(!user) return done(null, false , {message:"Incorrect username or password"});
  else return done(null, user);
 } })
})
passport.use("roleAll",strategy);

app.post("/login", function(req,res){
 let { email } = req.body;
 fs.readFile(fname,"utf-8",function(err,result){
  if(err) res.status(401).send(err)
  else{
    let data1 = JSON.parse(result);
 let user = data1.loginData.find(u=> u.email === email);
 if(user){
  let payload = { id : user.id};
  let token = jwt.sign(payload, params.secretOrKey,{
    algorithm:"HS256",
    expiresIn: jwtExpirySecond
  });
  res.send({token : "bearer "+ token});
 } }})
})
app.get("/user",passport.authenticate("roleAll", {session: false}),
function(req,res){
  res.send(req.user);
})
app.get("/purchase",passport.authenticate("roleAll",{session: false}),function(req,res){
fs.readFile(fname,"utf8",function(err,result){
 if(err) res.status(404).send(err);
 else{
  let data = JSON.parse(result);
 let purchase = data.bookingArr.filter((b1)=>b1.userId === +req.user.id);
   res.send(purchase);
 }
})
})
app.get("/setData",function(req,res){
 let data1 = {...allData};
 let data = JSON.stringify(data1);
 fs.writeFile(fname,data,function(err){
  if(err) res.send(err);
  else res.send("Data reset");
 })
})
app.post("/movies",function(req,res){
  fs.readFile(fname,"utf8",function(err,result){
    if(err) res.status(401).send(err);
    else{
       let data = JSON.parse(result);
       let maxid = data.moviesData.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0);
       let newid = maxid+1;
       let newMovie = { id: newid, ...req.body};
       data.moviesData.unshift(newMovie);
       let data1 = JSON.stringify(data);
       fs.writeFile(fname,data1,function(err1){
        if(err) res.status(401).send(err1)
        else res.send(newMovie);
       })
    }})
})
app.post("/newLogin",function(req,res){
fs.readFile(fname,"utf8",function(err,result){
if(err) res.status(401).send(err);
else{
     let data = JSON.parse(result);
     let maxid = data.loginData.reduce((acc,curr)=>curr.id>acc?curr.id:acc, 0);
     let newid = maxid +1;
     let newUser = {id: newid, ...req.body}
     data.loginData.push(newUser);
     let data1 = JSON.stringify(data);
     fs.writeFile(fname,data1,function(err1){
      if(err1) res.status(401).send(err1)
      else res.send(newUser);
     }) 
 }})
})
app.put("/editLogin",passport.authenticate("roleAll",{session:false}), function(req,res){
  fs.readFile(fname,"utf8",function(err,result){
    if(err) res.status(401).send(err);
    else{
       let data = JSON.parse(result);
       let index = data.loginData.findIndex((l1)=>l1.id === +req.user.id);
       if(index>=0){
        let updated = {...data.loginData[index],...req.body}
         data.loginData[index] = updated
       let data1 = JSON.stringify(data);
       fs.writeFile(fname,data1,function(err1){
        if(err1) res.status(401).send(err1)
        else res.send(updated); 
      })}
      else res.status(401).send("No User found");
}})})
app.post("/booked",passport.authenticate("roleAll",{session:false}),function(req,res){
  fs.readFile(fname,"utf8",function(err,result){
    if(err) res.status(401).send(err);
    else{
       let data = JSON.parse(result);
       let maxid = data.bookingArr.reduce((acc,curr)=>curr.bookingId>acc? curr.bookingId:acc,0);
       let newid = +maxid +1;
       let purdata = {bookingId: newid, userId: req.user.id,...req.body}
       data.bookingArr.push(purdata);
       let data1 = JSON.stringify(data);
       fs.writeFile(fname,data1,function(err1){
        if(err1) res.status(401).send(err1)
        else res.send(purdata); 
       })
    }
  })
})
app.get("/movies/:city",function(req,res){
let city = req.params.city;
let { q ,lang ,format,genre } = req.query;
let lang1 = lang?lang.split(","):null;
let format1 = format?format.split(","):null;
let genre1 = genre?genre.split(","):null;
fs.readFile(fname,"utf-8",function(err,result){
if(err) res.status(401).send(err)
else{
let data = JSON.parse(result);
let arr = data.moviesData;
let arr1 = arr.filter((a1)=>a1.cities.find((c1)=>c1===city));
if(q) arr1 = arr1.filter((a1)=>a1.title.includes(q));
if(lang1) arr1 = arr1.filter((a1)=>lang1.find((l2)=>a1.languages.find((l1)=>l1===l2)));
if(format1) arr1 = arr1.filter((a1)=>format1.find((f2)=>a1.format.find((f1)=>f1===f2)));
if(genre1) arr1 = arr1.filter((a1)=>genre1.find((g1)=>a1.typeOf.find((t1)=>t1===g1)));
res.send(arr1);
}
})})
app.get("/movies/:city/:title/:id",function(req,res){
let { city, title, id } = req.params;
fs.readFile(fname,"utf8",function(err,result){
if(err) res.status(401).send(err);
else{
  let data = JSON.parse(result);
let movie = data.moviesData.find((d1)=>d1.id === +id && d1.title.startsWith(title));
let citydata = cityBookingArr.find((c1)=>c1.cityName === city).cityBookSlot;
if(movie){
  res.send({movieData:movie, cityBookingData: citydata});
}else res.status(404).send("No Movie Found")
}})
})
app.put("/movies/:id",function(req,res){
  let { id } = req.params;
  fs.readFile(fname,"utf8",function(err,result){
  if(err) res.status(401).send(err);
  else{
    let data = JSON.parse(result);
    let index = data.moviesData.findIndex((d1)=>d1.id === +id);
   if(index>=0){
    let updated = {...data.moviesData[index],...req.body};
    data.moviesData[index] = updated;
    let data1 = JSON.stringify(data);
    fs.writeFile(fname,data1, function(err1){
      if(err1) res.status(404).send(err1)
      else  res.send(updated);
    })
  }else res.status(404).send("No Movie Found")
  }})
})