var uri = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=b0c3cced0bba45c58222712c148b6cf2&siteid=9633&timewindow=42";

const boi = document.getElementById('sl');

// vet inte riktigt vad jag ska förklara här den är ganska självförklarande men jag hämtar iaf diven sl och deklarera ett tram objekt som har trams i sig som är ett objekt i json filen, printar lite variabler från data.responstime.trams
fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
        let tram = data.ResponseData.Trams;
        boi.innerHTML += `<h1>TÄBY C TÅGINFO</h1>`;
        return tram.map(function(tramobj)
    {
        
        boi.innerHTML += `${tramobj.LineNumber} mot `;
        boi.innerHTML += ` ${tramobj.Destination} kommer om `;
        boi.innerHTML += `${tramobj.DisplayTime}`;
        
    if(tramobj.Deviations != null)
    {
    // Om deviation inte är null så gör den detta:
    // här använder jag mig utav Deviations, eftersom att efter varje tåginfo så har den en deviation som gör det lätt att använda den för att radbryta efter varje tåg och dess info. Foreach funktion är lite som en for loop fast för varje "deviation" så ska den göra i detta fall en radbrytning
        tramobj.Deviations.forEach(foo=>
        {
            boi.innerHTML += `<br>`;
        })
    }
    else{boi.innerHTML += `<br>`}
})    
})