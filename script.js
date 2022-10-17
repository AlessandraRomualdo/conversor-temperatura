function conversor(){
    let valor = document.getElementById('temp')
    let valorconvertido = Number(valor.value)
    let opcao = document.getElementsByName('tipo')
    let c
    let f

    if (valor.value.length == 0){
        window.alert(`[ERRO - Digite um valor valido]`)
    }else{
       if(opcao[0].checked){
           c = (valorconvertido - 32)/1.8 
           res.innerHTML = ` ${valorconvertido}°F convertido em Celsius é ${c.toFixed()}°C`
       }else if(opcao[1].checked){
           f = (valorconvertido * 1.8)+32
           res.innerHTML = `${valorconvertido}°C convertido em Fahrenheit é ${f.toFixed()}°F`
       }
    }   
}