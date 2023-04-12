import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../page_objects/loginPage";

const loginPage = new LoginPage();

Given("I log in with account {string}", (userEmail) => {
    loginPage.login(userEmail);
});
    
