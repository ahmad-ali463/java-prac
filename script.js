document.getElementById("gg").onclick=function(){
    let age = +prompt("enter your age")
    
    let weight = prompt("enter your weight")
   
    if(age > 18 && weight <=70){
        alert("you are elder")
        console.log("you are elder")
    }else{
        alert("you  are small")
        console.log("you are small")
    }
}

document.getElementById("ggg").onclick = function(){
    let userName = prompt("your username")
    let password = prompt("your pass")

    if(userName === "Ahmad" && password === "041"){
        console.log("you are loggined")
    }
    else{
        console.log("your username or password is  incorrect")
    }
}
    
   
 
document.getElementById("Clear").onclick = function(){
    document.getElementById("ahmad").innerHTML = "";
}