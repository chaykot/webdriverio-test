import MainPage from '../../pages/Main.page';

describe('Google Lucky button', () => {

    before (() => {
        MainPage.open();
    }); 

    it('should work correctly', () => {        
        MainPage.getLucky('какой-то запрос в google');
    });
});