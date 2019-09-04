import MainPage from '../../pages/Main.page';
import ResultsPage from '../../pages/Results.page';
const assert = require('assert');

describe('Google search', () => {
    it('should work correctly', () => {
        MainPage.open();
        MainPage.search('132');
        assert.equal(ResultsPage.resultStats.isDisplayed(), false, "Results stats is not present");
    });
});