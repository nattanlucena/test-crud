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

        browser.sleep(1000);

        page_home.enterPageSignUp();
        page_signup.waitScreen();
        page_signup.clickButtonReset();
        page_signup.inputTextName('Teste Cadastro com sucesso!');
        page_signup.inputTextCpf(this.getRandomCpf());
        page_signup.inputTextEmail(email);
        page_signup.inputTextPassword(password);
        page_signup.clickButtonSave();
        page_signup.validMenssageSucess('Success');

        browser.sleep(1000);

        expect(browser.getCurrentUrl()).toBe(this.path() + ':3000/');

        console.log('Iniciando o login com os Dados:' + '\n' + 'Login:' + email + '\n' + 'Password:' + password);

        console.log('Usuário cadastrado e logado na aplicação!');

        return ''+email;
    },

    getDuplicateUserApplication: function(email){

        var page_login = require('./Pages/Login/page_login.js');
        var page_home = require('./Pages/Home/page_home.js');
        var page_signup = require('./Pages/Signup/page_signup.js');

        browser.get(this.path()+':3000/');

        var password = this.getRandomNumber();

        console.log('Iniciando cadastro com email duplicado na tela de Signup');

        browser.sleep(1000);

        page_home.enterPageSignUp();
        page_signup.waitScreen();
        page_signup.clickButtonReset();
        page_signup.inputTextName('Teste Cadastro Duplicado sem Sucesso!');
        page_signup.inputTextCpf(this.getRandomCpf());
        page_signup.inputTextEmail(email);
        page_signup.inputTextPassword(password);
        page_signup.clickButtonSave();
        page_signup.validMenssageErro('Error');

        browser.sleep(1000);

        console.log('Usuário com e-mail duplicado.');

        return ''+email;
    }

}
