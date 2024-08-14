// nested function

function one(){
    const userName = "sameer"

    function two(){
        const web = "website"
        console.log(userName)
    }
//    console.log(web)

    two()
}

one()


var fun = function(num){
    return num + 1
}

fun(5)