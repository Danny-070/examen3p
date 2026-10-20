function calcular() {

    // Obtener los valores ingresados
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);

    let resultado = document.getElementById("resultado");

    //verificar que los campos no esten vacios
    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === "" ||
        document.getElementById("num3").value === ""
    ) {
        resultado.innerHTML = "Ingrese los tres valores.";
        return;
    }

    // Verificar que sea una ecuación cuadrática
    if (a === 0) {
        resultado.innerHTML = "El valor de a debe ser diferente de cero.";
        return;
    }

    //calcular el discriminante
    let discriminante = b * b - 4 * a * c;

    //calcular las soluciones
    if (discriminante > 0) {

        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        resultado.innerHTML =
            "Primera solución: x1 = " + x1 +
            "<br>Segunda solución: x2 = " + x2;

        //comprobar si hay solamente una solucion
    } else if (discriminante === 0) {

        let x = -b / (2 * a);

        //Mensaje 
        resultado.innerHTML =
            "Una solución: x = " + x;

    } else {
        //en tal caso que el discriminante sea negativo que mande este sms
        resultado.innerHTML =
            "No existen soluciones reales.";
    }
}