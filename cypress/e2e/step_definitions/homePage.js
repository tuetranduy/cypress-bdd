const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { LoginPage } = require("../page_objects/loginPage");

const loginPage = new LoginPage();

Given("I log in with account {string}", (userEmail) => {
    loginPage.login(userEmail, "tuetranduy123");
});