/**
 * Created by roque on 03/05/17.
 */
var page_home = function(){

    this.enterPageLogin = function(){
        element(by.css('.ng-binding a')).click();
    }

};
module.exports = new page_home();
