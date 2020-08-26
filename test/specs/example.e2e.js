const chaiExpect = require('chai').expect
const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')
const BookFlightPage = require('../pageobjects/bookFlight.page')

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
        BookFlightPage.ClickBookButton();
        browser.pause(3000);
        BookFlightPage.isStartBooking();
        BookFlightPage.FillContactDetails();
        BookFlightPage.isStartFillPrimaryPassegers();
        BookFlightPage.FillPrimaryPassenger();
        BookFlightPage.isVisaRequiremets();
        
        BookFlightPage.FillVisaRequirements();
        browser.pause(1000);
    })

    after(()=>{
        browser.closeWindow();
    })

});