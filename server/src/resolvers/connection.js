const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url='http://www.boredapi.com/api/activity/';
Http.open("GET", url);
Http.responseType = 'json';
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}