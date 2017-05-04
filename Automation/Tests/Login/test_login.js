/**
 * Created by roque on 03/05/17.
 */

describe('Test-Crud: Teste Login ', function(){

    var page_login = require('../../Pages/Login/page_login.js');
    var page_home = require('../../Pages/Home/page_home.js');
    var page_signup = require('../../Pages/Signup/page_signup.js');
    var utils = require('../../utils.js');


    beforeEach(function(){
        browser.get(utils.path()+':3000/');
    });

    it('Log in to Application with unregistered user', function(){
        //page_home.enterPageLogin();
        page_login.enterFieldValueLogin('admin');
        page_login.enterFieldValuePassword('admin');
        page_login.clickButtonLogin();
        page_login.validMenssageErro('[object Object]');
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('Make registration with only Login', function(){
      //page_home.enterPageLogin();
        page_login.enterFieldValueLogin('admin');
        page_login.clickButtonLogin();
        page_login.validMenssageErro('[object Object]');
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('Log in to Application with sucess', function(){
        var email = utils.getText()+'@gmail.com';
        var password = utils.getRandomNumber();

        page_home.enterPageSignUp();
        page_signup.inputTextName('Teste Cadastro com sucesso!');
        page_signup.inputTextCpf(utils.getRandomCpf());
        page_signup.inputTextEmail(email);
        page_signup.inputTextPassword(password);
        page_signup.clickButtonSave();
        page_signup.validMenssageSucess('Well done!');
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

        page_home.enterPageLogin();
        page_login.enterFieldValueLogin(email);
        page_login.enterFieldValuePassword(password);
        page_login.clickButtonLogin();
        //page_login.validMenssageSucess('[object Object]');
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/');

    });

});
