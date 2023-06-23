$( document ).ready(function() {

    $(".imgbtn").on("click", function() {

        if ($("#menumobile").hasClass("aberto")){
            $("#menumobile").removeClass("aberto")
        }
        else {
            $("#menumobile").addClass("aberto")
        }
    })
});





function calcularPegadaEcologica() {
  // Obter os valores dos inputs
  var consumoEnergia = parseFloat(document.getElementById("consumo-energia").value);
  var usoAgua = parseFloat(document.getElementById("uso-agua").value);
  var kmRodados = parseFloat(document.getElementById("km-rodados").value);
  
  // Verificar quais checkboxes estão selecionados
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  // Calcular a pegada ecológica
  var fatorMultiplicacao = 1;
  checkboxes.forEach(function(checkbox) {
    if (checkbox.value === "dia") {
      fatorMultiplicacao *= 1;
    } else if (checkbox.value === "mes") {
      fatorMultiplicacao *= 30;
    } else if (checkbox.value === "ano") {
      fatorMultiplicacao *= 365;
    }
  });
  
  var pegadaEcologica = (consumoEnergia + usoAgua + (kmRodados * 0.2)) * fatorMultiplicacao;
  
  // Exibir resultado
  var resultadoElement = document.getElementById("resultado");
  resultadoElement.style.display = "block";
  
  // Exibir resultado e dicas personalizadas
  var pegadaEcologicaElement = document.getElementById("pegada-ecologica");
  var dicasElement = document.getElementById("dicas");
  
  pegadaEcologicaElement.textContent = "Sua pegada ecológica é: " + pegadaEcologica.toFixed(2);
  
  if (pegadaEcologica < 50) {
    dicasElement.textContent = "Parabéns! Você tem uma pegada ecológica baixa. Continue com suas práticas sustentáveis.";
  } else if (pegadaEcologica < 100) {
    dicasElement.textContent = "Sua pegada ecológica está na média. Considere implementar mais ações sustentáveis no seu dia a dia.";
  } else {
    dicasElement.textContent = "Sua pegada ecológica está alta. Procure reduzir seu consumo de energia, água e quilômetros rodados no carro.";
  }
  
  // Adicionar dicas personalizadas
  if (consumoEnergia > 200) {
    dicasElement.textContent += " Reduza o consumo de energia desligando aparelhos eletrônicos quando não estiver usando.";
  }
  if (usoAgua > 1000) {
    dicasElement.textContent += " Economize água tomando banhos mais curtos e consertando vazamentos.";
  }
  if (kmRodados > 500) {
    dicasElement.textContent += " Opte por usar transporte público, compartilhamento de carros ou bicicletas em trajetos curtos.";
  }
}

