const { Given, When } = require("@badeball/cypress-cucumber-preprocessor");
const { ProfilePage } = require("../page_objects/profilePage");
const _ = require("lodash")

const profilePage = new ProfilePage();

let newUsername;

When("I click Edit Profile button", () => {
    profilePage.clickEditProfileButton();
});

When("I edit the username field", () => {
    profilePage.getCurrentUsername().then((currentUsername) => {
        newUsername = `${currentUsername.split("_")[0]}_${_.random(1, 999)}`;
        profilePage.fillUsernameInput(newUsername)
    })
});

When("I click the Update Account button", () => {
    profilePage.clickUpdateAccountButton();
});

When("My username is updated correctly", () => {
    profilePage.getCurrentUsername().then((currentUsername) => {
        expect(newUsername === currentUsername);
    })
});