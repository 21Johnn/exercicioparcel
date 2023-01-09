AOS.init();

const dataDoEvento = new Date("Jul 05, 2023 00:01:00");
const timeStamp = dataDoEvento.getTime();

const contaHoras = setInterval(function (){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteEvento = timeStamp - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((tempoAteEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

        if(tempoAteEvento < 0){
            clearInterval(contaHoras);
            document.getElementById('contador').innerHTML = 'Evento Expirado'
        }
}, 1000)
