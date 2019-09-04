import MainPage from '../../pages/Main.page';

describe('Google Lucky button', () => {
    it('should work correctly', () => {
        MainPage.open();
        MainPage.lucky('1984');
    });
});