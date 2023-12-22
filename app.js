function calcularInteresCompuesto() {
    const inversionInicial = parseFloat(document.getElementById('inversionInicial').value);
    const porcentajeDiario = parseFloat(document.getElementById('porcentajeDiario').value);
    const periodoDias = parseInt(document.getElementById('periodoDias').value);

    let inversionDiaria = inversionInicial;
    let gananciaTotal = 0;

    let resultadoHTML = '<h3>Resultados:</h3>';
    resultadoHTML += '<table>';
    resultadoHTML += '<tr><th>Día</th><th>Inversión Diaria</th><th>Ganancia Diaria</th><th>Ganancia Acumulada</th></tr>';

    for (let dia = 1; dia <= periodoDias; dia++) {
        const gananciaDiaria = (inversionDiaria * porcentajeDiario) / 100;
        gananciaTotal += gananciaDiaria;

        resultadoHTML += `<tr><td>${dia}</td><td>${inversionDiaria.toFixed(3)}</td><td>${gananciaDiaria.toFixed(3)}</td><td>${gananciaTotal.toFixed(2)}</td></tr>`;

        inversionDiaria += gananciaDiaria;
    }

    resultadoHTML += '</table>';
    resultadoHTML += `<p>Ganancia total al final del período: ${gananciaTotal.toFixed(2)}</p>`;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}