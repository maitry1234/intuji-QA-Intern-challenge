// test script for automating a form submission 
describe('Automation Practice Form - Test Case', () => {
    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should submit the form successfully with valid data', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
  
      cy.get('#fixedban').invoke('remove');
      cy.get('footer').invoke('remove');
  
      cy.get('#firstName').type('Prem');
      cy.get('#lastName').type('Dahak');
      cy.get('#userEmail').type('prem@example.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9876543210');
  
     
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select('January');
      cy.get('.react-datepicker__year-select').select('1990');
      cy.contains('.react-datepicker__day--015', '15').click();
  
      cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
 
      cy.contains('label', 'Reading').click();

      cy.get('#uploadPicture').selectFile('cypress/fixtures/sample.png');
  
      
      cy.get('#currentAddress').type('Kathmandu');
  
      
      cy.get('#state').click();
      cy.contains('Haryana').should('be.visible').click({ force: true });

      cy.get('#city').click();
      cy.contains('Panipat').should('be.visible').click({ force: true });  
    
      cy.get('#submit').click();
  
      cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  
       cy.get('#closeLargeModal').click();
    });
  });

  