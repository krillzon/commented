// deklarerar in tre variabler, i detta fall tre streaers api:s
// denna api var lite klurig med tanke på att jag sa vid presentationen att ifall streamen inte är igång så försvinner väldigt många utav variablerna/objekten i json filen vilket gör det svårt att anropa något som inte finns, men tydligen så fanns streams variabeln så den går att referera till genom att sätta den till if != null
var uri = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/sodapoppin?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";
var url = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/towelliee?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";
var urc = "https://cors-anywhere.herokuapp.com/https://api.twitch.tv/kraken/streams/scrubnoob?client_id=bes85lrqw0ktigy2rjfb174d4oc2hu";
const krippa = document.getElementById('twitch');

// hämtar första hemsidan "uri"
fetch(uri)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    //printar en header som säger twitch online live streams
    krippa.innerHTML += `<h1>TWITCH.TV ONLINE LIVE STREAMS:</h1><br>`;
    // om streamen är igång dvs inte null så ska den printa allt nedan:
    if (data.stream != "null"){
            // hoppar in i channel objektet
        let channelinfo = data.stream.channel; 
        krippa.innerHTML += ` CHANNEL: Sodapoppin. <br>`;
        krippa.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        krippa.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
        krippa.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
        krippa.innerHTML += ` Channelinfo:<br>`
        krippa.innerHTML += ` Bio: ${channelinfo.status}<br>`;
        krippa.innerHTML += ` Language: ${channelinfo.language}<br>`;
        krippa.innerHTML += ` Total views: ${channelinfo.views}<br>`;
        krippa.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
        krippa.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}<br>`;
        // deklarerar en varibel a som har en link i sig och även en braking variabel som kan användas för att radbryta genom att bara skriva det som står på rad 41
        var a = document.createElement('a');
        var braking = document.createElement('br');
        var linkText = document.createTextNode("Enter Sodapoppins channel   ");
        a.appendChild(linkText);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/sodapoppin";
        document.body.appendChild(a);
        document.body.appendChild(braking); 
    }
})
// sedan här gör jag exakt likadant bara för två andra apier/streamers 
const kripps = document.getElementById('twitch');

fetch(url)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    
    if (data.stream != "null"){

        let channelinfo = data.stream.channel;

        krippa.innerHTML += ` <br>`;
        krippa.innerHTML += ` <strong>CHANNEL:</strong> Towelliee. <br>`;
        kripps.innerHTML += ` ${channelinfo.display_name} <strong>is playing:</strong> ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        kripps.innerHTML += `<strong>Started the stream ${info.created_at.slice(0,10)} Time</strong>: ${info.created_at.slice(11,19)}<br>`;
        kripps.innerHTML += `<strong>Average fps:</strong> ${info.average_fps} with "${info.delay}" delay<br><br>`;
        kripps.innerHTML += ` <strong>Channelinfo:</strong><br>`
        kripps.innerHTML += ` <strong>Bio:</strong> ${channelinfo.status}<br>`;
        kripps.innerHTML += ` <strong>Language:</strong> ${channelinfo.language}<br>`;
        kripps.innerHTML += ` <strong>Total views:</strong> ${channelinfo.views}<br>`;
        kripps.innerHTML += ` <strong>Total followers:</strong> ${channelinfo.followers}<br>`;
        kripps.innerHTML += ` <strong>Channel created on:</strong> ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}<br>`;

        var a = document.createElement('a');
        var braking = document.createElement('br');
        var linkText1 = document.createTextNode("Enter Towelliees channel");
        a.appendChild(linkText1);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/towelliee";
        document.body.appendChild(a);
        document.body.appendChild(braking);

    }

})





const krippf = document.getElementById('twitch');


fetch(urc)
.then((resp)=>resp.json())

.then(function(data)
{
    let info = data.stream;
    
    if (data.stream != "null"){

        let channelinfo = data.stream.channel;
        var braking = document.createElement('br');
        var a = document.createElement('a');
        var linkText = document.createTextNode("Enter Scrubnoobs channel   ");
        a.appendChild(linkText);
        //titel är till för om du vill ha info när du håller på länken
        //a.title = "my title text";
        a.href = "https://www.twitch.tv/scrubnoob";
        document.body.appendChild(a);  
        document.body.appendChild(braking);

        krippf.innerHTML += ` <br>`;
        krippf.innerHTML += ` CHANNEL: Scrubnoob. <br>`;
        krippf.innerHTML += ` ${channelinfo.display_name} is playing: ${info.game} <br> Viewer count: ${info.viewers}<br>`;
        krippf.innerHTML += `Started the stream ${info.created_at.slice(0,10)} Time: ${info.created_at.slice(11,19)}<br>`;
        krippf.innerHTML += `Average fps: ${info.average_fps} with "${info.delay}" delay<br><br>`;
        krippf.innerHTML += ` Channelinfo:<br>`
        krippf.innerHTML += ` Bio: ${channelinfo.status}<br>`;
        krippf.innerHTML += ` Language: ${channelinfo.language}<br>`;
        krippf.innerHTML += ` Total views: ${channelinfo.views}<br>`;
        krippf.innerHTML += ` Total followers: ${channelinfo.followers}<br>`;
        krippf.innerHTML += ` Channel created on: ${channelinfo.created_at.slice(0,10)} Time: ${channelinfo.created_at.slice(11,19)}`;
    }
 
})