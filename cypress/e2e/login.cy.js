/// <reference types="Cypress" />

describe("Login functionality - Gallery App", () => {
    it("Successfull login" , ()=>{
        cy.visit("https://gallery-app.vivifyideas.com/login");
        cy.url().should('contain','/login');

        cy.get('h1').should('have.text','Login');
        cy.get("label").eq(0).should("have text", "email");
        cy.get("label").eq(1).should("have text", "password");
        

        
        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();
        cy.get("a").contains('Logout').click();
        //cy.get('a[role="button "]').click();
    });


})