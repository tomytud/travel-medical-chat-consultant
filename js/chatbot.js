
const agent = document.querySelector('df-messenger');
var check = 0;
//manipulate chatbot input hint:
agent.addEventListener('df-response-received', function (event) {



    if (event.detail.response.queryResult.action = "input.welcome" && check == 0) {
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input");
        inputHint.placeholder ="Antwort eingeben";

        //add time until show message
        //var l = 0;
        //var save = 0;
        //l = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector("#messageList").childNodes.length-1;
        //console.log(l)
        //setTimeout(function(){save = agent.shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-message-list").shadowRoot.querySelector("#messageList").children.item(l).innerText}, 5)
        //setTimeout(function(){agent.shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-message-list").shadowRoot.querySelector("#messageList").children.item(l).innerText  = "..."}, 10)
        //setTimeout(function(){agent.shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-message-list").shadowRoot.querySelector("#messageList").children.item(l).innerText  = save}, 3000)
        }

    var m = event.detail.response.queryResult.fulfillmentMessages[0]
    var text = 0;

    if (m.hasOwnProperty('text')) {
        text = m.text.text[0];
        }

    if ( text == "Vielen Dank für die Kooperation. Nachfolgend finden Sie Ihre Checkliste zu relevanter Themen:"){
        inputHint = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-messenger-user-input").shadowRoot.querySelector(".input-box-wrapper > input");
        inputHint.placeholder ="Frage eingeben";
        check = 1;
        }

    //how to manipulate Text outcome :)
    //if ( text == "Zu welchem Reiseland möchten Sie informiert werden?"){
    //    console.log(text)
    //    agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector(".message").style.visibility = 'hidden';
    //    agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector(".message").innerText = "**This text is bold**";
    //    agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector(".message").style.visibility = 'visible';
        //last-chat-child
    //    var l = agent.shadowRoot.querySelector("df-messenger-chat").shadowRoot.querySelector("df-message-list").shadowRoot.querySelector("#messageList").childNodes.length-1
    //    console.log(l)
        //manipulate last chat-element
    //    setTimeout(function(){agent.shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-message-list").shadowRoot.querySelector("#messageList").children.item(l).innerText  = "..."}, 10)
    //    setTimeout(function(){agent.shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-message-list").shadowRoot.querySelector("#messageList").children.item(l).innerText  = "OK, dann legen wir mal los."}, 3000)
    //};
    });



//to set image here:
//document.querySelector("body > df-messenger").shadowRoot.querySelector("div > df-messenger-chat").shadowRoot.querySelector("div > df-messenger-titlebar").shadowRoot.querySelector("#minimizeIcon")
