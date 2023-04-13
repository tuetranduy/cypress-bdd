const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
const { ProfilePage } = require("../page_objects/profilePage");
const _ = require("lodash")

const profilePage = new ProfilePage();

When("I click Edit Profile button", () => {
    profilePage.clickEditProfileButton();
});

When("I edit the username field", () => {
    profilePage.getCurrentUsername().then((currentUsername) => {
        profilePage.fillUsernameInput(`${currentUsername.split("_")[0]}_${_.random(1, 999)}`)
    })
});