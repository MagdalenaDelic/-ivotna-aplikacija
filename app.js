let rezultat = document.querySelector("#rezultat");
let unosGodina = document.querySelector("#unosGodina");
let izracunaj = document.querySelector("#izracunaj");
let reset = document.querySelector("#reset");
let refresh = document.querySelector(".refresh");
let PrikazRezultata = document.querySelector("#PrikazRezultata");
let upozorenje = document.querySelector("#upozorenje");
let alert2 = document.querySelector(".alert2");
let alert3 = document.querySelector(".alert3");
let prikazOdgovora = document.querySelector(".prikazOdgovora");

let myTimer;
let godine;


izracunaj.addEventListener("click", function () {
    godine = unosGodina.value;

    if (godine == "") {

        prikazOdgovora.classList.remove("active");

        alert2.classList.add("active");
        //alert2.style.display = "block"
        myTimer = setTimeout(function () {
            alert2.classList.remove("active");

        }, 3000);

    } else if (godine > 90) {

        alert3.classList.add("active");

        myTimer = setTimeout(function () {
            alert3.classList.remove("active");

        }, 3000);

    } else {

        prikazOdgovora.classList.add("active");

        let krajnjeGodine = 90 - godine;
        krajnjeGodine = krajnjeGodine * 52;
        rezultat.innerHTML = točkaZaRazdavajenje(krajnjeGodine);

        unosGodina.value = "";
    };

});
reset.addEventListener("click", function () {

    /*godine = ""; 
    prikazOdgovora.classList.remove("active");*/
    refresh.click();
});

function točkaZaRazdavajenje(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

