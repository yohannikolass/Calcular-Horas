        function calcularDiferenca() {

            const hora1Input = document.getElementById('hora1').value;

            const hora2Input = document.getElementById('hora2').value;

            const resultadoElement = document.getElementById('resultado');



            // Verifica se os inputs estão preenchidos

            if (!hora1Input || !hora2Input) {

                resultadoElement.textContent = "Por favor, insira ambos os horários.";

                return;

            }



            // Converte os horários para objetos Date para facilitar o cálculo

            // Usamos uma data base arbitrária (hoje) para garantir a consistência

            const hoje = new Date();

            const [h1, m1] = hora1Input.split(':').map(Number);

            const [h2, m2] = hora2Input.split(':').map(Number);



            const dataHora1 = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), h1, m1);

            let dataHora2 = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), h2, m2);



            // Ajusta se o segundo horário for menor que o primeiro (virada de dia)

            if (dataHora2 < dataHora1) {

                dataHora2.setDate(dataHora2.getDate() + 1); // Adiciona um dia

            }



            const diferencaMs = dataHora2 - dataHora1; // Diferença em milissegundos



            // Converte milissegundos para horas e minutos

            const totalSegundos = diferencaMs / 1000;

            const horas = Math.floor(totalSegundos / 3600);

            const minutos = Math.floor((totalSegundos % 3600) / 60);



            resultadoElement.textContent = `${horas}:${minutos}`;

        }
