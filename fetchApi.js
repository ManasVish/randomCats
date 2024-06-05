// The Fetch API provides an interface for Fetching resources
// It uses Request and Response objects
// fetch() method is used to fetch a resource(data)
// It returns a Promise

// let promise = fetch(URL,[Option]);

// Some important terms
// AJAX is Asynchronous JS & XML
// JSON Javascript Object Notation

// json() -> Returns a second promise that resolves with the reslut
// of Parsing the response body text as JSON.
// (Input -> JSON
// Output -> jS Object)
// response is json format
// 1) When we Send the request to api We get response in json format
// 2) Convert this json format into javascript object to convert this we use json()
// 
const url = "https://api.thecatapi.com/v1/images/search";
let img = document.querySelector("img");
let btn = document.querySelector("button");



const breedList = async () => {
  console.log("Data is Fetching");
  let response = await fetch(url);
  let data = await response.json();
  console.log(data[0]);
  img.src = data[0].url;
  img.width = 700;
  img.height = 500;
//   document.write(data[0]);
};

btn.onclick = breedList;
