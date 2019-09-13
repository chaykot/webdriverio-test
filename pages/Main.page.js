class MainPage {
    get searchTb() {
        return $("[name='q']")
    }

    get searchBtn() {
        return $("//div[@class='VlcLAe']//input[@name='btnK']")
    }

    get luckyBtn() {
        return $("//div[@class='VlcLAe']//input[@name='btnI']")
    }

    open() {
        browser.url('/');
        browser.maximizeWindow();
    }

    search(text) {
        this.searchTb.setValue(text);
        this.searchBtn.click();
    }

    getLucky(text) {
        this.searchTb.setValue(text);
        this.luckyBtn.click();
    }
}

export default new MainPage();