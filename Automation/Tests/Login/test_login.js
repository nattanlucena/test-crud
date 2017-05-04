/**
 * Created by roque on 03/05/17.
 */

describe('Test-Crud: Teste Login ', function(){

    var page_login = require('../../Pages/Login/page_login.js');
    var page_home = require('../../Pages/Home/page_home.js');
    var utils = require('../../utils.js');


    beforeEach(function(){
        browser.get(utils.path()+':3000/');
    });

    it('Log in to Application with unregistered user', function(){
        page_home.enterPageLogin();
        page_login.enterFieldValueLogin('admin');
        page_login.enterFieldValuePassword('admin');
        page_login.clickButtonLogin();
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/auth/login');

    });

});
