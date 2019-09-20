import Element from '../elements/Element';

class ResultsPage {
    get resultStats() {
        return new Element('#resultStats', "Results stats Label")
    }

    isResultStatsPresent(){
        return this.resultStats.isElementVisible();
    }
}

export default new ResultsPage();