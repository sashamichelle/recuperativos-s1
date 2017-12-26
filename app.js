/*problema dificil número 2
 **creando funccion para comprobar si estan ordenados de mayor a menos números*
 *creando arreglo a verificar si esta ordenado*/
var arr = [1, 2, 3, 4, 5, 6, 7];
/*creando función para verificar*/
  function ordenar(arr) {
    /*creando primer for para recorrer desde el primer hasta el ultimo elemento*/
    for (var i = 0; i < arr.length; i++) {
        /*creando segundo for para recorrer desde el segundo en adelante*/
      for (var j = i + 1; j < arr.length; j++) {
            /*condicionando que si mi primer elemento es mayor al segundo retorna falso sino retorna verdadero*/
        if (arr[i] > arr[j]) {
            return false;
          }
        }
      }
    return true;
  }
/*imprimiendo en la consola el resultado*/
console.log(ordenar(arr));


/*problema dificil número 4*/

/*creando función para buscar número más pequeño*/
/*primera variable para realizar las acciones para encontrar número más pequeño*/
var actuar=[ 5, 8, 4, 2 ];
/*segunda variable es para guardar el orden anterior al ordenamiento*/
var arr = [ 5, 8, 4, 2 ];
/*creando función que compara si "a" es mayor a "b", sino invertir posiciones*/
function comparar ( a, b ){ return a - b; }
/* se le aplica a nuestra variable actuar la función de comparar*/
var arrNuevo= actuar.sort(comparar);
/*se obtiene el primer número de el array ordenado de menor a mayor*/
var numero=actuar[0];
/*en la consola se imprime el primer número de la caderna ordenada, en la posición de mi arreglo inicial*/

console.log(arr.indexOf(numero));

    