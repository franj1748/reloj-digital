const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formato(fecha.getHours()); 
    let min = formato(fecha.getMinutes());
    let seg = formato(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`

    let meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Otc','Nov','Dic',];
    let dias = ['Lun','Mar','Mier','Jue','Vier','Sab','Dom',];
    let mes = meses[fecha.getMonth()];
    let diasem = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let ano = fecha.getFullYear();
    document.getElementById('fecha').innerHTML = `${diasem}, ${dia} de ${mes} del ${ano}`;

    document.getElementById('contenedor').classList.toggle('contornoAnimado');
}

const formato = formateo =>{
    if (formateo < 10){
        formateo = '0' + formateo;
    }
    return formateo;
}


setInterval(mostrarReloj, 1000);