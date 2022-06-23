
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); // 10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // error (dado que no encuentra var, el hoisting no registra la declaración y no funciona)
foo(); // Hola!
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45 (En este y el anterior, el orden de lectura es de izquierda a derecha)
"4" - 2 // 2
"4px" - 2 //NaN
7 / 0 // Infinity ???
{}[0] // Según donde sea ejecutado, va a dar diferente
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5 (El orden de lectura es de izquierda a derecha)
5 || 0 // 5
0 || 5 // 5 
[3]+[3]-[10] // [23] (Trata de concatenar dos arrays, y al ser imposible, los convierte a números y ahi si despues se resta)
3>2>1 // True (3>2 es igual a true, luego hace true<1, convierte true a numero (1) y 1<1 es false)
[] == ![] // True, porque son diferentes. Si hubieran sido triple igual, hubiera dado false.
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // Undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

// Undefined y 2. Cuando se ejecuta la función test(), ejecuta console.log(a), si bien, el interprete lo guardó en la memoria, no guardo su definición, que está mas abajo. Luego ejecuta console.log(foo()), el cual da 2, puesto que cuando se trata de funciones, a través del hoisting, el interprete guarda su contenido y lo ejecuta, a pesar de que el contenido este definido mas abajo
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

// Undefined. La función espera un string y recibe un boolean false. 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// "Aurelio De Rosa " y "Juan Perez". This solo hace referencia desde el objeto donde se invoca. Cuando ejecuto test() es como si ejecutara la función en el contexto global, por lo tanto, el this hace referencia al entorno global y toma como fullname a "Juan Perez".

/* var test = function () {
   return this.fullname
}
*/
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

// 1, 4, 3, 2. Primero ejecuta los console.log por orden, dado que los otros se hayan dentro de una función con una condición que debe cumplirse antes de ser ejecutada. Primero sale 3, dado que esta programada para ser ejecutada inmediatamente, mientras que 2 es ejecutada un segundo despues
```
