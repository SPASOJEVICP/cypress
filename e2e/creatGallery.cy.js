it("Succsessfull creation of gallery", ()=>{
    //Login

    before(() => {
        cy.visit("/login");
        cy.get("#email").type("peraperic12345@gmail.com");
        cy.get("#password").type("pera12345");
        cy.get("button").contains('Submit').click()

    })
    


    
    cy.visit("/login");
    cy.get("#email").type("peraperic12345@gmail.com");
    cy.get("#password").type("pera12345");
    cy.get("button").contains('Submit').click()
    //Creation of new gallery
    cy.get("a[href='/create']").click();
    cy.url().should("contain" , "/create");
    cy.get("h1").should("contain" , "Create Gallery");
    cy.get("label").eq(0).should("have.text" , "Title:");
    cy.get("label").eq(1).should("have.text" , "Descriptions:");
    cy.get("label").eq(2).should("contain" , "Images:");
    cy.get("#title").type("Cypress test title");
    cy.get("#description").type("ajdbasjdbajd");
    cy.get("input[placeholder='image url']").type("https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045_1280.jpg");
    cy.get("button").contains("Submit").click();
    //Redirecting to All Galleries page
    cy.url().should("not.contain" , "/create");
    cy.get("h1").should('contain', "All Galleries");
});