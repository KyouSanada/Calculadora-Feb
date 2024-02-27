const boton = document.getElementById("calcular");
const error = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");

function hidratacion (peso){    
    let flujo;
    superficieCorporal = (((peso)*4 + 7) / ((peso) + 90));
    console.log(superficieCorporal);
    if (peso <= 30){
        if(peso <= 10){
            flujo = (peso*100)
        }
        else if(peso <=20 || peso == 11 ){
            flujo = (1000 + (peso-10)*50)
        }
        else {
            flujo = (1500 + (peso-20)*20)
        }

    }
    else{flujo = Math.round(superficieCorporal*1500)};
    return flujo
};

boton.addEventListener("click", () =>{
    const peso = document.getElementById("peso").valueAsNumber;
    let flujo;
    if (peso > 0){
        error.style.display = "none";
        FLU.style.display = "block"
        MAN.style.display = "block";
        flujo = hidratacion(peso);
        FLU.innerHTML = flujo + "cc/dia" + " - " + Math.round(flujo/24) + "cc/hr";
        MAN.innerHTML = "m+1/2m: " + flujo*1.5 + "cc/dia"+ " - " + Math.round(flujo*1.5 /24) + "cc/hr";
    }
    else{error.style.display = "block";
            FLU.style.display = "none";
            MAN.style.display = "none"}
});


