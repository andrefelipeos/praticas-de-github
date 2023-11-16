function converteTemperatura() {
    const [tempEntrada, unidadeEntrada, unidadeSaida] = pegaValoresDeEntrada()
    const tempSaidaOutput = document.querySelector("#temp_saida")

    if (unidadeEntrada == "celsius" && unidadeSaida == "fahrenheit") {
        tempSaidaOutput.innerHTML = converteCelsiusParaFahrenheit(tempEntrada)
    } else {
        tempSaidaOutput.innerHTML = "Algo deu errado!"
    }
}

function pegaValoresDeEntrada() {
    const tempEntrada = document.querySelector("#temp_entrada").value
    const unidadeEntrada = document.querySelector("#unidade_entrada").value
    const unidadeSaida = document.querySelector("#unidade_saida").value
    return [tempEntrada, unidadeEntrada, unidadeSaida]
}

function converteCelsiusParaFahrenheit(temperatura) {
    return (temperatura * 1.8 + 32).toFixed(2)
}
