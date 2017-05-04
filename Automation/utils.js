/**
 * Created by roque on 04/05/17.
 */
module.exports = {
    /*
     * @Author: Roque
     *
     */
    path: function () {
        //IP local
        return "http://localhost";
    },


    /*
     * @Author: Roque
     * Generates random value, eg: if you put 10000 a number will be generated up to 1000;
     */
    getValorLimitadoParametro: function (paramvalor) {
        return Math.floor(Math.random() * paramvalor);
    },

    /*
     * @Author: Roque
     * Function for generate aleatory number cpf
     */
    getRandomCpf: function () {
        var sort = Math.floor(Math.random() * 90000000000 + 10000000000);
        return ''+sort;
    },

    /*
     * @Author: Roque
     * Function for generate aleatory number
     */
    getRandomNumber: function () {
        var sort = Math.floor(Math.random() * 90000 + 10000);
        return ''+sort;
    },

    /**
     *
     * @Author: Roque
     * @returns Generates
     */
    getText: function(){
        var letras = 'Teste';
        var aleatorio = '';
        for (var i = 0; i < 4; i++) {
            var rnum = Math.floor(Math.random() * letras.length);
            aleatorio += letras.substring(rnum, rnum + 1);
        }
        return ''+aleatorio;
    }
    ,
}
