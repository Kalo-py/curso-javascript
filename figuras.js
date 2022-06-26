// Código cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado+" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area es: "+areaCuadrado+" cm^2");
console.groupEnd();

// Triangulo
console.group("Triangulos");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const ladoTriangulo=4;

console.log("Llos lados del triangulo miden: "
+ladoTriangulo1+" cm, "
+ladoTriangulo2+" cm, "+ladoTriangulo+" cm");

const alturaTriangulo= 5.5;
console.log("La altura del triangulo es de: "+alturaTriangulo+" cm");
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2+ladoTriangulo;
console.log("El perimetro del triangulo es: "+perimetroTriangulo+" cm");

const areatriangulo = (ladoTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: "+areatriangulo+" cm^2");

console.groupEnd();

// Circulo

console.group("Circulito");
//Radio
const Radiocirculo = 4;
console.log("El radio del circulo es: "+Radiocirculo+" cm");
//diametro
const diametrocirculo = Radiocirculo *2;
console.log("El diametro del circulo es: "+diametrocirculo+" cm");
//PI
const PI = Math.PI;
//circunferencia
const perimetrocirculo = diametrocirculo * PI;
console.log("La circunferencia del circulo es: "+perimetrocirculo+" cm");
//Area
const areacirculo =(Radiocirculo * Radiocirculo)*PI ;
console.log("El area es: "+areacirculo+" cm^2");

console.groupEnd();