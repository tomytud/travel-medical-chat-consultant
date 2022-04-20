
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
document.getElementById("myImg").src = "graphics/maps/malaria_compact.png";
document.getElementById("imagelink").href = "graphics/maps/malaria.png";
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
document.getElementById("myImg").src = "graphics/maps/yellowfever_compact.png";
document.getElementById("imagelink").href = "graphics/maps/yellowfever.png";
}

function getvaccination() {
    document.getElementById("myImg").src = "graphics/svg/"+country+"_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/"+country+".svg";
}


// Listener on User-Inputs:
dfMessenger.addEventListener('df-request-sent', function (event) {

        var req = event.detail.requestBody.queryInput;
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
        var infoCard = 0;
        var text = 0;

        var img_el = document.getElementById("myImg");
        var img_link = document.getElementById("imagelink");


        if (n.hasOwnProperty('Country_Mr_Yt') || n.hasOwnProperty('Country_Mh_Yt')){ // Bolivien, Ecudor, Peru || Ghana
            document.getElementById('vaccination_button').style.visibility = 'visible';
            document.getElementById('malaria_button').style.visibility = 'visible';
            document.getElementById('malaria_table_button').style.visibility = 'visible';
            document.getElementById('yellowfever_button').style.visibility = 'visible';

            switch (true) {
            case n.hasOwnProperty('Country_Mh_Yt'):
                startContent(n.Country_Mh_Yt)
                country = n.Country_Mh_Yt.toLowerCase()
                break;
            case n.hasOwnProperty('Country_Mr_Yt'):
                startContent(n.Country_Mr_Yt)
                country = n.Country_Mr_Yt.toLowerCase()
                break;
            }

            img_el.src = 'graphics/maps_by_country/'+country+'.png';
            img_link.href = 'graphics/maps_by_country/'+country+'.png';
        }

        if (n.hasOwnProperty('Country_Mr_Ynt') || n.hasOwnProperty('Country_Ml_Ynt')){ // Namibia, Südafrika, Tansania || Thailand, Vietnam
            document.getElementById('vaccination_button').style.visibility = 'visible';
            document.getElementById('malaria_button').style.visibility = 'visible';
            document.getElementById('malaria_table_button').style.visibility = 'visible';
            document.getElementById('yellowfever_button').style.visibility = 'hidden';

            switch (true) {
            case n.hasOwnProperty('Country_Mr_Ynt'):
                startContent(n.Country_Mr_Ynt)
                country = n.Country_Mr_Ynt.toLowerCase()
                if (country == 'südafrika') {
                    country = 'suedafrika'
                }
                break;
            case n.hasOwnProperty('Country_Ml_Ynt'):
                startContent(n.Country_Ml_Ynt)
                country = n.Country_Ml_Ynt.toLowerCase()
                break;
            }

            img_el.src = 'graphics/maps_by_country/'+country+'.png';
            img_link.href = 'graphics/maps_by_country/'+country+'.png';
        }

        //get answers for logging and knowledge transition
        if (n.hasOwnProperty('travel_expert')){
        appendContent('Reiseerfahrung vorhanden', n.travel_expert)}

        if (n.hasOwnProperty('malaria_knowledge')){
        appendContent('Malaria-Prophylaxewissen vorhanden', n.malaria_knowledge)}

        if (n.hasOwnProperty('malaria_advice')){
        appendContent('benötigte Malariaberatung', n.malaria_advice)}

        if (n.hasOwnProperty('vaccination_knowledge')){
        appendContent('Impfwissen vorhanden', n.vaccination_knowledge)}

        if (n.hasOwnProperty('hygiene_knowledge')){
        appendContent('Hygienewissen vorhanden', n.hygiene_knowledge)}

        if (n.hasOwnProperty('adventure_plan')){
        appendContent('Erlebnisreise geplant', n.adventure_plan)}


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

        if ( text == "In der Übersicht auf Ihrem Bildschirm sind die wichtigsten Maßnahmen zusammengefasst. Der beratende Arzt wird mit Ihnen alle relevanten Schutzmaßnahmen für Ihre Reise besprechen." || text == "In der Infografik sind die wichtigsten Maßnahmen zusammengefasst. Der beratende Arzt wird mit Ihnen alle relevanten Schutzmaßnahmen für Ihre Reise besprechen." || f == "Der behandelnde Arzt wird Ihnen empfohlene Schutzmaßnahmen für Ihre individuelle Reise aufzeigen. Sind Sie bereits vertraut mit möglichen Malariaprophylaxe?" || f == "Sind Sie vertraut mit möglichen Schutzmaßnahmen (siehe Schaubild)?" || text == "In Ghana wird sowohl eine Expositionsprophylaxe (Mückenstiche vermeiden) als auch eine Chemoprophylaxe (medikamentös) empfohlen." || text == "Okay, kommen wir zum 1. Thema: Malaria Risiko"){
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