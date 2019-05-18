var uri = "https://cors-anywhere.herokuapp.com/https://systembevakningsagenten.se/api/json/1.0/newProducts.json";
// deklarerar variabeln doc hämtar diven systembolaget
const doc = document.getElementById('systembolaget');

fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{

    // printar en header (h1) och sedan printar jag en (h2) som skriver ut när dessa nyheter börjar säljas
        doc.innerHTML += `<h1>Nyheter på Systembolaget!</h21>`;
       
        doc.innerHTML += `<h2>Börjar säljas: ${data.first_sale}</h2><br>`;
    // går in i variabeln items som finns i json filen och deklarar den till en egen items variabel.
        var items = data.items;

    // en lite snyggare version av att printa alla array nummer i en json fil. 
    // för varje (i som i detta fall är alla nummer i arrayen) i items som är data.items så ska den printa allt de info nedan:
        for (var i in items)
        {
            doc.innerHTML += `<b>SytemID:</b> ${items[i].sysid}<br>`;
            doc.innerHTML += `<b>Namn:</b> ${items[i].name}<br>`;
            doc.innerHTML += `<b>Alkoholhalt:</b> ${items[i].alcohol_vol}%<br>`;
            doc.innerHTML += `<b>Pris:</b> ${items[i].price}:-<br>`;
            doc.innerHTML += `<b>Producerat i:</b> ${items[i].producer}<br>`;
            doc.innerHTML += `<b>Från:</b> ${items[i].country}<br><br>`;
        }
   }) 


