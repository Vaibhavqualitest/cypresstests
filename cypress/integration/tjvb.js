describe("This is Group of Testcases", ()=>{
    it("Loading Site", ()=>{
        cy.visit("https://tanuj-vishnoi.github.io/site/examples/actions")
        cy.log("Successfully Visited")
    })

    it("Text Test", ()=>{
        cy.get('#text').clear().type("Vaibhav")
        cy.get("#result_button_text").click()
        cy.get('#clear_result_button_text').should('be.enabled')
        cy.get('#result_text').should('have.text', 'You entered text: "Vaibhav"')
        cy.get('#clear_result_button_text').click()
        cy.get('#result_text').invoke('attr', 'style', 'display: none').should('have.attr', 'style', 'display: none')
        cy.log("Successfully Tested")
    })

    it("Number Test", ()=> {
        cy.get('#number').clear().type("10")
        cy.get('#result_button_number').click()
        cy.get('#clear_result_button_number').should('be.enabled')
        cy.get('#result_number').should('have.text', 'You entered number: "10"')
        cy.get('#clear_result_button_number').click()
        cy.get('#result_number').invoke('attr', 'style', 'display: none').should('have.attr', 'style', 'display: none')
        cy.log("Successfully Tested")
    })

    it("Text-Area Test", ()=> {
        cy.get('#text_area').clear().type("This is Vaibhav here")
        cy.get('#result_button_text_area').click()
        cy.get('#clear_result_button_text_area').should('be.enabled')
        cy.get('#result_text_area').should('have.text', 'You entered text area: "This is Vaibhav here"')
        cy.get('#clear_result_button_text_area').click()
        cy.get('#result_text_area').invoke('attr', 'style', 'display: none').should('have.attr', 'style', 'display: none')
        cy.log("Successfully Tested")
    })

    it("button Test", ()=> {
        cy.get('#show_text').should('be.enabled')
        cy.get('[name="hide_text"]').should('be.disabled')
        //Show Text button Test
        cy.get('#show_text').click()
        cy.get('#show_me').should('have.text', 'I am here!')
        cy.get('[name="hide_text"]').should('be.enabled')
        cy.get('#show_text').should('be.disabled')

        //Hide Text button test
        cy.get('[name="hide_text"]').click()
        cy.get('#show_text').should('be.enabled')
        cy.get('[name="hide_text"]').should('be.disabled')
        cy.log("Successfully Tested")
    })

    it('Link Test', () => {
        // href link1
        cy.get('#link1').invoke('removeAttr', 'target').click()
        cy.go('back')
        cy.get('#homepage_link').click()
        cy.go('back')
        cy.log("Successfully Tested")

    })

    it('Checkbox Test', ()=> {
        cy.get('[type="checkbox"]').check(['Option 1', 'Option 3'])
        cy.get('#result_button_checkbox').click()
        cy.get('#result_checkbox').should('have.text','You selected value(s): Option 1, Option 3')
        cy.log("Successfully Tested")
    })

    it('RadioButton Test', ()=> {
        cy.get('[type="radio"]').check('Option 2')
        cy.get('#result_button_ratio').click()
        cy.get('#result_radio').should('have.text','You selected option: Option 2')
        cy.log("Successfully Tested")
    })

    it('DropDown Test', ()=> {
        cy.get('select').select('value1').should('have.value', 'value1')
        cy.get('select').select('value2').should('have.value', 'value2')
        cy.get('select').select('value3').should('have.value', 'value3')
        cy.log("Successfully Tested")
    })

    it("Date Test", ()=> {
        cy.get('#vfb-8').type('11/02/2020')
        cy.get('#result_button_date').click({force: true})
        cy.get('#result_date').should('have.text', 'You entered date: 11/02/2020')
        cy.log("Successfully Tested")
    })

    it('DragNdDrop Test', ()=> {
        cy.get('#box').drag('#drag_box2')
        cy.get('#result_text').invoke('attr', 'draggable', 'true').should('have.attr', 'draggable', 'true')
        cy.log("Box dragged Successfully")
    })
})