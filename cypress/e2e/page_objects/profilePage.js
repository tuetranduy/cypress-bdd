export class ProfilePage {

    elements = {
        editProfileButton: 'Edit profile',
        usernameInput: '#user_username',
        updateAccountButton: 'input[value="Update account"]'
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

    clickUpdateAccountButton() {
        cy.get(this.elements.updateAccountButton).click();
    }

}