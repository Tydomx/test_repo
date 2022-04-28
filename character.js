var car = "Access-Control-Allow-Origin: *";

var requestOptions = {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}
// grabbing hero name and fetching api
function fetching() {
    var publicKey = '70157e5fd5990a919a767f142118c129';

    //var hash = hashing(ts, publicKey, privateKey);
    var charId = "1009368";
   //var url = `https://gateway.marvel.com/v1/public/characters${charId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
   var url = `https://gateway.marvel.com/v1/public/characters${charId}&apikey=${publicKey}`; 
   fetch(url, requestOptions)
   .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
    });
}

fetching();

// function hashing(ts, publicKey, privateKey) {
//     var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()
//     return hash;
// }