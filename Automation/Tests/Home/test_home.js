/**
 * Created by roque on 04/05/17.
 */

describe('Test-Crud: Tests da Pagina Home', function(){

    var page_home = require('../../Pages/Home/page_home.js');

    beforeEach(function(){
        browser.get('http://localhost:3000/');
    });

    it('To register without permission', function(){
        page_home.enterPageHome();
    });
});
