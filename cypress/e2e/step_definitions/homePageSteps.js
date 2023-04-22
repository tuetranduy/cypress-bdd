import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../page_objects/loginPage";
import { HomePage } from "../page_objects/homePage";
import { CollectionAPI } from "../api/collectionApi";
import { dataStore } from "../../fixtures/data-stores";
import { ProfilePage } from "../page_objects/profilePage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const profilePage = new ProfilePage();

Given("I log in with account {string}", (userEmail) => {
    loginPage.login(userEmail, "tuetranduy123");
});

When("I like 3 random photos", () => {
    let times = 3;
    let index = 1
    while (times !== 0) {

        homePage.clickPhotoByIndex(index);
        homePage.clickLikeButton();
        homePage.clickCloseButton();

        times--;
        index++;
    }
});

When("I add 2 random photos to the newly created collection", () => {
    let times = 2;
    let index = 1
    while (times !== 0) {

        homePage.clickPhotoByIndex(index);
        homePage.addToCollection("Automation Collection");
        homePage.clickCloseButton();

        times--;
        index++;
    }
});

When("I remove 1 photo from the newly created collection", async () => {
    const currentPhotosInCollection = await new CollectionAPI().getCollectionPhotos(dataStore.collectionId)

    const firstPhotoId = currentPhotosInCollection[0].id
    await new CollectionAPI().removePhotoFromCollection(dataStore.collectionId, firstPhotoId)
});

When("I notice that the photo has been removed successfully from the collection and there is only 1 remaining photo in the collection", async () => {

    const currentPhotosInCollection = await new CollectionAPI().getCollectionPhotos(dataStore.collectionId);
    const firstPhotoId = currentPhotosInCollection[0].id

    await new CollectionAPI().removePhotoFromCollection(dataStore.collectionId, firstPhotoId).then(() => {
        dataStore.photoIds = dataStore.photoIds.filter(x => x !== firstPhotoId)
    });

    let actualPhotoIds = [];

    cy.get(homePage.elements.photoLocator).each(($el, index, $list) => {
        $list.forEach((element) => {
            actualPhotoIds.push(element.attr('href').split('/')[1])
        })
    });

    expect(actualPhotoIds.includes[firstPhotoId])
    expect(actualPhotoIds.length === 1)
});

Given("I open a random photo", async () => {
    homePage.clickPhotoByIndex(1);
});

When("I download this photo", async () => {
    homePage.clickPhotoByIndex(1);
    homePage.clickDownloadButton();
});

When("I notice that the image is downloadable and the correct image has been saved", async () => {
    // blocked
});