/*
fetch("https://www.breakingbadapi.com/api/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    
})
*/

console.log("test")
async function getInfo(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    console.log (data)
    console.log (data.message)
    
    document.querySelector("#content img").src = data.message
    document.querySelector("#content h1").innerHTML = data.status

}

getInfo();



