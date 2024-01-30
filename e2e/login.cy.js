const locators = require('../fixtures/locators.json')

describe("Login functionality - Gallery App", ()=>{
    it("Unsuccessfull login - wrong email" , ()=>{
        cy.visit("/login");
        cy.url().should('contain', '/login');
        cy.get('h1').should('have.text' , 'Please login');
        cy.get('label').eq(0).should('have.text', 'Email');
        cy.get('label').eq(1).should('have.text', 'Password');
        cy.get("button").should('have.text', "Submit");
        cy.get("#email").
        should('be.empty').
        type("peraps@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();
        cy.get('p').contains('Bad Credentials').should('be.visible').and('contain','Bad Credentials');
        cy.url().should('contain', '/login');
    });


    it("Unsuccessfull login - empty password" , ()=>{
        cy.visit(locators.loginPage.firstNameInputField);
        cy.get(locators.loginPage.emailInputField);
        cy.get(locators.loginPage.passwordInputField);
        cy.get(locators.loginPage.submitButton);
    });
    it("Unsuccessfull login - empty email" , ()=>{
        cy.visit("/login");
        cy.get("#email").type(" ");
        cy.get("#password").type("petrovic123");
        cy.get("button").click();
    });
    it("Unsuccessfull login - wrong password" , ()=>{
        cy.visit("/login");
        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("petrovic123");
        cy.get("button").click();
    });
    it("Successfull login" , ()=>{
        cy.visit("/login");
        cy.get('h1').should('have.text' , 'Please login');
        cy.get('label').eq(0).should('have.text', 'Email');
        cy.get('label').eq(1).should('have.text', 'Password');
        cy.get("#email").type("peraperic12345@gmail.com").should("have.value" , "peraperic12345@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").click();
        cy.get("a").contains('Logout').click();
        //cy.get('a[role="button "]').click();
        cy.url().should('not.contain', '/login');
    });
});
