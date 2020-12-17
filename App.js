var atextarea=document.querySelector("#textarea");
var btncopy = document.querySelector("#copy");
var outputDiv=document.querySelector(".output");

btncopy.addEventListener("click", same);
function same(){
     var inputText=atextarea.value;
     outputDiv.innerText=inputText;
}