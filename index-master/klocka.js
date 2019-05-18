var uri = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json";
const documin = document.getElementById('klocka');


// Fetchar/hämtar variablen uri
fetch(uri)
.then((resp)=>resp.json())
.then(function(data)
{
    //hoppar in i data objektet och deklarerar time 
        let time = data;

    // här gör jag en if sats så om de är till exempel day of week 1 så skrivs det ut att det är måndag i det fallet, skriver även ut day of week and vilken vecka det är
         if (time.day_of_week == "1"){
            documin.innerHTML+= `Idag är det dag  (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Måndag!<br><br>`
        } if (time.day_of_week == "2"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Tisdag!<br><br>`
        } if (time.day_of_week == "3"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Onsdag!<br><br>`
        } if (time.day_of_week == "4"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Torsdag!<br><br>`
        } if (time.day_of_week == "5"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en FREDAG!<br><br>`
        } if (time.day_of_week == "6"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Lördag!<br><br>`
        } if (time.day_of_week == "0"){
            documin.innerHTML+= `Idag är det dag (${time.day_of_week}) i vecka (${time.week_number}) vilket är en Söndag!<br><br>`
        }

        /*
        setTimeout(function() {
            location.reload();
          }, 1000)
*/

    // Här är klockan och datum, printar hur mång dagar som gått på året och även hur många de e kvar tills nyår för skojs skull
    // Slice funktionen fick jag lära mig genom att försöka få så att den printar bara en viss del av en string array
    // DVS att ifall du skriver var string = "123" och printar string.slice(1,2) så kommer den bara printa 2,3. Liknande till substring.
documin.innerHTML += `I ${time.timezone} så är klockan: <h1>${time.datetime.slice(11,19)}</h1><br>`;
documin.innerHTML += `<b>Datum:</b> ${time.datetime.slice(0,10)} <br>`;
documin.innerHTML += `<b>Dagar in på året:</b> ${time.day_of_year}<br>`;
documin.innerHTML += `<b>Dagar kvar tills NYÅR!:</b> ${365 - time.day_of_year}<br>`;
})    
