function mostrarMenu() {
    let menu = document.getElementById('menu');
    menu.style.display = 'block';
}

function enviar_datos() {
    let valorFlujo = document.getElementById("valor_flujo").value;
    let valor_inversion = document.getElementById("valor_inversion").value;
    let valor_tasa_inflacion = document.getElementById("valor_tasa_inflacion").value;
    let valor_tasa_interes = document.getElementById("valor_tasa_interes").value;
    let valor_periodos = document.getElementById("valor_num_periodos").value;
    let valor_descuento = document.getElementById("valor_tasa_descuento").value;

    mostrarMenu();

    return {
        valorFlujo: parseFloat(valorFlujo),
        valorInversion: parseFloat(valor_inversion),
        valorTasaInflacion: parseFloat(valor_tasa_inflacion),
        valorTasaInteres: parseFloat(valor_tasa_interes),
        valorPeriodo : parseFloat(valor_periodos),
        valorDescuento: parseFloat(valor_descuento),
    };
}

function global_ops(){
    let valores = enviar_datos();
    let valorFlujo = valores.valorFlujo;
    let valorInversion = valores.valorInversion;
    let valorTasaInflacion = valores.valorTasaInflacion;
    let valorTasaInteres = valores.valorTasaInteres;
    let valorTasaDescuento = valores.valorDescuento;
    let valorPeriodos = valores.valorPeriodo;

    //Rentabilidad
    let r1 = 12 * valorFlujo;
    let r2 = r1 / valorInversion;
    let r3p = r2 * 100;
    let rounded_r3p = r3p.toFixed(2);

    //Retorno de inversion
    let p1 = valorFlujo - 6000;
    let p2 = p1 * 12;
    let p3v = valorInversion / p2;
    let rounded_p3v = p3v.toFixed(2);

    //Rentabilidad actualizada
    let inflacion_conversion = valorTasaInflacion / 100;
    let k1 = r3p + inflacion_conversion * (1 + r3p);

    //Valor presente neto
    let tasa_descuento = valorTasaDescuento / 100;
    let vpn = valorFlujo/(1+tasa_descuento)**valorPeriodos
    return {
        rounded_r3p: parseFloat(rounded_r3p),
        rounded_p3v: parseFloat(rounded_p3v),
        k1: parseFloat(k1),
        vpn: parseFloat(vpn),
    };
}

function rentabilidad() {

    let valores = global_ops();
    let rounded_r3p = valores.rounded_r3p;
    
    alert("La rentabilidad tiene un valor de " + rounded_r3p + "%");
}

function retorno_inversion() {

    let valores = global_ops();
    let retorno_inversion_value = valores.rounded_p3v;

    alert("El retorno de inversion se estima que es de " + retorno_inversion_value + " años");
}

function rentabilidad_actualizada() {

    let valores = global_ops();
    let k_value = valores.k1;

    alert("La rentabilidad actualizada se estima que es de " + k_value.toFixed(2) + "%");

}

function factor_capitalizacion() {

    let valores = enviar_datos();
    let valor_interes = valores.valorTasaInteres;
    let valor_inversion = valores.valorInversion;
    let valorPeriodos = valores.valorPeriodo;
    let interes_convertido = valor_interes / 100;

    let fc = (1+interes_convertido)**valorPeriodos;
    let capital_actualizado = fc.toFixed(3) * valor_inversion;

    alert("El factor de capitalizacion es de " + fc.toFixed(3) + " y el capital actualizado es de " + capital_actualizado.toFixed(2));
}

function valor_presente_neto() {

    let valores = global_ops();

    let vpn = valores.vpn;

    alert("El valor presente neto es de " + vpn.toFixed(2))

}