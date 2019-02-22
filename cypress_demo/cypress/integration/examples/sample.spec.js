class Search {
  constructor() {}

  open() {
    cy.visit('http://google.com/ncr')
  }

  search(text) {
    cy.get('[name="q"]').type(text);
    cy.get('[name="q"]').type('{enter}');
  }

}


class Results {

  results() {
    return cy.get('.g .r');
  }

  shouldHaveNResults(n) {
    this.results().filter(':visible').should('have.length', n);
  }

  followNthResultLink(index) {
    this.results().eq(index).children('a').click();
  }
}




const search = new Search();
const results = new Results();

describe('My First Test', function() {
  it('test 1', function() {
    search.open();
    search.search('cypress');

    results.shouldHaveNResults(10);

  })
});









