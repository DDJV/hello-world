/* 
 * Para ordenar los números utilizé la función sort para ordenarlos 
 * de forma ascendente y
 * ejecutarlo en modo consola.
 * 
 
 */
function ordenacion(a,b){
    return a-b;
    /*
     * Si a > b retorna 1
     * Si b > a retorna -1
     * Si b==a retorna 0
     */
}
var arreglo=[6,5,3,1,8,7,2,4];
arreglo.sort(ordenacion);
console.log(arreglo);




