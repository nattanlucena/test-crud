/**
 * Created by roque on 16/05/17.
 */


let page_posts = function(){

    this.enterPagePosts = function(){
        let linkPageposts = element(by.id('nav-link-to-post'));
        linkPageposts.click();
    };
    this.actionAddPosts = function(){
        let actionAdd = element(by.xpath('.//*[@id="link-to-add-post"]/i'));
        actionAdd.click();
    };
    this.inputTextTitle = function(title){
        element(by.id('title')).sendKeys(title);
    };
    this.inputTextContent = function(content){
        element(by.id('content')).sendKeys(content);
    };

    /*var selectDropdownbyNum = function (optionNum ) {
        var dropdownCategories = element(by.css('select-dropdown'));
        dropdownCategories.click().then(function(){
            browser.sleep(1000).then(function(){
                element(by.css('ul.dropdown-menu > li:nth-child(2)')).click().then(function () {
                    browser.waitForAngular();
                    expect(dropdownCategories.getText()).toBe('Culture');
                });
            });
        });
    };*/

};

module.exports = new page_posts();
