/* Ana Laura Chioca Vieira  9866531 */


/* Função que capitaliza as palavras */
Vue.filter('captalize', function (value){
    return value.charAt(0).toUpperCase() + value.slice(1)
});

var app = new Vue({
    el: "#app",

    data: {
        search: '',
        searchlower: '',
        heroislower: ['mulher maravilha', 'brainiac', 'aquaman', 'ravena', 'batman', 'superman', 'mulher galvão', 'flash', 'lanterna verde', 'shazam'],
    },

    computed: {
        
        /* Função que verifica cada um dos elementos do vetor "heroilower" e verifica se contém a string input, transformada para lowercase.
        Em caso positivo, retorna 1, e o elemento será impresso na tela */
        filteredSearch: function(){
            this.searchlower = this.search.toLowerCase()
            return this.heroislower.filter((heroi) => {
                return heroi.includes(this.searchlower)
            })
        }
    }
});