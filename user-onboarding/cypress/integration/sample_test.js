describe('My First Test', function (){
    it('Does not do much', function(){
        expect(true).to.equal(true);
    })
})

describe('My Second Test', function (){
    it('Visits a new site', function(){
        cy.visit("http://localhost:3000/");
    })
})