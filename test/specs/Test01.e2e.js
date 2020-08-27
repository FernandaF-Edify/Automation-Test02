const chaiExpect = require('chai').expect
const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')
const BookFlightPage = require('../pageobjects/bookFlight.page');
const FlightKeyword = require('../keywords/flight.keyword');
const { assert } = require('chai');

describe('Automation Test - Module 2 - Test  01', () => {
    
    before (()=>{
        FlightKeyword.inicializSearchPage();
    })
    
    it ('Should select a flight from TXL to London', ()=> {
        SearchPage.FillAirpots();
        SearchPage.SelectPassagers();
        SearchPage.SelectDates();
        SearchPage.btnSetDates.click();
        SearchPage.btnsearch.click();
        expect(FlightKeyword.isFlightOnSearchPage());
        expect(browser).toHaveUrlContaining('?adults=2&children=3&infants=1')

    })

    after(()=>{
        browser.closeWindow();
    })

})