export class ProfilePage {

    elements = {
        editProfileButton: 'Edit profile',
        usernameInput: '#user_username'
    }

    clickEditProfileButton() {
        cy.contains(this.elements.editProfileButton).click();
    }

    getCurrentUsername() {
        return cy.get(this.elements.usernameInput).invoke('val')
    }

    fillUsernameInput(input) {
        cy.get(this.elements.usernameInput).clear();
        cy.get(this.elements.usernameInput).type(input)
    }

}