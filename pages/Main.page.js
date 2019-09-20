import BasePage from '../pages/Base.page'
import Element from '../elements/Element';

class MainPage extends BasePage {

    get searchTb() {
        return new Element("[name='q']", "Search text box");
    }

    get searchBtn() {
        return new Element("//div[@class='VlcLAe']//input[@name='btnK']", "Search button");
    }

    get luckyBtn() {
        return new Element("//div[@class='VlcLAe']//input[@name='btnI']", "Luck button");
    }

    search(text) {
        this.searchTb.setText(text);
        this.searchBtn.click();
    }

    getLucky(text) {
        this.searchTb.setText(text);
        this.luckyBtn.click();
    }
}

export default new MainPage();