describe('show random posts: happy flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the page and show the header', () => {
    cy.get('header h1').contains('Random posts');
  });

  it('should have a h2 to describe the application', () => {
    cy.get('h2').contains(
      'Below is a representation of 100 random posts in a square view. Click on the title to toggle with ID :)',
    );
  });

  it('should load the board and render the posts', () => {
    cy.get('app-square').should('have.length', 100);
  });

  it('should load the title on load of the individual components', () => {
    cy.get('.square--text')
      .first()
      .contains(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      );
  });

  it('should show the id when clicked on the title', () => {
    cy.get('.square--text').first().click();
    cy.get('.square--text').first().contains(1);
  });

  it('should show the title when clicked on the id', () => {
    cy.get('.square--text').first().click();
    cy.get('.square--text').first().contains(1);

    cy.get('.square--text').first().click();
    cy.get('.square--text')
      .first()
      .contains(
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      );
  });
});
