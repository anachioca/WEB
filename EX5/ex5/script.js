/* Ana Laura Chioca Vieira  9866531 */

var app = new Vue({
    el: "#app",
    data: {
        errors: [],
        nome: null,
        sobrenome: null,
        nascimento: null,
        cidade: null,
        signo: null
    },
    methods:{
        /* Função que checa se o formulário está corretamente preenchido */
        checkForm: function(e){
            this.errors = [];

            /* Checa se o usuário preencheu o nome */
            if (!this.nome){
                this.errors.push('Primeiro Nome Obrigatório');
            }

            /* Checa se o usuário preencheu o sobrenome */
            if (!this.sobrenome){
                this.errors.push('Sobrenome Obrigatório');
            }

            /* Checa se o usuário preencheu a data de nascimento */
            if (!this.nascimento){
                this.errors.push('Data de Nascimento Obrigatório');
            }

            /* Checa se o usuário preencheu a cidade */
            if (!this.cidade){
                this.errors.push('Cidade Obrigatório');
            }

            /* Checa se o usuário escolheu um signo */
            if (!this.signo){
                this.errors.push('Escolha uma opção de signo');
            }


            /* Caso o usuário tenha preenchido a data, checa se foi preenchido corretamente */
            if(this.nascimento) {

                var data = this.nascimento.split("/");

                if (data[0] > 31 || data[0] < 1){
                    this.errors.push('O dia do nascimento deve estar entre 1 e 31');
                }

                if (data[1] > 12 || data[1] < 1){
                    this.errors.push('O mês do nascimento deve estar entre 1 e 12');
                }

                if (data[2] > 2020 || data[2] < 1920){
                    this.errors.push('O ano do nascimento deve estar entre 1920 e 2020');
                }

                if (!this.nascimento.includes("/") || this.nascimento.length != 10){
                    this.errors.push('Data de Nascimento deve estar no formato dd/mm/yyyy');
                }

            }

            e.preventDefault();
        }
    }
});