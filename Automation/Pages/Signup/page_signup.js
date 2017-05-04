/**
 * Created by roque on 03/05/17.
 */

var page_signup = function(){

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
        element(by.buttonText('save')).click();
    }
};

module.exports = new page_signup();
