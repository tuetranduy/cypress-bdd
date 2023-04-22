export class ProfilePage {

    elements = {
        editProfileButton: 'Edit profile',
        usernameInput: '#user_username',
        updateAccountButton: 'input[value="Update account"]',
        likeLink: 'a[data-test="user-nav-link-likes"]',
        collectionLink: 'a[data-test="user-nav-link-collections"]',
        likeNumber: 'a[data-test="user-nav-link-likes"] > span > span'
    }

    clickEditProfileButton() {
        cy.contains(this.elements.editProfileButton).click();
    }

    fillUsernameInput(input) {
        cy.get(this.elements.usernameInput).clear();
        cy.get(this.elements.usernameInput).type(input)
    }

    clickUpdateAccountButton() {
        cy.get(this.elements.updateAccountButton).click();
    }

    goToLikeSection() {
        cy.get(this.elements.likeLink).click();
    }

    getLikeNumber() {
        return cy.get(this.elements.likeNumber).invoke('text')
    }

    goToCollectionSection() {
        cy.get(this.elements.collectionLink).click();
    }

}