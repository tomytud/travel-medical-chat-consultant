
const agent = document.querySelector('df-messenger');

//manipulate chatbot input hint:
agent.addEventListener('df-response-received', function (event) {

    if (event.detail.response.queryResult.action = "input.welcome") {
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input")
        inputHint.placeholder ="Antwort eingeben"
        }

    var m = event.detail.response.queryResult.fulfillmentMessages[0]
    var text = 0;

    if (m.hasOwnProperty('text')) {
        text = m.text.text[0]
        }

    if ( text == "Vielen Dank für die Kooperation. Nachfolgend finden Sie Ihre Checkliste zu relevanter Themen:"){
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input")
        inputHint.placeholder ="Frage eingeben"
        }

    });


