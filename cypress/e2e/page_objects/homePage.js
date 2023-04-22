import { dataStore } from "../../fixtures/data-stores";

export class HomePage {

    elements = {
        personalMenu: 'button[title="Your personal menu button"]',
        viewProfile: 'View profile',
        logoutLink: '[href="/logout"]',
        photoLocator: 'figure[itemprop="image"] a[itemprop="contentUrl"]',
        likeButton: 'header button[title="Like"]',
        addToCollectionButton: 'header button[title="Add to collection"]',
        downloadButton: 'header a[title="Download photo"]'
    }

    goToProfilePage() {
        cy.get(this.elements.personalMenu).click();
        cy.contains(this.elements.viewProfile).click();
    }

    getCurrentUserName() {
        cy.get(this.elements.personalMenu).click();
        return cy.get(this.elements.logoutLink).invoke('text')
    }

    clickPhotoByIndex(index) {
        cy.get(this.elements.photoLocator).eq(index).click()
    }

    clickLikeButton() {
        cy.get(this.elements.likeButton).click();

        addPhotoIdsToDataStore()
    }

    clickCloseButton() {
        cy.get(`button`)
            .contains('svg', 'An X shape')
            .parent('button')
            .click()
    }

    addToCollection(collectionName) {
        cy.get(this.elements.addToCollectionButton).click();
        cy.contains(collectionName).click();
    }

    addPhotoIdsToDataStore() {
        cy.url().then((url) => {
            console.log(url);
            dataStore.photoIds.push(url.substring(url.lastIndexOf('/') + 1));
            console.log(dataStore.photoIds)
        })
    }

    clickDownloadButton() {
        cy.get(this.elements.downloadButton).click()
    }
}