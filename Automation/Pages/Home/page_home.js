/**
 * Created by roque on 03/05/17.
 */
var page_home = function(){

    this.enterPageLogin = function(){
        var linkPageLogin = element(by.buttonText('Login'));
        linkPageLogin.click();
    };
    this.enterPageHome = function(){
        var linkPageHome = element(by.id('nav-link-to-home'));
        linkPageHome.click();
    };
    this.enterPageSignUp = function(){
        var linkPageSignUp = element(by.id('nav-link-to-signup'));
        linkPageSignUp.click();
    };
    this.validMenssageErro = function(msgErro){
        var menssageErro = element(by.id('toast-container')).getText();
        expect(menssageErro).toBe(msgErro);
    };
    this.inputTextFullName = function(fullName){
        element(by.id('name')).sendKeys(fullName);
    };
    this.inputTextEmail = function(email){
        element(by.id('email')).sendKeys(email);
    };
    this.inputTextCpf = function(cpf){
        element(by.id('cpf')).sendKeys(cpf);
    };
    this.clickButtonSave = function(){
        element(by.id('btSave')).click();
    };
    this.logout = function(){
        element(by.id('nav-link-to-logout')).click();
    };
    this.clickDeleteUser = function(email){
        this.listEmailScreen(email)
        var actionCloseEmail = element(by.id('btn-close0'));
        actionCloseEmail.click();
    };
    this.waitScreen = function(){
        var input = element(by.id('email'));
        expect(input.isEnabled()).toBe(true);
    };
    this.listEmailScreen = function(email){
        element(by.id('search')).sendKeys(email);
    };

};
module.exports = new page_home();
