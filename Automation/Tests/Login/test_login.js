/**
 * Created by roque on 03/05/17.
 */

describe('Test-Crud: Teste Login ', function(){

    var page_login = require('../../Pages/Login/page_login.js');
    var page_home = require('../../Pages/Home/page_home.js');

    beforeEach(function(){
        browser.get('http://localhost:3000/');
    });

    it('Logar na Aplicação com Sucesso', function(){
        page_home.enterPageLogin();
        page_login.enterFieldValueLogin('Admin');
        page_login.clickLogin();
    });
});
