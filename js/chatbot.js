
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
        text = m.text.text[0];
        }

    if ( text == "Vielen Dank für die Kooperation. Nachfolgend finden Sie Ihre Checkliste zu relevanter Themen:"){
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input")
        inputHint.placeholder ="Frage eingeben"
        }

    if ( text == "Ich bin ein Reisemedizin-Assistent und werde Sie in den nächsten 2 Minuten auf das Arztgespräch vorbereiten und länderspezifische Themen zu Fernreisen vortellen."){
        console.log('Test')
        //document.querySelector("df-messenger").shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector(".message").innerText = 'So müsste eigentlich der Text manipuliert werden können.'
        }

    });


