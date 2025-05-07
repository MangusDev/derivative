function calcular() {
    const expressao = document.getElementById('expressao').value;
    
    try {
        const derivada = math.derivative(expressao, 'x').toString();
        const segundaDerivada = math.derivative(derivada, 'x').toString();

        // Coeficientes para encontrar o ponto crítico
        const coeficientes = (derivada.match(/-?\d+/g) || []).map(Number);
        const a = coeficientes[0];
        const b = coeficientes[1];
        const pontoCritico = -b / a;

        // Avaliando a segunda derivada no ponto crítico
        const segundaDerivadaValor = math.evaluate(segundaDerivada.replace(/x/g, pontoCritico));
        let tipoPonto = 'Ponto de Inflexão';
        
        if (segundaDerivadaValor > 0) {
            tipoPonto = 'Mínimo Local';
        } else if (segundaDerivadaValor < 0) {
            tipoPonto = 'Máximo Local';
        }

        document.getElementById('derivada').innerText = derivada;
        document.getElementById('segundaDerivada').innerText = segundaDerivada;
        document.getElementById('pontoCritico').innerText = pontoCritico;
        document.getElementById('tipoPonto').innerText = tipoPonto;

    } catch (error) {
        alert('Erro ao calcular. Verifique a expressão.');
    }
}

