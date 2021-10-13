
const dfMessenger = document.querySelector('df-messenger');

//get timestamp:
const milliseconds = new Date()
const dateObject = new Date(milliseconds)
const humanDateFormat = dateObject.toLocaleString().split(", ")
console.log(humanDateFormat)
console.log(dfMessenger)

function getmalaria() {
document.getElementById("myImg").src = "graphics/maps/malaria_compact.png";
document.getElementById("imagelink").href = "graphics/maps/malaria.png";
}

function getyellowfever() {
document.getElementById("myImg").src = "graphics/maps/yellowfever_compact.png";
document.getElementById("imagelink").href = "graphics/maps/yellowfever.png";
}

function getvaccination() {

    if (country == 'bolivien'){
    document.getElementById("myImg").src = "graphics/svg/bolivien_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/bolivien.svg";
    }
    if (country == 'ecuador'){
    document.getElementById("myImg").src = "graphics/svg/ecuador_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/ecuador.svg";
    }
    if (country == 'ghana'){
    document.getElementById("myImg").src = "graphics/svg/ghana_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/ghana.svg";
    }
    if (country == 'namibia'){
    document.getElementById("myImg").src = "graphics/svg/namibia_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/namibia.svg";
    }
    if (country == 'peru'){
    document.getElementById("myImg").src = "graphics/svg/peru_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/peru.svg";
    }
    if (country == 'suedafrika'){
    document.getElementById("myImg").src = "graphics/svg/suedafrika_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/suedafrika.svg";
    }
    if (country == 'tansania'){
    document.getElementById("myImg").src = "graphics/svg/tansania_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/tansania.svg";
    }
    if (country == 'thailand'){
    document.getElementById("myImg").src = "graphics/svg/thailand_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/thailand.svg";
    }
    if (country == 'vietnam'){
    document.getElementById("myImg").src = "graphics/svg/vietnam_kompakt.svg";
    document.getElementById("imagelink").href = "graphics/svg/vietnam.svg";
    }

    }


// Listener on User-Inputs:
dfMessenger.addEventListener('df-request-sent', function (event) {
});

// Listener on Dialogflow-Outputs:
dfMessenger.addEventListener('df-response-received', function (event) {

        var n = event.detail.response.queryResult.parameters;
        var m = event.detail.response.queryResult.fulfillmentMessages[0]
        var f = event.detail.response.queryResult.fulfillmentText;
        var infoCard = 0;
        var text = 0;

        if (m.hasOwnProperty('payload')){
        //console.log('this is a info-card alias CustomPayload')
        infoCard = m.payload.richContent[0][0].title;
        console.log(infoCard)
        } else if (m.hasOwnProperty('text')) {
        //console.log('this is a simple text message')
        text = m.text.text[0]
        console.log(text)
        }

        var img_el = document.getElementById("myImg");
        var img_link = document.getElementById("imagelink");

        //display country-specific content:
        if ( n.Country_Mr_Yt == 'Bolivien') {
        country = 'bolivien';
        img_el.src = 'graphics/maps_by_country/bolivien.png';
        img_link.href = 'graphics/maps_by_country/bolivien.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'visible';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mr_Yt == 'Ecuador') {
        country = 'ecuador';
        img_el.src = 'graphics/maps_by_country/ecuador.png';
        img_link.href = 'graphics/maps_by_country/ecuador.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'visible';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mh_Yt == 'Ghana') {
        country = 'ghana';
        img_el.src = 'graphics/maps_by_country/ghana.png';
        img_link.href = 'graphics/maps_by_country/ghana.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'visible';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mr_Ynt == 'Namibia') {
        country = 'namibia';
        img_el.src = 'graphics/maps_by_country/namibia.png';
        img_link.href = 'graphics/maps_by_country/namibia.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mr_Yt == 'Peru') {
        country = 'peru';
        img_el.src = 'graphics/maps_by_country/peru.png';
        img_link.href = 'graphics/maps_by_country/peru.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'visible';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mr_Ynt == 'Südafrika' ) {
        country = 'suedafrika';
        img_el.src = 'graphics/maps_by_country/suedafrika.png';
        img_link.href = 'graphics/maps_by_country/suedafrika.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Mr_Ynt == 'Tansania') {
        country = 'tansania';
        img_el.src = 'graphics/maps_by_country/tansania.png';
        img_link.href = 'graphics/maps_by_country/tansania.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Ml_Ynt == 'Thailand') {
        country = 'thailand';
        img_el.src = 'graphics/maps_by_country/thailand.png';
        img_link.href = 'graphics/maps_by_country/thailand.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }
        if ( n.Country_Ml_Ynt == 'Vietnam') {
        country = 'vietnam';
        img_el.src = 'graphics/maps_by_country/vietnam.png';
        img_link.href = 'graphics/maps_by_country/vietnam.png';
        document.getElementById('malaria_button').style.visibility = 'visible';
        document.getElementById('yellowfever_button').style.visibility = 'hidden';
        document.getElementById('vaccination_button').style.visibility = 'visible';
        document.getElementById('description').style.visibility = 'visible';
        }

        if ( infoCard == 'hohes Malaria Risiko' || infoCard == 'geringes-hohes Malaria Risiko') {
        img_el.src = 'graphics/maps/malaria_compact.png';
        img_link.href = "graphics/maps/malaria.png";
        }

        if (infoCard == 'geringes Malaria Risiko') {
        img_el.src = 'graphics/maps/malaria_compact.png';
        img_link.href = "graphics/maps/malaria.png";
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
        document.getElementById('vaccination_button').style.visibility = 'hidden';
        document.getElementById('description').style.visibility = 'hidden';
        }

        if ( text == "Im Schaubild auf Ihrem Bildschirm haben ich zum Abgleich eine Übersicht zusammengestellt." || infoCard == "empfohlene Impfungen:"){
        getvaccination()
        }

        }); //Schleifenende des Listeners

//function to document client input
var s1 = "";
function appendContent(new_text) {
        s1 = document.getElementById('textArea').value;
        document.getElementById('textArea').value = s1.concat( "\n", new_text);
        console.log(s1);
    }