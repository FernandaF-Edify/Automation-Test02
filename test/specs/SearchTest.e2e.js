const chaiExpect = require('chai').expect
const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')
const BookFlightPage = require('../pageobjects/bookFlight.page');
const FlightKeyword = require('../keywords/flight.keyword');
const { assert } = require('chai');

describe('Automation Test - Module 2 - Test  01 - 02 - 03', () => {

    
    before (()=>{
        FlightKeyword.inicializSearchPage();
    })
    
    it.only('Should select a flight from TXL to London', ()=> {
        SearchPage.FillAirpots();
        SearchPage.SelectPassagers();
        SearchPage.SelectDates();
        SearchPage.btnSetDates.click();
        SearchPage.btnsearch.click();
        SearchPage.SearchButtonClick();
        expect(FlightKeyword.isFlightOnSearchPage());
        expect(browser).toHaveUrl(`?adults=2&children=0&infants=1`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})
    
    })

    it ('Should search flight with train transport', ()=> {
        expect(browser).toHaveUrlContaining('/search');
        expect(FlightKeyword.isFlightOnSearchPage());
        FiltersPage.SelectOnlyBus();
        FiltersPage.FlightErrorFound.waitForExist();
        chaiExpect(FiltersPage.isAnyFlightExist()).to.be.true;
        FiltersPage.TraindCheckBox.click();
        expect(FlightKeyword.isFlightOnSearchPage());
    })

    it ('Should book a flight to TXL to LONDON', ()=> {
        BookFlightPage.btnBook.click();
        BookFlightPage.title.waitForExist();
        chaiExpect(BookFlightPage.isStartBooking()).to.be.true;
        BookFlightPage.FillContactDetails();

        flightFirstNameDetails = BookFlightPage.fillFirstName.getAttribute('value');
        flightFirstLastDetails = BookFlightPage.fillLastName.getAttribute('value');

        chaiExpect(BookFlightPage.isStartFillPrimaryPassegers()).to.be.true;
        BookFlightPage.FillPrimaryPassenger();
        chaiExpect(BookFlightPage.isVisaRequiremets()).to.equal(true);
        
        BookFlightPage.FillVisaRequirements();
        BookFlightPage.btnContinue.click();
        BookFlightPage.btnStandardType.click();
        BookFlightPage.btnPackagesPremium.click();
        BookFlightPage.btnSelectWindow.click();
        BookFlightPage.btnStepControlNxt.click();

        BookFlightPage.emailDetails.isEqual('Ms' + flightFirstNameDetails + flightFirstLastDetails);

        expect(browser).to.include('/booking?');
        
    })

    after(()=>{
        browser.closeWindow();
    })

});