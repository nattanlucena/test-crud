/**
 * Created by roque on 03/05/17.
 */

var page_login = function(){

    this.enterFieldValueLogin = function(value){
        element(by.id('email')).clear();
        element(by.id('email')).sendKeys(value);
    }

    this.enterFieldValuePassword = function(value){
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(value);
    }

    this.clickButtonLogin = function(){
        element(by.id('btn-login')).click();
    }
    this.validMenssageErro = function(msgErro){
        var menssageErro = element(by.id('toast-containe')).getText();
        expect(menssageErro).toBe(msgErro);
    }
    this.validMenssageSucess = function(msgSucess){
        var menssageErro = element(by.id('toast-container')).getText();
        expect(menssageErro).toBe(msgSucess);
    }
    this.waitScreen = function(){
        var input = element(by.id('email'));
        expect(input.isEnabled()).toBe(true);
    }
};

module.exports = new page_login();
