import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../page_objects/homePage";

const homePage = new HomePage();

Given("I go to the Profile page", () => {
    homePage.goToProfilePage();
});