describe('test-crud: Application cadastro testing',function(){
    browser.driver.get('http://localhost:3000');
    browser.ignoreSynchronization = true;
    var inputUser = browser.findElement(by.id('last_name'));
    var btnSalvar = element(by.buttonText('save'));
    inputUser.sendKeys('admin');
    btnSalvar.click();

    expect(inputUser.getText()).toContain('admin');
});