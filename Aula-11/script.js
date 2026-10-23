       let pokemon = "pikachu";
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(resposta => resposta.json())
            .then(dados => console.log(dados));





        const btnAdicionar = document.querySelector('#btnAdicionar')
        const PokemonEscolhido = document.querySelector('#Pokemon');

        const NomePokemon = document.querySelector('#nomePokemon');
        const NumeroPokemon = document.querySelector('#numeroPokemon');
        const ImgPokemon = document.querySelector('#imgPokemon');
        const TipoPokemon = document.querySelector('#tipoPokemon');
        const TipoSegundarioPokemon = document.querySelector('#tipoSegundarioPokemon');
        const AlturaPokemon = document.querySelector('#alturaPokemon');
        const PesoPokemon = document.querySelector('#pesoPokemon');
        const HPPokemon = document.querySelector('#hpPokemon');
        const AtaquePokemon = document.querySelector('#ataquePokemon');
        const DefesaPokemon = document.querySelector('#defesaPokemon');
        const VelocidadePokemon = document.querySelector('#velocidadePokemon');



        function SelecionarPokemon() {
            const pokemon = PokemonEscolhido.value.toLowerCase().trim();

            if (pokemon == "") {

                alert('digite alguma coisa');
                return;

            }


            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(resposta => resposta.json())
                .then(dados => {
                    NomePokemon.textContent = dados.name;
                    NumeroPokemon.textContent = "#" + dados.id;
                    ImgPokemon.src = dados.sprites.front_default;
                    TipoPokemon.textContent = dados.types[0].type.name;
                    TipoSegundarioPokemon.textContent = dados.types[1] ? dados.types[1].type.name : "";   
                    AlturaPokemon.textContent = dados.height / 10 + " m";
                    PesoPokemon.textContent = dados.weight / 10 + " kg";
                    HPPokemon.textContent = "HP: " + dados.stats[0].base_stat ;
                    AtaquePokemon.textContent = "Ataque: " + dados.stats[1].base_stat;
                    DefesaPokemon.textContent = "Defesa: " + dados.stats[2].base_stat;
                    VelocidadePokemon.textContent = "Velocidade: " + dados.stats[5].base_stat;

                })
                .catch(erro => {
                    alert('Pokemon não encontrado');
                });
        }

        btnAdicionar.addEventListener('click', SelecionarPokemon);







