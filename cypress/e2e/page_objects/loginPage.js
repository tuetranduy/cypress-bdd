export class LoginPage {

    elements = {
        homePageLoginBtn: 'Log in',
        emailInput: '#user_email',
        passwordInput: '#user_password',
        loginBtn: 'input[name="commit"]'
    }

    login(username, password) {
        cy.visit("/");
        cy.contains(this.elements.homePageLoginBtn).click();
        cy.get(this.elements.emailInput).type(username);
        cy.get(this.elements.passwordInput).type(password);
        cy.get(this.elements.loginBtn).click();
    }
}