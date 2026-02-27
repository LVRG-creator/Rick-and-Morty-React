Cypress.Commands.add('searchCharacter', (name) => {
    cy.get('input[placeholder="Type a character name..."]').type(name);
    cy.get("button[type=submit]").click()
    cy.get(".col-md-3", { timeout: 8000 }).should("exist");
    });

describe("Characters Page", () => {

    // beforeEach (() => {
    //     cy.visit("/character")
    // })
});

it("shows the Search Characters heading", () => {
    cy.visit('/character')
    cy.contains("Search Characters").should("be.visible");
  });

it("allows typing into the search input", () => {
    cy.visit('/character')
    cy.get('input[placeholder="Type a character name..."]')
      .type("rick")
      .should("have.value", "rick");
  });


it('should render a character corresponding to the user search', () => {
    cy.visit('/character')
    cy.get('input[placeholder="Type a character name..."]').type("rick")
    cy.get("button[type=submit]").click()
    cy.get(".col-md-3", { timeout: 8000 }).should("exist");
    });
    
it("shows error message when no characters are found", () => {
    cy.visit('/character')
    cy.get('input[placeholder="Type a character name..."]').type("asdfasdf");
    cy.contains("Search").click();

    cy.contains("No characters found", { timeout: 8000 }).should("exist");
  });

it("navigates to character detail page", () => {
    cy.visit('/character')
    cy.searchCharacter("rick");

    cy.contains("View Details").first().click();

    cy.url().should("include", "/character/");
  });

  it("can add and remove a favorite", () => {
    cy.visit('/character')
    cy.searchCharacter("rick");

    cy.contains("Add Fav").first().click();
    cy.contains("Remove Fav").should("exist");

    cy.contains("Remove Fav").first().click();
    cy.contains("Add Fav").should("exist");
  });
//it('should have a view details button', () => {
    //get == querySelector('input') 1st inst <input />
    


// test if button is there 
// test a few specific characters
// if button navigates correctly
// search function; there is nothing right now for misspelling. you just get search


