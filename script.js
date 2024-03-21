document.getElementById("gg").onclick=function(){
    let age = +prompt("enter your age")
    
    let weight = 70
   
    if(age > 18){
        alert("you are elder")
        console.log("you are elder")
    }else{
        alert("you  are small")
        console.log("you are small")
    }
}