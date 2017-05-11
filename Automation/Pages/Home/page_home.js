/**
 * Created by roque on 03/05/17.
 */
let page_home = function(){

    this.clickButtonReset = function(){
        element(by.id('btReset')).click();
    };
    this.enterPageLogin = function(){
        let linkPageLogin = element(by.buttonText('Login'));
        linkPageLogin.click();
    };
    this.enterPageHome = function(){
        let linkPageHome = element(by.id('nav-link-to-home'));
        linkPageHome.click();
    };
    this.enterPageSignUp = function(){
        let linkPageSignUp = element(by.id('nav-link-to-signup'));
        linkPageSignUp.click();
    };
    this.validMenssageErro = function(msgErro){
        let menssageErro = element(by.id('toast-container')).getText();
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
        this.listEmailScreen(email);
        let actionCloseEmail = element(by.id('btn-close0'));
        actionCloseEmail.click();
        this.validMenssageDelete('Are you sure?');
        let actionConfirmeDelete = element(by.buttonText('Yes, delete it!'));
        actionConfirmeDelete.click();
        this.confirmDeleteOk('Deleted!');
    };
    this.waitScreen = function(){
        let input = element(by.id('email'));
        expect(input.isEnabled()).toBe(true);
    };
    this.listEmailScreen = function(email){
        element(by.id('search')).clear();
        element(by.id('search')).sendKeys(email);
        element(by.id('btn-search')).click();
    };
    this.validMenssageDelete = function(msg){
        let menssageErro = element(by.id('swal2-title')).getText();
        expect(menssageErro).toBe(msg);
    };
    this.confirmDeleteOk = function(ok){
        let menssageOk = element(by.id('swal2-title')).getText();
        expect(menssageOk).toBe(ok);
        element(by.buttonText('OK')).click();
    };

};
module.exports = new page_home();
