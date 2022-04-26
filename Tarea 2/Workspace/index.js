function sumar(acumulador, dV) {
    return(acumulador + dV);
}

function sumarImpresion(acumulador, dV, tiempo) {
    return(acumulador + dV*dI);
}

function inputFallido(cont) {
    return(cont - 1);
}

let cont = 0;
let projecto="Vehículo RC"; //Variable del título del alert. Como esto es una demo, no cambia, pero la idea que la gente pueda comprar distintos carritos ya preparados
let acumulador=0; //Variable que recoge el precio final
let dV=0; //delta valor
let dP=0; //delta producto
let dI=5 //delta impresión (tiempo de impresión en minutos)
const tP=0.15; //tasa de impresión del material PLA
const tA=0.25; //tasa de impresión del material ABS

//Muchos valores asignados a variables se encuentran así debido a que así lo requerirá la página en versiones futuras.

alert("Bienvenido al Club de la Mofeta. De momento no disponemos de una tienda ya que esto es una demo.");
alert("Usted ha seleccionado el proyecto '" + projecto + "'. A continuación se le solicitará especificar los componentes de su carrito. Algunos componentes son fijos.");
alert("Los componentes incluyen: modelo SLA; movilidad; kit: motores + puente H; batería li-ion; microcontrolador Arduino; kit: módulo transceptor + control.");
dV = 5; //precio fijo (Arduino micro)
acumulador = sumar(acumulador, dV);
dV = 10; //precio fijo (transceptor genérico)

do {

    cont = cont+1;
    
    switch (cont) {
    
        case 1 :
            dP = prompt("¿Qué material vas a utilizar para la impresión 3D de tu modelo? ¿PLA () o ABS? ", "");
            dP = dP.toLowerCase();
            if (dP=="abs") {
                dV = tP;
                acumulador = sumarImpresion(acumulador, dV);
            
            } else {
                if (dP=="pla") {
                dV = tA;
                acumulador = sumarImpresion(acumulador, dV); 
                } else { cont = inputFallido(cont); }
            }
            break;
    
        case 2 :
            dP = prompt("¿Qué movilidad vas a utilizar? ¿Orugas o ruedas? ", "");
            dP = dP.toLowerCase();
            if (dP=="orugas") {
                dV = 10;
                acumulador = sumar(acumulador, dV);
            } else { 
                if (dP=="ruedas") {
                dV = 7;
                acumulador = sumar(acumulador, dV);
                } else { cont = inputFallido(cont); }
              }
            break;
        case 3 :
            dP = prompt("¿Qué motores vas a usar? Los drivers vienen incluídos ¿DR019 (alto torque) o DR016 (menor torque)? ", "");
            dP = dP.toLowerCase();
            if (dP=="dr019") {
                dV = 25;
                acumulador = sumar(acumulador, dV);
            } else { if (dP=="dr016") {
                dV = 20;
                acumulador = sumar(acumulador, dV);
                } else { cont = inputFallido(cont); }
            }
            break;
        case 4 :
            dP = prompt("¿Qué batería vas a usar? ¿12V1700MAH7H o 12V2500MAH12H? ", "");
            dP = dP.toLowerCase();
            if (dP=="12v1700mah7h") {
                dV = 17;
                acumulador = sumar(acumulador, dV);
            } else { if (dP=="12v2500mah12h") {
                dV = 20;
                acumulador = sumar(acumulador, dV);
                } else { cont = inputFallido(cont); }
            }
            cont = 10;
            break;
        default :
            cont = cont-1;
            break;
    }
    
    }
    while (cont!=10)
    
    alert("El precio final de tu paquete es de $" + acumulador);
    
    