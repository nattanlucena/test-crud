/**
 * Created by roque on 03/05/17.
 */

var page_login = function(){

    this.enterFieldValueLogin = function(value){
        element(by.id('username')).clear();
        element(by.id('username')).sendKeys(value);
    }

    this.enterFieldValuePassword = function(value){
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(value);
    }

    this.clickButtonLogin = function(){
        element(by.buttonText('Login')).click();
    }
    this.validMenssageErro = function(msgErro){
        var menssageErro = element(by.id('toast-container')).getText();
        expect(menssageErro).toBe(msgErro);
    }
    this.validMenssageSucess = function(msgSucess){
        var menssageErro = element(by.id('toast-container')).getText();
        expect(menssageErro).toBe(msgSucess);
    }
};

module.exports = new page_login();
