function saludar() {
    var repeat = parseInt(document.getElementById('repeat').value);
    var saludos = ["Hola", "Adiós", "¿Cómo estás?", "Todo bien", "Buenos días", "Buenas tardes", "Buenas noches"];
    var nombres = ["Marga", "Carol", "Jose", "Maria", "Pablo", "Martin", "Lupe", "Carol"];
    var output = "";

    for (var i = 0; i < repeat; i++) {
        var randomSaludoIndex = Math.floor(Math.random() * saludos.length);
        var randomNombreIndex = Math.floor(Math.random() * nombres.length);
        output += saludos[randomSaludoIndex] + " " + nombres[randomNombreIndex] + "<br>";
    }

    document.getElementById('output').innerHTML = output;
}
