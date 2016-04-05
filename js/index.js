
//inicio
function Promedio(numero1, numero2){
    this.numero1 = numero1;
    this.numero2 = numero2;
    this.promedio = 0;
}

Promedio.prototype.hallar = function() {
    this.promedio = (this.numero1 + this.numero2)/2;
};
function getRandomColor() {
    var code = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += code[Math.floor(Math.random() * 16)];
    }
    return color;
}
function cambiarCss(){
   
    document.getElementById('foot').style.color = getRandomColor();
    document.body.style.background =getRandomColor();
    document.getElementById("botonCambiarEstilos").style.color = getRandomColor();
    document.getElementById("botonCambiarEstilos").style.background = getRandomColor();
    slider
    document.getElementById("menu").style.background = getRandomColor();
    document.getElementById("info").style.background = getRandomColor();
    document.getElementById("info").style.color = getRandomColor()
    document.getElementById("title").style.color = getRandomColor()
    document.getElementById("sec").style.background = getRandomColor()
    infoBienvenida
    document.getElementById("infoBienvenida").style.color = getRandomColor()





}
function funcPromedio(){
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
     numero1 = parseFloat(numero1);
     numero2 = parseFloat(numero2);
     
    var Objeto = new Promedio(numero1,numero2);
    Objeto.hallar();
    document.getElementById('resultado').value = Objeto.promedio;
}
function ponerHora(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
        segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
        minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
        hora = "0" + hora

    imprimirHora = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = imprimirHora

    setTimeout("ponerHora()",1000)

}
jQuery(document).ready(function($){
    $("#menuLink").click(function(){
        $("#menu").css({"left":"150px"})
    });
    $("#menu").mouseleave(function(){
        $(this).css({"left":"0px"})
    })
    /* El punto es una clase
     EL "#" es id
     si no posee ninguno de los dos es una etiqueta */
})