describe ('HomePage.jsx', () => {
});

    it('navigates correctly between pages', () => {
        cy.visit('/')
        cy.get('nav a').contains('Home').click();
        cy.url().should('include', '/');
    
        cy.get('nav a').contains('About').click();
        cy.url().should('include', '/about');

        cy.get('nav a').contains('Character').click();
        cy.url().should('include', '/character');
        
        cy.get('nav a').contains('Favorites').click();
        cy.url().should('include', '/favorites');

});

