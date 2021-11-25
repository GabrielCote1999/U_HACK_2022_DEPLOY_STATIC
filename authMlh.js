var result = null,
tmp = [];
location.search
  .substr(1)
  .split("&")
  .forEach(function (item) {
    tmp = item.split("=");
    if (tmp[0] === 'code') result = decodeURIComponent(tmp[1]);
  });
console.log(result);
console.log("testtt")
//exISOQBW-UbGOTIkAhR5iyNCDoMv71x8rrvAIdlN1TQ
if (result != null) {
  fetch("https://my.mlh.io/oauth/token", {
    method: 'POST',
    body: JSON.stringify({
      'client_id': '2fopFxTgj7LCwF23WN5ORpZjTOYvszb63pG0ILfjCv4',
      'client_secret': 'ejSnQ0VygGznYvkqk8JYDl0c1J3LIIa4FLEmwnoHUb0',
      'code': result,
      'redirect_uri': 'https://uqode.ca/',
      'grant_type': 'authorization_code'
    })
  }).then(function(response){
    console.log(response)
  })
}