/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/
function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantidadmaterias;
    let notapromedio;
    let edad;
    let flagF = 1;
    let mayornotaF = 0;
    let nombrepromedioF;
    let flagJ = 1;
    let contF = 0;
    let contQ = 0;
    let contS = 0;
    let porcentajeF = 0;
    let porcentajeQ = 0;
    let porcentajeS = 0;
    let flagQ = 1;
    let edadmayorM;
    let nombremayorM;
    let mayormateria = 0;
          
          for(let i = 1; i <=500; i++){
            nombre = prompt("Ingrese nombre: ");
            
            carrera = prompt("Ingresar carrera: quimica / fisica / sistemas");
              while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
              carrera = prompt("Error. ingrese carrera: quimica / fisica / sistemas");
            }
            sexo = prompt("Ingresar sexo: masculino / fememenino");
              while(sexo != "masculino" && sexo != "femenino"){
              sexo = prompt("Error. Ingresar sexo: masculino / fememenino");
            }
            cantidadmaterias = parseInt(prompt("Ingresar cantidad de materias de 1 a 5"));
              while(cantidadmaterias < 1 && cantidadmaterias > 5 ){
              cantidadmaterias = parseInt(prompt("Error. Ingresar cantidad de materias de 1 a 5"));
            }
            notapromedio = parseInt(prompt("Ingresar nota promedio: 0 a 10"));
              while(notapromedio < 0 && notapromedio > 10 ){
              notapromedio = parseInt(prompt("Error. Ingresar nota promedio: 0 a 10"));
            }
            edad = parseInt(prompt("Ingresar edad "));
              while(isNaN(edad) || edad < 0){
              edad = parseInt(prompt("Error. Ingresar edad"));
            }
    //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo)
            switch (carrera){
              case "fisica":
                if(flagF == 1 || notapromedio > mayornotaF){
                  mayornotaF = notapromedio;
                  nombrepromedioF = nombre;
                  flagF = 0;
                }
                contF++;
                break;
              case "quimica":
                contQ++;
                break;
    
              case "sistemas":
                contS++;
                break;
                          
              }
    //b  El nombre de la alumna mas joven
            if(sexo == "femenino" && (flagJ == 1 || edad < alumnajoven)){
              alumnajoven = edad;
              nombrealumnaJ = nombre;
              flagJ = 0;
            }
    //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica
            if( carrera != "quimica" && (flagQ == 1 || cantidadmaterias > mayormateria)){
                mayormateria = cantidadmaterias;
                edadmayorM = edad;
                nombremayorM = nombre;
                flagQ = 0;
            }
          }//CIERRE DEL FOR
          if(contF != 0){
            porcentajeF = (contF *100)/500;
          }
          if(contQ != 0){
            porcentajeQ = (contQ *100)/500;
          }
          if(contS != 0){
            porcentajeS = (contS *100)/500;
          }
    
    
          console.log("El nombre del mejor promedio de los alumnos que estudian Fisica es: "+ nombrepromedioF);
          console.log("El nombre de la alumna mas joven "+nombrealumnaJ);
          console.log("Porcentaje de estudiantes que estudia cada carrera es- quimica: "+porcentajeQ+ " fisica: "+ porcentajeF+ " sistemas: "+ porcentajeS);
          console.log("La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es- edad: "+edadmayorM+ " nombre: "+nombremayorM);
     
}
