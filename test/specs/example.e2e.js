const chaiExpect = require('chai').expect
const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')

describe('Automation Test - Module 2', () => {

    before(()=>{
        SearchPage.open();
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
        FiltersPage.open();
    })

    it.only ('Should search flight with train transport', ()=> {
        FiltersPage.SelectOnlyBus();
        FiltersPage.isAnyFlightExist();
        browser.pause(1000)
        FiltersPage.SelectTrain();
        SearchPage.isFlightOnSearchPage();
        browser.pause(1000)
    })
});