/**
 * Created by roque on 04/05/17.
 */


describe('Test-Crud: Teste Signup', function(){

    var page_home = require('../../Pages/Home/page_home.js');
    var page_signup = require('../../Pages/Signup/page_signup.js');
    var utils = require('../../utils.js');

    beforeEach(function(){
        browser.get(utils.path()+':3000/');
    });

    it('To register successfully', function(){
        page_home.enterPageSignUp();
        page_signup.inputTextName('Test signup');
        page_signup.inputTextEmail('felipe.rgcr@gmail.com');
        page_signup.inputTextCpf(utils.getRandom());
        page_signup.inputTextPassword('admin');
        page_signup.clickButtonSave();
        page_signup.validMenssageSucess('[object Object]');
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/signup');

    });


    it('Make registration with only name', function(){
     page_home.enterPageSignUp();
     page_signup.inputTextName('Test Signup - Valid Menssage');
     page_signup.clickButtonSave();
     page_signup.validMenssageErro('[object Object]');
     expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/signup');

    });
});
