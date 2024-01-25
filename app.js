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
            return 'felicitaciones. La entrega está excelente, cumple con todo lo solicitado. Te felicito por el gran proyecto realizado.';
        case '2':
            return 'está muy bien, hay detalles para mejorar,pero no es necesario hacer una re entrega. Hiciste un gran trabajo, te felicito por todo lo que aprendiste estos dos meses. ¡Seguí así!';
        case '3':
            return 'lamentablemente, hay varias cosas para mejorar, tenés que hacer la re entrega. ¡A no bajar los brazos! Venís por buen camino.';
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





