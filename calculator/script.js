let outputscreen= document.getElementById("outputscreen")
function display(num){
    outputscreen.value +=num 
}
function calculate(){
try{
    outputscreen.value = eval(outputscreen.value);

}
catch(error){
    alert("Invalid")
}
}
function clearr(){
    outputscreen.value="";
    // document.getElementById('outputscreen').value= "";
}
function delet(){
    outputscreen.value = outputscreen.value
    .slice(0,-1)
}