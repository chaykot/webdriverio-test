export default class BasePage {

    open(){
        browser.url('/');
        browser.maximizeWindow();
    }
    
}