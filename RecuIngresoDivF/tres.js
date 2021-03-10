/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades,
se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades,
el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
function mostrar()
{
   let nombre;
   let cantidad;
   let marca;
   let precio;
   let seguir;
   let acumf = 0;
   let acuma = 0;
   let acumi = 0;
   let conta = 0;
   let contf = 0;
   let conti = 0;
   let promediof = 0;
   let promedioa = 0;
   let promedioi = 0;
   let descuentof = 0;
   let descuentoa = 0;
   let subtotal = 0;
   let importe = 0;
 
        do{
            nombre = prompt("Ingresar nombre: ");

            cantidad = parseInt(prompt("Ingresar cantidad: "));
                while(isNaN(cantidad) && cantidad <= 0){
                cantidad = parseInt(prompt("Error. Ingresar cantidad: "));
            }
            marca = prompt("Ingresar marca: felipelamparas / argentinaluz / illuminatis");
                while(marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis"){
                marca = prompt("Error. Ingresar marca: felipelamparas / argentinaluz / illuminatis");
            }
            precio = parseInt(prompt("Ingresar precio: "));
                while(isNaN(precio) || precio < 0){
                precio = parseInt(prompt("Error. Ingresar precio: "));
			}
			
			importe = precio * cantidad;
			subtotal += importe;

            switch(marca){
                case "felipelamparas":
                	acumf = cantidad;
               	 	contf++;

                	if(cantidad > 5){
                    descuentof += (precio *contf)*0.1;

                	}
				break;
					
                case "argentinaluz":
               		 acuma = cantidad;
               	 	 conta++;
                	 if(cantidad >= 3){
                     descuentoa += (precio *conta)*0.05; 
                	 }
				break;
					
                case "illuminatis":
                     acumi = cantidad;
                     conti++;
                break;
            }

            seguir = prompt("Quiere ingresar otro producto? ");
        }while(seguir == "s");
      
//B
		



//C
        if(acumf != 0){
        promediof = acumf / contf;
        }
        if(acuma != 0){
        promedioa = acuma / conta;
        }
        if(acumi != 0){
        promedioi = acumi / conti;
		}
//D
		if(conta > contf && conta > conti){
			mayorventas = "argentinaluz";
		}else if(contf > conta && contf > conti){	
			mayorventas  = "felipelamparas";
		}else{
			mayorventas = "illuminatis";
		}	

        

		console.log("Lo que recauda la empresa en concepto de todas las ventas realizadas es "+subtotal);
	//	console.log("Lo que perdio la empresa en concepto de descuentos es:  );
		console.log("El promedio de la cantidad de lamparas vendidas de cada marca es felipelamparas: "+ promediof+ " argentinaluz: "+promedioa+ " illuminatis: "+promedioi);
		console.log("La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) es "+ mayorventas);
}
/*a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/
