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

    it('LOG IN TO APPLICATION WITH UNREGISTERED USER', function(){

        console.log('LOG IN TO APPLICATION WITH UNREGISTERED USER');
        console.log('Logando com dados não cadastrados:' + '\n' + 'Login: ' + 'admin' + '\n' + 'Password: ' + 'admin');

        page_login.waitScreen();
        page_login.clickButtonReset();
        page_login.enterFieldValueLogin('admin');
        page_login.enterFieldValuePassword('admin');
        page_login.clickButtonLogin();

        console.log('Mensagem de erro: '+ 'Opss...');

        page_login.validMenssageErro('Invalid email or password');
        page_login.waitMenssageIsNotDisplayed();

        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('MAKE REGISTRATION WITH ONLY LOGIN', function(){

        console.log('MAKE REGISTRATION WITH ONLY LOGIN');
        console.log('Cadastro com usuário inválido.' +'\n' + 'Login: ' + 'admin');

        page_login.waitScreen();
        page_login.clickButtonReset();
        page_login.enterFieldValueLogin('admin');
        page_login.clickButtonLogin();

        console.log('Mensagem de erro: '+ 'Opss...');

        page_login.validMenssageErro('Invalid email or password');
        page_login.waitMenssageIsNotDisplayed();

        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('LOG IN TO APPLICATION WITH SUCESS', function(){

        console.log('LOG IN TO APPLICATION WITH SUCESS');
        var email = utils.getUserApplication();
        page_home.waitScreen();
        page_home.listEmailScreen(email);
        page_home.logout();
        page_home.waitMenssageIsNotDisplayed();

    });
   it('LOGIN IN TO APPLICATION WITH DELETE USER', function(){

        console.log('LOGIN IN TO APPLICATION WITH DELETE USER');
        var email = utils.getUserApplication();
        page_home.waitScreen();
        page_home.clickDeleteUser(email);
        page_home.logout();
        page_home.waitMenssageIsNotDisplayed();
    });
   it('DUPLICATE EMAIL SIGNUP', function(){
       console.log('DUPLICATE EMAIL SIGNUP');
       var email = utils.getUserApplication();
       page_login.waitMenssageIsNotDisplayed();
       page_home.logout();
       utils.getDuplicateUserApplication(email);
   });
  it('DUPLICATE EMAIL SIGNUP ON HOME SCREEN', function(){
       console.log('DUPLICATE EMAIL SIGNUP ON HOME SCREEN');
       var email = utils.getUserApplication();
       page_home.waitScreen();
       page_home.clickButtonReset();
       page_home.inputTextFullName('Teste com e-mail duplicado');
       page_home.inputTextEmail(email);
       page_home.inputTextCpf(utils.getRandomCpf());
       page_home.clickButtonSave();
   });
});
