var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

btnTranslate.addEventListener("click", clickEventHandler())

function clickEventHandler(){
    console.log("I was clicked")
    console.log("input", txtInput.value)
}
