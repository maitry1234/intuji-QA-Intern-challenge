describe('Automation Practice Form - Test Case', () => {
    before(() => {
      // Prevent Cypress from failing the test on uncaught exceptions (like cross-origin scripts)
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
    });
  
    it('should submit the form successfully with valid data', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
  
      cy.get('#fixedban').invoke('remove');
      cy.get('footer').invoke('remove');
  
      cy.get('#firstName').type('John');
      cy.get('#lastName').type('Doe');
      cy.get('#userEmail').type('john.doe@example.com');
      cy.contains('label', 'Male').click();
      cy.get('#userNumber').type('9876543210');
  
      // Date of Birth
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select('January');
      cy.get('.react-datepicker__year-select').select('1990');
      cy.contains('.react-datepicker__day--015', '15').click();
  
      // Subjects
      cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
  
      // Hobbies
      cy.contains('label', 'Reading').click();
  
      // Upload a picture
      cy.get('#uploadPicture').selectFile('cypress/fixtures/sample.png');
  
      // Address
      cy.get('#currentAddress').type('123 Cypress Lane');
  
      // State and City
      cy.get('#state').click();
      cy.contains('Haryana').should('be.visible').click({ force: true });

      cy.get('#city').click();
      cy.contains('Panipat').should('be.visible').click({ force: true });  
    
      cy.get('#submit').click();
  
      // Assert that modal appears
      cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  
      // Close the modal
      cy.get('#closeLargeModal').click();
    });
  });

  