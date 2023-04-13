export class HomePage {

    elements = {
        personalMenu: 'button[title="Your personal menu button"]',
        viewProfile: 'View profile'
    }

    goToProfilePage() {
        cy.get(this.elements.personalMenu).click();
        cy.contains(this.elements.viewProfile).click();
    }

}