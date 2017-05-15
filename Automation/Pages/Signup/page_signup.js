/**
 * Created by roque on 03/05/17.
 */

var page_signup = function(){

    this.clickButtonReset = function(){
        element(by.id('btn-reset')).click();
    };
    this.inputTextName = function(name){
        element(by.id('name')).sendKeys(name);
    };
    this.inputTextEmail = function(email){
        element(by.id('email')).sendKeys(email);
    };
    this.inputTextCpf = function(cpf){
        element(by.id('cpf')).sendKeys(cpf);
    };
    this.inputTextPassword = function(password){
        element(by.id('password')).sendKeys(password);
    };
    this.clickButtonSave = function(){
        element(by.id('btn-save')).click();
    }
    this.validMenssageErro = function(msgErro){
        var menssageErro = element(by.id('swal2-title')).getText();
        expect(menssageErro).toBe(msgErro);
    }
    this.validMenssageSucess = function(msgSucess){
        var menssageErro = element(by.id('swal2-title')).getText();
        expect(menssageErro).toBe(msgSucess);
    }
    this.waitScreen = function(){
        var input = element(by.id('email'));
        expect(input.isEnabled()).toBe(true);
    };
    this.waitMenssageIsNotDisplayed = function(){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf(element(by.id('swal2-title'))),5000);
    };
};

module.exports = new page_signup();
