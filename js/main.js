async function getAdvice(){
    let advice = await fetch('https://api.adviceslip.com/advice')
    populateInformation(advice)
}
getAdvice();

const adviceID = document.querySelector("#advice_id")
const adviceTEXT = document.querySelector("#advice_text")

function populateInformation(info){
    info.json().then(response =>{
        adviceID.innerHTML = 'Advice #' + response.slip["id"]
        adviceTEXT.innerHTML = '"' + response.slip["advice"] + '"'
    })
}