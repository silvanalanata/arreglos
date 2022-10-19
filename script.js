
//algoritmo 1 siempre hambriento
function siempreHambriento(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("Tengo Hambre")
    }
}
   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//algoritmo 2 filtro paso alto

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0; i< arr.length;i++){
        if(arr[i]>cutoff){
            var cont=arr[i];
            filteredArr.push(cont);
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]


//algoritmo 3 mejor que el promedio

function betterThanAverage(arr){
    var prom = 0;
    var count=0;
    var total=arr.length;

    for(let i=0; i<total;i++){
        prom=arr[i]+prom;
    }
    let promedio=(prom/total);

    for(let i=0; i<total;i++){
      if(arr[i]>promedio){
         count++;
      }
    }
    return count;
}

var result = betterThanAverage([6,8,3,10,-2,5,9]);
console.log(result);

//algoritmo 4 Arreglo invertido

function reverse(arr) {
    // tu código aquí
    let arr2 = arr.reverse();
    
    return arr2;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//algoritmo 5  Arreglo de Fibonacci

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    
    for(i=2;i<=n-1 ;i++){
       
        suma= fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(suma);

    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


