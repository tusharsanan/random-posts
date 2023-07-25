describe('show random posts: unhappy flow', () => {
  it('should load the page and show the header', () => {
    cy.visit('/');
    cy.get('header h1').contains('Random posts');
  });

  it('shows an error message in case something went wrong while fetching the posts from the API', () => {
    cy.intercept('GET', '**/posts', { statusCode: 500 }).as('getServerFailure');

    cy.visit('/');

    cy.get('.generic_error').contains(
      "Sorry. It's not you. It is us. Please reload the page or try again later!",
    );
  });
});
