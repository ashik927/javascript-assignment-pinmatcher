function inputNumber( id1,id2 ){
    const numberzero = document.getElementById(id1);
    numberzero.addEventListener("click",function(){
    let getnumber = document.getElementById(id1).innerText;
    let screennumber = document.getElementById(id2).value;
    let add = screennumber + getnumber;
    document.getElementById(id2).value = add;
    })
}
    inputNumber("zero","screen");
    inputNumber("one","screen");
    inputNumber("two","screen");
    inputNumber("three","screen");
    inputNumber("four","screen");
    inputNumber("five","screen");
    inputNumber("six","screen");
    inputNumber("seven","screen");
    inputNumber("eight","screen");
    inputNumber("nine","screen");

    const clear = document.getElementById( "clear" );
    clear.addEventListener( "click",function(){
     document.getElementById("screen").value="";
     document.getElementById("success").style.display="none";
    document.getElementById("fail").style.display="none";
})
let backspace = document.getElementById("backspace");
backspace.addEventListener("click",function(){
     let getvalue = document.getElementById("screen").value;
     document.getElementById("screen").value = getvalue.substring( 0, getvalue.length - 1 );    
})

const generatepin=document.getElementById("generatepin");
generatepin.addEventListener("click",function(){
    function randomNumber(min, max) {  
        return Math.floor(Math.random() * (max - min) + min); 
    }  
    document.getElementById("generatescreen").value = randomNumber(1000, 9999);  
    document.getElementById("success").style.display = "none";
    document.getElementById("fail").style.display = "none";
    document.getElementById("screen").value = "";
})

const submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    const generatescreen = document.getElementById("generatescreen").value;
    let screen = document.getElementById("screen").value;
    let result = screen.length;
    
    if(screen==""){
        alert("Invalid Input");
    }
    else if(result <= 3 || result >= 5){
        alert("Please Input Four Digit");
    }
    else{
    if(generatescreen == screen){
       
        document.getElementById("success").style.display = "block";
    }
    else{
        let left = parseFloat(document.getElementById("left").innerText);
        let leftvalue = left-1;
        document.getElementById("left").innerText=leftvalue;
        if (document.getElementById("left").innerText==0) {
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.backgroundColor ="red";
        }
        document.getElementById("fail").style.display = "block";
    }
}
})