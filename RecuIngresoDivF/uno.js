/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
function mostrar()
{
	let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let seguir;
let acumprogramador = 0;
let acumanalista = 0;
let acumQa = 0;
let contprogramador = 0;
let contanalista = 0;
let contQa = 0;
let promediop = 0;
let promedioa = 0;
let promedioqa = 0;
let sexomayorsueldo;
let flagF = 1;
let mayorsueldofemenino = 0;
let nombreMayorSF;
let contPnobinarios = 0;
let flagM = 1;
let sueldomayorm = 0;
let mayorsueldonobinario = 0;
let flagb = 0;

    do{
      nombre = prompt("Ingrese nombre ");
      
      edad = parseInt(prompt("Ingrese edad:"));
        while(isNaN(edad) || edad < 0){
          edad = parseInt(prompt("Error. ingresar edad"));
        }
      sexo = prompt("Ingrese sexo: femenina / masculino / no binario");
        while(sexo != "femenina" && sexo != "masculino" && sexo != "no binario"){
          sexo = prompt("Error. ingrese sexo: femenina / masculino / no binario");
        }
      puesto = prompt("Ingresar puesto de trabajo: programador / analista / Qa");
        while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
          puesto = prompt("Error. Ingresar puesto de trabajo: programador / analista / Qa");
        }
      sueldo = parseInt(prompt("Ingresar sueldo entre 15000 / 70000"));
        while(sueldo < 15000 || sueldo > 70000){
          sueldo = parseInt(prompt("Error. Ingresar sueldo entre 15000 / 70000"));
        }
//a  promedio de sueldos para cada puesto
      if(puesto == "programador"){
        acumprogramador += sueldo;
        contprogramador++;
      }else if(puesto == "analista"){
        acumanalista += sueldo;
        contanalista++;
      }else{
        acumQa += sueldo;
        contQa++;
      }
//b) el sexo del que percibe el mayor sueldo
      switch(sexo){
        case "masculino":
          if(flagM ==1 || sueldo > sueldomayorm);
          sueldomayorm = sueldo;
          flagM = 0;
          break;

//c) el nombre del empleado femenino con mas sueldo
        case "femenina":
        
        if(flagF || sueldo > mayorsueldofemenino){
          mayorsueldofemenino = sueldo;
          nombreMayorSF = nombre;
          flag = 0;
        }
        break;
//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
        case "no binario":
          acumN += sueldo;
        if(puesto == "programador" && sueldo >= 20000 && sueldo <= 55000){
          contPnobinarios++;
        }
        if(flagb || sueldo > mayorsueldonobinario){
          mayorsueldonobinario = sueldo;
          flag = 0;
          break;
        }
      }

      seguir = prompt("Desedea ingresa la informacion de otro empreado? ");
    }while(seguir == `s`);


    if(acumprogramador != 0){
    promediop = acumprogramador / contprogramador;
    }
    if(acumanalista != 0){
    promedioa = acumanalista / contanalista;
    }
    if(acumQa != 0){
    promedioqa = acumQa / contQa; 
    }

    if(sueldomayorm > mayorsueldofemenino && sueldomayorm > mayorsueldonobinario){
      sexomayorsueldo = sueldomayorm;
      sexomayor = "masculino";
    }else if(mayorsueldofemenino > sueldomayorm && mayorsueldofemenino > mayorsueldonobinario){
      sexomayorsueldo = mayorsueldofemenino;
      sexomayor = "femenina";
    }else{
      sexomayorsueldo = mayorsueldonobinario;
    }

    console.log("promedio de sueldos para cada puesto: programador: "+ promediop +" analista: "+ promedioa + "Qa: "+ promedioqa);
    console.log("el sexo del que percibe el mayor sueldo es: "+ sexomayor+ " y el sueldo es "+ sexomayorsueldo);
    console.log("el nombre del empleado femenino con mas sueldo es: "+ nombreMayorSF);
    console.log("cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: 0"+ contPnobinarios);

}
