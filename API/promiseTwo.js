fetch("https://randomuser.me/api")
.then(function(resolve) {
    return resolve.json();
})
.then((data) => {
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})