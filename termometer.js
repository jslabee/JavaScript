function showAlert() {
    var textvnos = document.getElementById("textbox").value;
    var temperatura = parseInt(textvnos);

    sestavi(temperatura);
}

function sestavi(temparm) {
    var obvestilo ;

    if (temparm > 30) {
      vklopiklimo(temparm);
      obvestilo = "vroce";

    }
    else if (temparm <=30 && temparm >=  24) {
      obvestilo = "ni tako hudo";

    }
    else {
      obvestilo = "manj od 24";
    }
    alert(obvestilo);

}

function vklopiklimo(temperatura){
   var idealtemp = 24
   var razlika = temperatura - idealtemp;
   var milisekunde = razlika * 1000;
   alert("idealna temoperatura bo dozežena čez" + razlika +"sekund");
   setTimeout(function(){
     console.log("idealna sobna temperatura dosežena.");
   }, milisekunde);
}
