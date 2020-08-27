const chaiExpect = require('chai').expect
const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')
const BookFlightPage = require('../pageobjects/bookFlight.page');
const { assert } = require('chai');

describe('Automation Test - Module 2', () => {

    before(()=>{
        SearchPage.open();
        browser.maximizeWindow()
    })

    it('Should select a flight from TXL to London', ()=> {
        SearchPage.FillAirpots();
        SearchPage.SelectPassagers();
        SearchPage.SelectDates();
        browser.pause(1000)
        console.log(SearchPage.departureDate);

        SearchPage.SearchButtonClick();

        SearchPage.isFlightOnSearchPage();

        browser.pause(1000)
        expect(browser).toHaveUrl(`?adults=2&children=0&infants=1`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})
        browser.pause(1000)
    })

    before(()=>{
        browser.maximizeWindow();
        FiltersPage.open();
    })

    it ('Should search flight with train transport', ()=> {
        FiltersPage.SelectOnlyBus();
        FiltersPage.isAnyFlightExist();
        browser.pause(1000);
        FiltersPage.SelectTrain();
        SearchPage.isFlightOnSearchPage();
        browser.pause(1000);
    })

    it.only ('Should book a flight to TXL to LONDON', ()=> {
        BookFlightPage.btnBook.click();
        BookFlightPage.title.waitForExist();
        chaiExpect(BookFlightPage.isStartBooking()).to.be.true;
        BookFlightPage.FillContactDetails();

        flightFirstNameDetails = BookFlightPage.fillFirstName.getAttribute('value');
        flightFirstLastDetails = BookFlightPage.fillLastName.getAttribute('value');

        chaiExpect(BookFlightPage.isStartFillPrimaryPassegers()).to.be.true;
        BookFlightPage.FillPrimaryPassenger();
        chaiExpect(BookFlightPage.isVisaRequiremets()).to.be.true;
        
        BookFlightPage.FillVisaRequirements();
        BookFlightPage.btnContinue.click();
        BookFlightPage.btnStandardType.click();
        BookFlightPage.btnPackagesPremium.click();
        BookFlightPage.btnSelectWindow.click();
        BookFlightPage.btnStepControlNxt.click();

        BookFlightPage.emailDetails.isEqual('Ms' + flightFirstNameDetails + flightFirstLastDetails);

        expect(browser).toHaveUrlContaining('/booking?');
        
    })

    after(()=>{
        browser.closeWindow();
    })

});