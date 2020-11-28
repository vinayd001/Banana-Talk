var txt_input = document.querySelector("#txt-input");
var btn_translate = document.querySelector("#btn-translate");
var output_div = document.querySelector("#output");

var server_URL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

btn_translate.addEventListener("click", function onClickTranslate() {

    // taking input
    var input_txt = txt_input.value
    
    // alert(input_txt);
    
    var translated_URL = server_URL + "?" + "text=" + input_txt
    
    // alert(translated_URL);
    
    // calling server for processing
    fetch(translated_URL)
        .then(response => response.json())
        .then(json => {
            var translated_txt = json.contents.translated;
            output_div.innerText - translated_txt;
            })
        .catch(errorHandler)

})