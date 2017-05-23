/**
 * Created by roque on 03/05/17.
 */

describe('Test-Crud: Teste Login ', function(){


    let page_login = require('../../Pages/Login/page_login.js');
    let page_home = require('../../Pages/Home/page_home.js');
    let page_signup = require('../../Pages/Signup/page_signup.js');
    let page_posts = require('../../Pages/Posts/page_posts.js');
    let utils = require('../../utils.js');
    let dbUsers = require('../../../api/config/db-automation/db-collections/user-factory');


    beforeEach(function(){
        browser.get(utils.path()+':3000/');
    });

    it('LOG IN TO APPLICATION WITH UNREGISTERED USER', function(){

        console.log('LOG IN TO APPLICATION WITH UNREGISTERED USER');
        console.log('Logando com dados não cadastrados:' + '\n' + 'Login: ' + 'admin' + '\n' + 'Password: ' + 'admin');

        let users = [];
        users = dbUsers.generateUsers();

        page_login.waitScreen();
        page_login.clickButtonReset();
        page_login.enterFieldValueLogin(users[1].email);
        page_login.enterFieldValuePassword('123');
        page_login.clickButtonLogin();

        console.log('Mensagem de erro: '+ 'Opss...');

        //page_login.validMenssageErro('Invalid email or password');
        //page_login.waitMenssageIsNotDisplayed();

        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('MAKE REGISTRATION WITH ONLY LOGIN', function(){

        console.log('MAKE REGISTRATION WITH ONLY LOGIN');
        console.log('Cadastro com usuário inválido.' +'\n' + 'Login: ' + 'admin');

        let users = [];
        users = dbUsers.generateUsers();

        page_login.waitScreen();
        page_login.clickButtonReset();
        page_login.enterFieldValueLogin(users[1].email);
        page_login.clickButtonLogin();

        console.log('Mensagem de erro: '+ 'Opss...');

        // page_login.validMenssageErro('Invalid email or password');
        // page_login.waitMenssageIsNotDisplayed();

        //expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });
    it('LOG IN TO APPLICATION WITH SUCESS', function(){

        console.log('LOG IN TO APPLICATION WITH SUCESS');
        var email = utils.getUserApplication();
        page_home.waitScreen();
        page_home.listEmailScreen(email);
        page_home.logout();
        //page_home.waitMenssageIsNotDisplayed();

    });
   /*it('LOGIN IN TO APPLICATION WITH DELETE USER', function(){

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
    it('Teste', function(){

        console.log('Teste');
        var email = utils.getUserApplication();
        page_home.waitScreen();
        page_posts.enterPagePosts();
        page_posts.actionAddPosts();
        page_posts.inputTextTitle('Felipe Linduh');
        page_posts.inputTextContent('Teste post');
        // page_home.logout();
        // page_home.waitMenssageIsNotDisplayed();

    });*/
    /*it('Teste conexão', function(){
        let users = [];
        users = dbUsers.generateUsers();
        console.log(users);
    });*/
});
