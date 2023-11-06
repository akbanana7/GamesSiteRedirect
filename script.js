 //Wait function script
 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
//render the game window/objects in the browser page
 function rendergame() {
    document.getElementById("title").innerHTML = "";
    document.getElementById("consolelog").innerHTML = "Rendering Game";
    sleep(1000).then(() => {document.getElementById("consolelog").innerHTML = "Waiting for functions";});
    sleep(3000).then(() => {document.getElementById("consolelog").innerHTML = "Loading css";});
    sleep(4500).then(() => {document.getElementById("consolelog").innerHTML = "Loading Javascript";});
    sleep(4800).then(() => {document.getElementById("consolelog").innerHTML = "Loading html";});
    sleep(4900).then(() => {document.getElementById("consolelog").innerHTML = "Done!";});
    sleep(5000).then(() => {startgame()});
 }

 function startgame() {
    document.getElementById("title").innerHTML = "Done Rendering"
    sleep(1000).then(() => {document.getElementById("title").innerHTML = "Redirecting..."})
    redirecttoweb()
 }

 function redirecttoweb() {
    window.alert("Allow popups/redirects to get games site")
    window.open("https://akmath1239031893210702182387019main19.netlify.app/");
 }