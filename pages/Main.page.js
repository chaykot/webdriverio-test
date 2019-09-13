class MainPage {
    get searchTb() {
        return $("[name='q']")
    }

    get searchBtn() {
        return $("[name='btnK']")
    }

    get luckyBtn() {
        return $("[name='btnI']")
    }

    open() {
        browser.url('/');
        browser.maximizeWindow();
    }

    search(text) {
        this.searchTb.setValue(text);
        this.searchBtn.scrollIntoView();
        this.searchBtn.click();
    }

    getLucky(text) {
        this.searchTb.setValue(text);
        this.luckyBtn.scrollIntoView();
        this.luckyBtn.click();
    }
}

export default new MainPage();