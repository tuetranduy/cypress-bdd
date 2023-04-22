const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { ProfilePage } = require("../page_objects/profilePage");
const _ = require("lodash");
const { dataStore } = require("../../fixtures/data-stores");
const { HomePage } = require("../page_objects/homePage");

const profilePage = new ProfilePage();
const homePage = new HomePage();

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
    cy.get(profilePage.elements.usernameInput).invoke('val').then((currentUsername) => {
        expect(newUsername === currentUsername);

        dataStore.username = newUsername;
    })
});

When("I go to Profile > Likes section", () => {
    homePage.goToProfilePage();
    profilePage.goToLikeSection();
    cy.reload();
});

Then("I see the number of likes is 3", () => {
    profilePage.getLikeNumber().then(result => {
        expect(parseInt(result)).equals(3);
    })
});

Then("3 photos appear in Likes section", () => {

    let actualPhotoIds = []

    cy.get(homePage.elements.photoLocator).each(($el, index, $list) => {
        $list.forEach((element) => {
            actualPhotoIds.push(element.attr('href').split('/')[1])
        })
    });

    let actual = actualPhotoIds.sort();
    let expected = dataStore.photoIds.sort();

    console.log("actual: " + actual)
    console.log("expected: " + expected)

    expect(_.isEqual(actual, expected)).is.true

    dataStore.photoIds = []
});

When("I go to created collection", () => {
    homePage.goToProfilePage();
    profilePage.clickEditProfileButton();
    profilePage.goToCollectionSection();
    cy.reload();
});