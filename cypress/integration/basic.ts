it.skip('should perform a basic search', () => {
    cy.visit('https://www.google.com/');
    cy.get(`[name="q"]`)
        .type('dummy')
});

it('should perform a basic search', () => {
    cy.visit('https://www.templafy.com//');
    cy.get("#search-toggle-label").click()
    cy.get('#search-form-input').type("hello")
});