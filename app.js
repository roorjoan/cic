function calcularInteresCompuesto() {
    const inversionInicial = parseFloat(document.getElementById('inversionInicial').value);
    const porcentajeDiario = parseFloat(document.getElementById('porcentajeDiario').value);
    const numeroCuantificacion = parseInt(document.getElementById('periodoDias').value);

    let inversionDiaria = inversionInicial;
    let gananciaTotal = 0;
    let dia = 1;

    let resultadoHTML = '<h3>Resultados:</h3>';
    resultadoHTML += '<table>';
    resultadoHTML += '<tr><th>Día</th><th>Cuantificación</th><th>Inversión Diaria</th><th>Ganancia Diaria</th><th>Ganancia Acumulada</th></tr>';

    for (let cuantificacion = 1; cuantificacion <= numeroCuantificacion * 2; cuantificacion++) {
        const gananciaDiaria = (inversionDiaria * porcentajeDiario) / 100;
        gananciaTotal += gananciaDiaria;

        if (cuantificacion % 2 == 1) {
            resultadoHTML += `<tr><td>${dia++}</td><td>${cuantificacion}</td><td>${inversionDiaria.toFixed(3)}</td><td>${gananciaDiaria.toFixed(3)}</td><td>${gananciaTotal.toFixed(2)}</td></tr>`;
        } else {
            resultadoHTML += `<tr><td></td><td>${cuantificacion}</td><td>${inversionDiaria.toFixed(3)}</td><td>${gananciaDiaria.toFixed(3)}</td><td>${gananciaTotal.toFixed(2)}</td></tr>`;
        }
       
        inversionDiaria += gananciaDiaria;
    }

    resultadoHTML += '</table>';
    resultadoHTML += `<p>Ganancia total al final del período: ${gananciaTotal.toFixed(2)}</p>`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}