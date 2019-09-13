import MainPage from '../../pages/Main.page';

describe('Google Lucky button', () => {
    it('should work correctly', () => {
        MainPage.open();
        MainPage.getLucky('1984 скачать книгу');
    });
});