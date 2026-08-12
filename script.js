function responder(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === true) {

        resultado.innerHTML =
            "✅ Correto! A homofobia não acontece apenas por meio de violência física. Ela também pode aparecer em palavras, atitudes, exclusão, discriminação e violência psicológica.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
            "❌ Pense novamente! A homofobia pode aparecer de diversas formas, não apenas por meio de violência física.";

        resultado.style.color = "red";

    }

}
