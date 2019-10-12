var http = require("https");

var options = {
  "method": "GET",
  "hostname": [
    "api",
    "funtranslations",
    "com"
  ],
  "path": [
    "translate",
    "yoda.json"
  ],
  "headers": {
    "User-Agent": "PostmanRuntime/7.17.1",
    "Accept": "/",
    "Cache-Control": "no-cache",
    "Postman-Token": "b7cdaca7-fe57-44fb-a2bb-a53fbee98cc3,751ac336-00cd-498b-a967-07c2fb7e103d",
    "Host": "api.funtranslations.com",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];
