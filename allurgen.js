const allureReport = require('allure-commandline');

const generation = allureReport(['generate','--clean','./allure-results']);
generation.on('exit', function (exitCode) {
    console.log('Generation is finished with code:', exitCode);
});