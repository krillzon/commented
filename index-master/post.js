const uru = 'https://5cd15d84d4a78300147be92e.mockapi.io/isAtTheGym';
// deklarar vart loaddata funktionen börjar
  loadData();
  // Tidigare kördes den här delen av koden direkt då vi laddade sidan.
  // Nu ligger den i en funktion, vilket gör att vi kan köra den när vi vill.
  // Efter varje funktion nedan (home, change och delete) så körs den här funktionen för att uppdatera listan
  function loadData() {  
      //hämtar element från div "post"
    const datadiv = document.getElementById('post');
    datadiv.innerHTML = '';
      // Fetchar/gettar hemsidan
    fetch(uru)
      .then((resp) => resp.json())
      .then(function (datas) {
        return datas.map(function (data) {
          let divtag = document.createElement('div');

          // id ,namn jämför om isAtTheGym är true, anger en onlick funktion som kör changefunction funktionen som ändrar om man är på gymmet eller inte längre, även en onlick funktion för att radera "inlägget". id:t används för att radera och funktionen isAtTheGym används för att Put:a / ändra
            
          divtag.innerHTML = `${data.id} - ${data.name} - ${data.isAtTheGym==true?"På Gymmet":"Inte på gymmet"} <a href="#" onclick="changeFunction(true, ${data.id})">På gymmet igen<br></a> <a href="#" onclick="changeFunction(false, ${data.id})">Inte på gymmet längre<br></a> <a href="#" onclick="deleteFunction(${data.id})">Radera</a>`;
          datadiv.appendChild(divtag);
        })
      });
  }
     // Det vi skriver i textrutan hamnar i variabeln 'textInput', dvs ditt namn i detta fall
    // deklarerar en funktion createFunction, deklarar en variabel som har namn och en bool i sig, hämtar "uru" och använder en Post metod för att posta funktionens resultat 
  function createFunction(isAtTheGymNow) {
    const textInput = document.getElementById('name').value;
    var data = { name: textInput, isAtTheGym: isAtTheGymNow }
    fetch(uru,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers:
        {
            // den ska acceptera json och textfiler och "annat" (/).
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then(res => console.log(res))
      // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
      // en halv sekund.
    setTimeout(() => {
      loadData();
    }, 1000);
  } 


    // Den här funktionen körs då man klickar på någon av knapparna 'På gymmet igen' och 'Inte på gymmet längre' vid varje namn.
    // Funktionen är nästan identisk med isAtTheGym, men har ett extra invärde 'id'
    // Istället för POST gör vi istället en PUT, en put ändrar värdet.
    // vi lägger till id till den ursprungliga URIn.
    function changeFunction(isAtTheGymNow, id) {
      var data = {isAtTheGym: isAtTheGymNow }

      fetch(uru + "/" + id,
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))

        // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
        // en halv sekund.
      setTimeout(() => {
        loadData();
      }, 500);

    }
  // Den här funktionen körs då man klickar på Radera.
  // Funktionen är nästan identisk med homeFunction, men har ett extra invärde 'id'
  // Istället för POST gör vi istället en DELETE.
  // vi lägger till id till den ursprungliga URIn.
  // Vi använder en delete funktion för att kunna radera id:t
  function deleteFunction(id) {

    // Den här raden behövs inte då vi raderar en post 
    //var data = { name: "Micke", isHome: isHomeNow }

    fetch(uru + "/" + id,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers:
        {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        // Ingen body:...
      }).then(res => res.json())
      .then(res => console.log(res))

  // Eftersom MockAPI har en liten fördröjning så låter vi sidan  
  // uppdateras först efter en halv sekund.
    setTimeout(() => {
      loadData();
    }, 500);
  }