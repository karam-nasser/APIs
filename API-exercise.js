//APIs//
//Star Wars//

console.log("Darth Vader Height: 202");
console.log("C3PO species: Droid");
console.log("Obi Wan Kenobi films: 1-6");
console.log("Population of Alderaan: 2000000000");
console.log("Millennium Falcon Manufacturer: Corellian Engineering Corporation");

//Social Mountain API//
console.log("1. POST request accepts params, queries, & body");
console.log("2. Data type does the GET request returns: array, body, headers, URL");
console.log("3. ")
/*4.curl -X 'GET' \
  'https://practiceapi.devmountain.com/api/posts/filter?text=posts%2Ffilter' \
  -H 'accept: application/json'
  https://practiceapi.devmountain.com/api/posts/filter?text=posts%2Ffilter
   access-control-allow-origin: * 
 alt-svc: h3=":443"; ma=86400,h3-29=":443"; ma=86400,h3-28=":443"; ma=86400,h3-27=":443"; ma=86400 
 cache-control: no-cache 
 cf-cache-status: DYNAMIC 
 cf-ray: 6a99dcdcfa01584e-IAD 
 content-length: 2 
 content-type: application/json; charset=utf-8 
 date: Fri,05 Nov 2021 23:29:11 GMT 
 etag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w" 
 expect-ct: max-age=604800,report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct" 
 expires: -1 
 server: cloudflare 
 status: 200 OK 
 strict-transport-security: max-age=15552000 
 x-powered-by: Express,Phusion Passenger(R) 6.0.8 

5. "curl -X 'POST' \
 'https://practiceapi.devmountain.com/api/posts' \
 -H 'accept: application/json' \
 -H 'Content-Type: application/json' \
 -d '{
 "text": "karam nasser"
}'")

{
    "id": 236,
    "text": "karam nasser",
    "date": "05 Nov 2021"
//   },
6. https://practiceapi.devmountain.com/api/posts
7. https://practiceapi.devmountain.com/api/posts
8.  access-control-allow-origin: * 
 alt-svc: h3=":443"; ma=86400,h3-29=":443"; ma=86400,h3-28=":443"; ma=86400,h3-27=":443"; ma=86400 
 cache-control: no-cache 
 cf-cache-status: DYNAMIC 
 cf-ray: 6aa05b845c9e6fb3-IAD 
 content-encoding: gzip 
 content-length: 1417 
 content-type: application/json; charset=utf-8 
 9. Request was missing req.query.id or req.body.text
 10. curl -X 'GET' \
  'https://practiceapi.devmountain.com/api/posts' \
  -H 'accept: application/json'