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
     * @returns Generate text
     */
    getText: function(){
        var letras = 'Teste';
        var sort = Math.floor(Math.random() * 900 + 100);
        return ''+letras+sort;
    },


    /**
     * @Author: Roque
     * @returns User registration
     */

    getUserApplication: function(){

        var page_login = require('./Pages/Login/page_login.js');
        var page_home = require('./Pages/Home/page_home.js');
        var page_signup = require('./Pages/Signup/page_signup.js');

        console.log('REGISTERING THE VALID USER AND LOGGIN INTO APPLICATION');

        browser.get(this.path()+':3000/');

        var email = this.getText()+'@gmail.com';
        var password = this.getRandomNumber();

        console.log('Iniciando cadastro na tela de Signup');

        page_home.enterPageSignUp();
        page_signup.waitScreen();
        page_signup.inputTextName('Teste Cadastro com sucesso!');
        page_signup.inputTextCpf(this.getRandomCpf());
        page_signup.inputTextEmail(email);
        page_signup.inputTextPassword(password);
        page_signup.clickButtonSave();
        page_signup.validMenssageSucess('Well done!');
        expect(browser.getCurrentUrl()).toBe(this.path() + ':3000/auth/login');

        console.log('Iniciando o login com os Dados:' + '\n' + 'Login:' + email + '\n' + 'Password:' + password);

        page_home.enterPageLogin();
        page_login.enterFieldValueLogin(email);
        page_login.enterFieldValuePassword(password);
        page_login.clickButtonLogin();
        page_home.waitScreen();

        console.log('Usuário cadastrado e logado na aplicação!');

        return ''+email;
    }

}
