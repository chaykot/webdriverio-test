export default class BaseElement {

    constructor(pathToElemet, elementName) {
        this.pathToElemet = pathToElemet;
        this.element = $(pathToElemet);
        this.elementName = elementName;
    }

    click() {
        console.log(`Click '${this.elementName}' with path '${this.pathToElemet}'`)
        this.element.click();
    }

    setText(text) {
        console.log(`Set text '${text}' in '${this.elementName}' with path '${this.pathToElemet}'`)
        this.element.setValue(text);
    }

    isElementVisible() {
        return this.element.isDisplayed();
    }
}

