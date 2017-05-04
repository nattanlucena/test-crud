/**
 * Created by roque on 03/05/17.
 */

var page_signup = function(){

    this.inputTextName = function(name){
        element(by.id('name')).clear();
        element(by.id('name')).sendKeys(name);
    };
    this.inputTextEmail = function(email){
        element(by.id('email')).clear();
        element(by.id('email')).sendKeys(email);
    };
    this.inputTextCpf = function(cpf){
        element(by.id('cpf')).clear();
        element(by.id('cpf')).sendKeys(cpf);
    };
    this.inputTextPassword = function(password){
        element(by.id('password')).clear();
        element(by.id('password')).sendKeys(password);
    };
    this.clickButtonSave = function(){
        element(by.buttonText('save')).click();
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

module.exports = new page_signup();
