const mostrarReloj = () =>{
    let fecha = new Date(),
        hora = formato(fecha.getHours()),
        min = formato(fecha.getMinutes()),
        seg = formato(fecha.getSeconds()),
        meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Otc','Nov','Dic',],
        dias = ['Lun','Mar','Mier','Jue','Vier','Sab','Dom',],
        mes = meses[fecha.getMonth()],
        diasem = dias[fecha.getDay()],
        dia = fecha.getDate(),
        ano = fecha.getFullYear();
    
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`
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