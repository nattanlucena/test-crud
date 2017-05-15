/**
 * Created by roque on 03/05/17.
 */

let page_login = function(){

    this.clickButtonReset = function(){
        element(by.id('btn-reset')).click();
    };
    this.enterFieldValueLogin = function(value){
        element(by.id('email')).sendKeys(value);
    };
    this.enterFieldValuePassword = function(value){
        element(by.id('password')).sendKeys(value);
    };
    this.clickButtonLogin = function(){
        element(by.id('btn-login')).click();
    };
    this.validMenssageErro = function(msgErro){
        let menssageErro = element(by.id('swal2-content')).getText();
        expect(menssageErro).toBe(msgErro);
    };
    this.validMenssageSucess = function(msgSucess){
        let menssageErro = element(by.id('swal2-title')).getText();
        expect(menssageErro).toBe(msgSucess);
    };
    this.waitScreen = function(){
        let input = element(by.id('email'));
        expect(input.isEnabled()).toBe(true);
    };
    this.confirmOk = function(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.visibilityOf(element(by.buttonText('OK'))),3000);
        element(by.buttonText('OK')).click();
    };
    this.waitMenssageIsNotDisplayed = function(){
        let EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id('swal2-title'))),3000);
    };
};

module.exports = new page_login();
