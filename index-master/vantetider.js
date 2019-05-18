// deklarerar två olika apier, i detta fall, två olika sjukvårdsärenden.
var uri = "https://cors-anywhere.herokuapp.com/https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/35101";
var url = "https://cors-anywhere.herokuapp.com/https://www.vantetider.se/api/Ajax/GetWaitingAndCapacityByService/35102";

const dous = document.getElementById('vantetider');


fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
    //hoppar in i 3 olika arraynummer eftersom att denna json fil var uppdelad i arrays istället för objekt/variablar
    //  varje array representerar en annan region.
    
        let info = data.aaData[1];
        let info1 = data.aaData[2];
        let info2 = data.aaData[3];

        dous.innerHTML += `<h1>VÄNTETIDER SJUKVÅRDEN</h1>`;
        dous.innerHTML += `<h2>Bröstförminskning</h2>`;
       
        dous.innerHTML += `<b>Region:</b> ${info.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info.Updated}<br><br>`;
       
        dous.innerHTML += `<b>Region:</b> ${info1.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info1.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info1.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info1.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info1.Updated}<br><br>`;

        dous.innerHTML += `<b>Region:</b> ${info2.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info2.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info2.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info2.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info2.Updated}<br>`;  
})    

// Hämtar in den andra hemsidan "URL" / fetchar den


fetch(url)
.then((resp)=>resp.json())

.then(function(data)
{
        let info = data.aaData[1];
        let info1 = data.aaData[2];
        let info2 = data.aaData[3];
        dous.innerHTML += `<h2>Borttag av livmoder</h2>`;
       
        dous.innerHTML += `<b>Region:</b> ${info.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info.Updated}<br><br>`;
       
        dous.innerHTML += `<b>Region:</b> ${info1.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info1.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info1.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info1.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info1.Updated}<br><br>`;

        dous.innerHTML += `<b>Region:</b> ${info2.regionName}<br>`;
        dous.innerHTML += `<b>Plats:</b> ${info2.unitName}<br>`;
        dous.innerHTML += `<b>Väntetid:</b> ${info2.Waiting}<br>`;
        dous.innerHTML += `<b>Kommentar:</b> ${info2.Comment}<br>`;
        dous.innerHTML += `<b>Uppdaterad:</b> ${info2.Updated}<br>`;  
})  