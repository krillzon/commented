const uriMessage = 'https://5cd15d84d4a78300147be92e.mockapi.io/Message';
// Det vi skriver i textrutan hamnar i variabeln 'textInput', vilekt i detta fall är ditt meddelande
// deklarerar en sendmessage funktion som innehåller Message som sätts i en variabel (data).
    function sendMessage() {
      const textInput1 = document.getElementById('Message').value;
      var data = { Message: textInput1 }
      fetch(uriMessage,
        {
          // använder oss utav en post funktion för att posta meddelandet
          method: "POST", // *GET, POST, PUT, DELETE, etc
          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        
        .then(res => res.json())
        .then(res => console.log(res))
        // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
        // en halv sekund.
      setTimeout(() => {
        loadMessage();
      }, 1000);
    }
