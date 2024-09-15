describe('My First Test', function (){
    it('Does not do much', function(){
        expect(true).to.equal(true);
    })
})

describe('My Second Test', function (){
    it('Visits a new site', function(){
        cy.visit("http://localhost:3000/");
    })

 describe('Filling out the input', function(){
     it('Takes input', function(){
        cy.get('[name="user"]').type('Larken').should('exist')
     })
 })

 describe('Filling out input', function(){
     it ('Takes input', function(){
        cy.get('[name="email"]').type('LarkenSings@gmail.com').should('exist')
     })
 })

 describe('Password input', function(){
     it('Takes input', function(){
        cy.get('[name="password"]').type('Cats1234').should('exist')
     })
 })

 describe('Terms of service checkbox', function(){
     it('can check in agreement', function(){
        cy.get('[type="checkbox"]').check().should('exist')
     })
 })

 describe('Form submits', function(){
     it('Submits input', function(){
         cy.get('form').submit()
     })
 } )
})
