/// <reference types="Cypress" />

describe("Register vie API", () => {
    it("Succesfull register via API", () => {

        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/register",
            method: "POST",
            body: {
                email: "petarpetrovic122345@gmail.com",
                firs_name: "Petar",
                last_name: "Petrovic",
                password: "petrovic1234",
                password_confirmation: "petrovic1234",
                terms_and_conditions: "true"
            }
        }).its("body").then((resp) => {
            let respToken = resp.access_token;
            let tokenType = resp.token_type;
            expect(respToken).to.be.a("string");
            expect(tokenType).eq("bearer");

            
        })
        

    })
})