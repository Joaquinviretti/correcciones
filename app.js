function generarTexto() {
    const nombre = document.getElementById('nombre').value;

    const sections = document.querySelectorAll('.section');
    let resultadoTexto = '';

    sections.forEach(section => {
        const sectionTitle = section.querySelector('h2').innerText;
        resultadoTexto += `\n/* ====== ${sectionTitle} ====== */\n`;

        const items = section.querySelectorAll('.item');
        items.forEach(item => {
            const label = item.querySelector('label').innerText;
            const select = item.querySelector('select');
            const selectedOption = select.options[select.selectedIndex];

            resultadoTexto += `${label} ${selectedOption.text}\n`;
        });
    });

    document.getElementById('resultado').innerText = resultadoTexto;

    // Concatenar el mensaje final según la opción seleccionada
    const mensajeFinal = obtenerMensajeFinal();
    document.getElementById('mensaje-final').innerText = `${nombre}, ${mensajeFinal}`;
}

function obtenerMensajeFinal() {
    const opcion = document.getElementById('opciones-mensaje').value;

    switch (opcion) {
        case '1':
            return 'Felicitaciones, excelente. Has finalizado el curso desarrollando habilidades destacables.';
        case '2':
            return 'Está muy bien, hay detalles para mejorar, no hace falta re entrega. Continúa así.';
        case '3':
            return 'Hay varias cosas para mejorar, tenés que hacer la re entrega. Toma esto como una oportunidad para crecer.';
        default:
            return 'Mensaje no definido.';
    }
}

function copiarTexto() {
    const resultadoTexto = document.getElementById('resultado').innerText;
    
    // Crear un elemento de texto temporal y copiar el resultado
    const tempInput = document.createElement('textarea');
    tempInput.value = resultadoTexto;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
        // Intentar copiar el texto usando la API Clipboard
        document.execCommand('copy');
        alert('¡Texto copiado exitosamente!');
    } catch (err) {
        console.error('Error al copiar el texto:', err);
        alert('Error al copiar el texto. Inténtelo manualmente.');
    } finally {
        document.body.removeChild(tempInput);
    }
}





