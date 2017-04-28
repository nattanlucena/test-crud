/**
 * Created by roque on 28/04/17.
 */



describe('test-crud: Application home testing',function(){
    browser.driver.get('http://localhost:3000');
    browser.ignoreSynchronization = true;

    var titleHome = browser.findElement(by.id('main-menu'));
    expect(titleHome.getText()).toContain('Test CRUD');
});