/**
 * Created by roque on 04/05/17.
 */

describe('Test-Crud: Teste Home', function(){

    var page_home = require('../../Pages/Home/page_home.js');
    var utils = require('../../utils.js');

    beforeEach(function(){
        browser.get(utils.path() + ':3000/');
    });

    it('To register without permission', function(){

        page_home.waitScreen();
        page_home.inputTextFullName('Test Home');
        page_home.inputTextEmail('felipe.rgcr@gmail.com');
        page_home.inputTextCpf(utils.getRandom());
        page_home.clickButtonSave();
        expect(browser.getCurrentUrl()).toBe(utils.path() + ':3000/');

    });

    /*it('Make registration with only name', function(){
        page_home.enterPageHome();
        page_home.inputTextFullName('Test Home');
        page_home.validMenssageErro('');
    });*/
});
