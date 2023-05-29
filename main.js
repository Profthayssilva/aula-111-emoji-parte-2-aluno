
// Definir as variáveis serão usadas para armazenar os resultados provenientes do modelo (após comparar a
//   imagem e o modelo) e serão passadas para o sistema para falar os resultados
prediction1 = ""
prediction2 = ""

//  adicionar o código JS para definir as propriedades da webcam.
Webcam.set({
    width:
    height:
    imageFormat : 
    pngQuality:
  });

//   Então vamos pegar o elemento HTML no qual queremos mostrar a visualização da webcam e
// armazená-lo dentro de uma variável.

camera = document.getElementById(" ");

// Agora vamos passar a variável camera (que tem a div HTML) dentro de Webcam.attach(). Como
// resultado, a visualização da webcam será exibida na div HTML





                            // Código para capturar a imagem
function takeSnapshot()
{

//   escreva uma função dentro de Webcam.snap(), e passe data_uri dentro dela. E usaremos esta
// data_uri para exibir a imagem.

    Webcam.snap(function(     ) {
// atualizar a tag div que fizemos com o propósito de manter a imagem em
// index.html, com esta data_uri, que tem a imagem capturada.
        
    });
}

// Escreva uma mensagem de console para testar se o ml5.js está funcionando. 
  console.log('ml5 version:', ml5.version);
  
  // importar nosso modelo no arquivo.
('https://teachablemachine.withgoogle.com/models/J2Ip11PDF/model.json',     );


// escrever a função modelLoaded:
  function       {
    console.log('Model Loaded!');
  }
  

  // Agora vamos definir a função speak().

function speak(){
  // definir uma API speechSynthesis e armazená-la dentro de uma variável.
  var synth =       ;

  // Se queremos que o sistema fale, precisamos dar esse texto específico ao sistema para falar
  speakData1 = "A primeira previsão é " + prediction1;
  // Fazer p mesmo para speakData2
 
  // converter este texto em fala.
  var utterThis = new 
  synth.speak(utterThis);
}


  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultEmotionName").innerHTML = results[0].label;
    document.getElementById("resultEmotionName2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    speak();
    if(results[0].label == "feliz")
    {
	    document.getElementById("updateEmoji").innerHTML = "&#128522;";
    }
    if(results[0].label == "triste")
    {
	    document.getElementById("updateEmoji").innerHTML = "&#128532;";
    }
    if(results[0].label == "irritado")
    {
	    document.getElementById("updateEmoji").innerHTML = "&#128548;";
    }

    if(results[1].label == "feliz")
    {
	    document.getElementById("updateEmoji2").innerHTML = "&#128522;";
    }
    if(results[1].label == "triste")
    {
	    document.getElementById("updateEmoji2").innerHTML = "&#128532;";
    }
    if(results[1].label == "irritado")
    {
	    document.getElementById("updateEmoji2").innerHTML = "&#128548;";
    }
  }
}

