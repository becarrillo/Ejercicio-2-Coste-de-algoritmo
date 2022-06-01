// Diga qué hace el siguiente algoritmo y cuál es su coste en función de n.
function misteri(n) {
    let f = 1;
    for (let i=2; i <= n; ++i) f *= i;
    return f;
}

console.log(misteri(5));
console.log(misteri(4));    // El algoritmo de la función tomó por partida que comienza recorrido desde i=2 .
// La variable iteradora i va a ir creciendo en cada ciclo hasta n.
// Entonces f va a a multiplicarse entre si tantas veces como cada tiempo de iteración.
// Sabemos que el valor en función del coste de un algoritmo se representa F(n-1) = (n) y la operación que
// resulta de ésta función es un factorial, entonces su coste es de n