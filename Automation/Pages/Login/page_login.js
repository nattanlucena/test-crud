/**
 * Created by roque on 03/05/17.
 */

var page_login = function(){

    this.enterFieldValueLogin = function(value){
        element(by.id('username')).sendKeys(value);
    }

    this.enterFieldValuePassword = function(value){
        element(by.id('password')).sendKeys(value);
    }

    this.clickLogin = function(){
        element(by.buttonText('Login')).click();
    }
};

module.exports = new page_login();
