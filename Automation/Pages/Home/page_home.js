/**
 * Created by roque on 03/05/17.
 */
var page_home = function(){

    this.enterPageLogin = function(){
        var linkPageLogin = element(by.id('nav-link-to-login'));
        linkPageLogin.click();
    }
    this.enterPageHome = function(){
        var linkPageHome = element(by.id('nav-link-to-home'));
        linkPageHome.click();
    }
    this.enterPageSignUp = function(){
        var linkPageSignUp = element(by.id('nav-link-to-signup'));
        linkPageSignUp.click();
    }
    this.validMenssageErro = function(msgErro){
        var menssageErro = element(by.id('toast-container')).getText();
        expect(menssageErro).toBe(msgErro);
    }
    this.inputTextFullName = function(fullName){
        element(by.id('last_name')).sendKeys(fullName);
    };
    this.inputTextEmail = function(email){
        element(by.id('email')).sendKeys(email);
    };

};
module.exports = new page_home();
