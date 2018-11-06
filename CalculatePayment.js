context('Calculator tests with cypress', () => {
        beforeEach(() => {
            cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        })

    it('Check if the user is able to navigate to compare rates page ', function(){
       // cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get(':nth-child(2) > .button').click()
        cy.url().should('include', 'loans/auto-loans/rates/')

    })



    it('check amortization schedule is displayed properly', function(){
        //cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(40000)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.calculator__amortization-link > span').scrollIntoView()
        cy.get('.calculator__amortization-link > span').click()
        cy.get('.\\+border > .table').should('be.visible')


    })


    it('Calculate monthly payment with amount value between 1000-100,000', function(){
       // cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(40000)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.numeral').scrollIntoView()
        cy.get('.\\+border-bottom > :nth-child(2)').contains("$40,000").should('be.visible')


    })

    it('Calculate monthly payment with amount value below 1000 ', function(){
        //cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(999)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.numeral').scrollIntoView()
        //the default value for $15000 as principle should not change
        //var principal_locator = ".\+border-bottom > :nth-child(2)"
        cy.get('.\\+border-bottom > :nth-child(2)').contains("$15,000").should('be.visible')

    })

    it('Calculate monthly payment with amount value above  100,001 ', function(){
        //cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(101000)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.numeral').scrollIntoView()
        //the default value for $15000 as principle should not change
        //var principal_locator = ".\+border-bottom > :nth-child(2)"
        cy.get('.\\+border-bottom > :nth-child(2)').contains("$15,000").should('be.visible')

    })


    it('Calculate monthly payment with amount value above  1000 ', function(){
        //cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(1001)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.numeral').scrollIntoView()
        //the default value for $15000 as principle should not change
        //var principal_locator = ".\+border-bottom > :nth-child(2)"
        cy.get('.\\+border-bottom > :nth-child(2)').contains("$1,001").should('be.visible')

    })


    it('Calculate monthly payment with amount value above  99,999 ', function(){
        //cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
        cy.get('[data-cy=amount]').clear()
        cy.get('[data-cy=amount]').type(99999)
        cy.get('.calculator__gray-bg > :nth-child(2) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(2) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__selected > .dropdown__arrow').click()
        cy.get(':nth-child(3) > .dropdown > .dropdown__list-wrapper > .dropdown__list-container > .list-bare > :nth-child(1)').click()
        cy.get('.size-3of4 > :nth-child(1) > .br-amount > .gearbox-input').type("4.1")
        cy.get('.size-5of8 > :nth-child(1)').click()
        cy.get('.numeral').scrollIntoView()
        //the default value for $15000 as principle should not change
        //var principal_locator = ".\+border-bottom > :nth-child(2)"
        cy.get('.\\+border-bottom > :nth-child(2)').contains("$99,999").should('be.visible')

    })
})
