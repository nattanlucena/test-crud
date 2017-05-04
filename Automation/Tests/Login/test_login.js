/**
 * Created by roque on 03/05/17.
 */

describe('Test-Crud: Teste Login ', function(){

    var page_login = require('../../Pages/Login/page_login.js');
    var page_home = require('../../Pages/Home/page_home.js');
    var page_signup = require('../../Pages/Signup/page_signup.js');

    beforeEach(function(){
        browser.get('http://localhost:3000/');
    });

    it('Logar na Aplicação com usuario não cadastrado', function(){
        page_home.enterPageLogin();
        page_login.enterFieldValueLogin('admin');
        page_login.enterFieldValuePassword('admin');
        page_login.clickButtonLogin();
    });

    // it('Realizar Cadastro e Logar na aplicação', function(){
    //     page_home.enterPageSignUp();
    //     page_signup.inputTextName('Felipe');
    //     page_signup.inputTextEmail('felipe.rgcr@gmail.com');
    //     page_signup.inputTextCpf('09705063419');
    //     page_signup.inputTextPassword('admin');
    //     page_signup.clickButtonSave();
    // });

});
