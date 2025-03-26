
       
        function trocarLampada() {
          
            var lampada = document.getElementById('lampada');

            // Verifica o estado da lâmpada e troca a imagem
            if (lampada.src.includes("https://acquafort.vtexassets.com/arquivos/ids/163557/_DSC0023.png?v=637574588026000000")) {
                lampada.src = "lampada_ligada.jpg";  // Troca para a lâmpada ligada
                     // Atualiza o texto alternativo
            } else {
                lampada.src = "https://acquafort.vtexassets.com/arquivos/ids/163557/_DSC0023.png?v=637574588026000000";  // Troca para a lâmpada desligada
                   // Atualiza o texto alternativo
            }
        }
