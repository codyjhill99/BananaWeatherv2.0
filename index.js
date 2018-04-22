//Text messages
//steps to get working 
//npm install twilio
//node index.js
var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC271d6f84e219b829d6e9d13858ddb91a', 'b0b310ebd8e1f02e6a4324995de9b346');
var aqi = 100;
// Send the text message.
//client.messages.create({
//  to: '19289109838',
//  from: '19286429684 ',
//  body: 'Hello from Twilio!'
//});


//Api Requests
//npm init
//npm i request
//node request-Bananas.js
const request = require("request");
const url =
  "https://api.breezometer.com/baqi/?lat=40.7324296&lon=-73.9977264&key=0ecdb6430876462dbaa36f9bcff095bc";
//request.get(url, (error, response, body) => {
//  let json = JSON.parse(body);
//  console.log( `Breezometer AQI: ${json.breezometer_aqi}`);
//});

console.log("server running");
var refreshId = setInterval(function() {
    request.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  aqi = json.breezometer_aqi;
  console.log(aqi);
        
});
    if (aqi < 30) {
        // Send the text message.
        console.log("preparing to send message");
        client.messages.create({
        to: '19289109838',
        from: '19286429684 ',
        body: 'RUN THE AIR IS POISON'
        });
        console.log("Message sent");
        clearInterval(refreshId);
        }
}, 300 * 1000); 