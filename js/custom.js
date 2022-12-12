
const dfMessenger = document.querySelector('df-messenger');

//get timestamp:
const milliseconds = new Date();
const dateObject = new Date(milliseconds);
const humanDateFormat = dateObject.toLocaleString().split(", ");
//console.log(humanDateFormat)
//console.log(dfMessenger)
var last_question = '';
var country = 'peru';

function getmalaria() {
document.getElementById("myImg").src = "graphics/peru/peru_malaria.png";
document.getElementById("imagelink").href = "graphics/peru/peru_malaria.png";
//document.getElementById("myImg").src = "graphics/maps/malaria_compact.png";
//document.getElementById("imagelink").href = "graphics/maps/malaria.png";
}

function getmalariatable() {
    if (country == "ghana") {
    document.getElementById("myImg").src = "graphics/malaria_svg/malaria_high_compact.svg";
    document.getElementById("imagelink").href = "graphics/malaria_svg/malaria_high.svg";
    } else {
    document.getElementById("myImg").src = "graphics/malaria_svg/malaria_minor_compact.svg";
    document.getElementById("imagelink").href = "graphics/malaria_svg/malaria_minor.svg";
    }

}

function getyellowfever() {
document.getElementById("myImg").src = "graphics/peru/peru_gelbfieber.png";
document.getElementById("imagelink").href = "graphics/peru/peru_gelbfieber.png";
//document.getElementById("myImg").src = "graphics/maps/yellowfever_compact.png";
//document.getElementById("imagelink").href = "graphics/maps/yellowfever.png";
}

function getvaccination() {
    document.getElementById("myImg").src = "graphics/svg/"+country+"_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/"+country+".svg";
}


// Listener on User-Inputs:
dfMessenger.addEventListener('df-request-sent', function (event) {

        var req = event.detail.requestBody.queryInput;
        console.log(req);
        if (req.hasOwnProperty('text')) {
            if (req.text.hasOwnProperty('text')) {
                console.log(req.text.text);
                last_question = req.text.text;
                }
        }

});

// Listener on Dialogflow-Outputs:
dfMessenger.addEventListener('df-response-received', function (event) {

        var n = event.detail.response.queryResult.parameters;
        var m = event.detail.response.queryResult.fulfillmentMessages[0]
        var f = event.detail.response.queryResult.fulfillmentText;
        console.log(event.detail.response.queryResult);
        console.log(event.detail.response.queryResult.intent.displayName);
        var infoCard = 0;
        var text = 0;

        var img_el = document.getElementById("myImg");
        var img_link = document.getElementById("imagelink");

        if (event.detail.response.queryResult.intent.displayName == "2_Malaria"){
            document.getElementById('vaccination_button').style.visibility = 'visible';
            document.getElementById('malaria_button').style.visibility = 'visible';
            document.getElementById('malaria_table_button').style.visibility = 'visible';
            document.getElementById('yellowfever_button').style.visibility = 'visible';
            document.getElementById('description').style.visibility = 'visible';
            }

        if (event.detail.response.queryResult.intent.displayName == "4a_Vaccination-Yes" || event.detail.response.queryResult.intent.displayName == "4b_Vaccination-No"){
        getvaccination();
        }


        //get answers for logging and knowledge transition
        if (n.hasOwnProperty('travel_expert')){
        appendContent('Reiseerfahrung vorhanden', n.travel_expert)}

        if (n.hasOwnProperty('malaria_knowledge')){
        appendContent('Malaria-Prophylaxewissen vorhanden', n.malaria_knowledge)}

        if (event.detail.response.queryResult.intent.displayName == "3a_lowlands"){
        appendContent('Reiseroute', 'peruanisches Tiefland - Amazonasdelta');
        getyellowfever();
        }
        if (event.detail.response.queryResult.intent.displayName == "3b_Coast"){
        appendContent('Reiseroute', 'Küstengebiete');
        getyellowfever();
        }
        if (event.detail.response.queryResult.intent.displayName == "3c_Highlands-Citys"){
        appendContent('Reiseroute', 'Hochland & Touristikgebiete');
        getyellowfever();
        }
        if (event.detail.response.queryResult.intent.displayName == "3d_Basics(default)"){
        appendContent('Reiseroute', 'gesamtes Land');
        getyellowfever();
        }

        if (n.hasOwnProperty('vaccination_knowledge')){
        appendContent('Impfwissen vorhanden', n.vaccination_knowledge)}

        if (n.hasOwnProperty('hygiene_knowledge')){
        appendContent('Hygienewissen vorhanden', n.hygiene_knowledge)}


        if (m.hasOwnProperty('payload')){
        //this is a info-card alias CustomPayload
        infoCard = m.payload.richContent[0][0].title;
        //console.log(infoCard)
        } else if (m.hasOwnProperty('text')) {
        //this is a simple text message
        text = m.text.text[0];
        check_response(text);
        //console.log(text)
        }
        //console.log(event.detail.response.queryResult)

        if ( infoCard == 'Achtung! - hohes Malaria Risiko' || infoCard == 'geringes-hohes Malaria Risiko') {
        img_el.src = 'graphics/maps/malaria_compact.png';
        img_link.href = "graphics/maps/malaria.png";
        document.getElementById('description').style.visibility = 'visible';
        }

        if (infoCard == 'geringes Malaria Risiko') {
        img_el.src = 'graphics/maps/malaria_compact.png';
        img_link.href = "graphics/maps/malaria.png";
        document.getElementById('description').style.visibility = 'visible';
        }

        if ( infoCard == 'Übertragungsgebiet für Gelbfieber' || infoCard == 'Gelbfieberübertragung im Tiefland möglich') {
        img_el.src = 'graphics/maps/yellowfever_compact.png';
        img_link.href = "graphics/maps/yellowfever.png";
        }

        if ( f == "Alles klar. Zu welchem Land darf ich Sie stattdessen informieren?" || f == "Ok. Welches Land intressiert Sie?" || f == "Ok. Welches Land möchten Sie stattdessen wählen?"){
        img_el.src = 'graphics/maps_by_country/map_template.png';
        img_link.href = "graphics/maps_by_country/map_template.png";
        document.getElementById('malaria_button').style.visibility = 'hidden';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('malaria_table_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'hidden';
        document.getElementById('description').style.visibility = 'hidden';
        }

        if (text == "Okay, kommen wir zum 1. Thema: Malaria Risiko"){
        getmalariatable()
        }

        if ( text == "Im Schaubild auf Ihrem Bildschirm haben ich zum Abgleich eine Übersicht relevanter Impfungen zusammengefasst." || infoCard == "empfohlene Impfungen:"){
        getvaccination()
        }

        function check_response(text) {
            if ( text == "Bitte Fragen Sie das den Arzt."){
                appendQuestion();
            }
        }

        }); //end of loop of the listener

//function to log client input
var s1 = "";
var s2 = "";

function appendContent(parameter, new_text) {
        s1 = document.getElementById('logs').value;
        document.getElementById('logs').value = s1.concat( "\n",parameter+": "+new_text);
}

function appendQuestion() {
        s2 = document.getElementById('textArea').value;
        if (s2 == ""){
        document.getElementById('textArea').value = s2.concat( "unbeantwortete Nutzereingabe: "+last_question);
        }else {
        document.getElementById('textArea').value = s2.concat( "\nunbeantwortete Nutzereingabe: "+last_question);
        }
}

function startContent(new_text) {
        var session = dfMessenger.getAttribute("session-id").split("-")[1]
        document.getElementById('logs').value = "Session-ID: "+session+"\nLand: "+new_text;
}