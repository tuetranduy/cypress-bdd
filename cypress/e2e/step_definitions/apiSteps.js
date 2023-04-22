const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const { PhotoAPI } = require("../api/photoApi");
const { HomePage } = require("../page_objects/homePage");
const { CollectionAPI } = require("../api/collectionApi");
const { dataStore } = require("../../fixtures/data-stores");

Given("Clean up liked photo", () => {
    const photoApi = new PhotoAPI();
    const homePage = new HomePage();

    homePage.getCurrentUserName().then((currentUsername) => {

        photoApi.getLikedPhotoIds(currentUsername.split('@')[1]).then((response) => {
            if (response.data.length > 0) {
                photoApi.deleteLikedPhotos(response.data);
            }
        });
    });

});

Given("I create a private collection", () => {
    const collectionApi = new CollectionAPI();

    collectionApi.createCollection("Automation Collection").then((result) => {
        dataStore.collectionId = result.id
    })
});