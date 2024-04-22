const sayi = document.querySelectorAll("button")
const ekran = document.querySelector("#ekran");

let isaretmi;
let noktami;
let sayimi;

ekran.value = '';

function deletesingledigit() {

    isaretmi = true;
    noktami = true;
    sayimi = true;
    ekran.value = ekran.value.slice(0, -1);

}

function refreshCalculator() {
    isaretmi = true;
    noktami = false;
    sayimi = true;
    ekran.value = ""
}


refreshCalculator();


sayi.forEach(element => {
    element.addEventListener('click', element => {


        let buton = element.target.innerText;

        
        if (buton >= '' && buton <= 9 && sayimi) {
            if (buton === '' && ekran.value === '') {
                sayimi = true;
            }
            else if (ekran.value === '') {
                ekran.value = buton;
            }
            else {
                ekran.value = ekran.value + buton;
            }
            isaretmi = true;
        }

        else if (buton === "DEL") {
            deletesingledigit();
        }

        else if (buton === '=') {
            ekran.value = eval(ekran.value)

            sayimi = false;
        }

        else if (buton === "AC") {
            refreshCalculator();
        }
        else if (buton === '+' && isaretmi) {
            if (ekran.value != '') {
                ekran.value = ekran.value + buton;
            }
            else {
                ekran.value = buton;
            }
            isaretmi = false;
            sayimi = true;
            noktami = false;
        }

        else if (buton === '.' && !noktami) {

            ekran.value = ekran.value + buton;

            noktami = true;
        }

        else if (buton === '-' && isaretmi) {
            if (ekran.value != '') {
                ekran.value = ekran.value +buton;
            }
            else {
                ekran.value = buton;
            }
            isaretmi = false;
            sayimi = true;
            noktami = false;
        }

        else if (buton === '/' && isaretmi) {
            if (ekran.value != '') {
                ekran.value = ekran.value + buton;
                isaretmi = false;
                sayimi = true;
                noktami = false;
            }
        }
            else if (buton === '*' && isaretmi) {
                if (ekran.value != '') {
                    ekran.value = ekran.value + buton;
                    isaretmi = false;
                    sayimi = true;
                    noktami = false;
                }

            }
    })

});



