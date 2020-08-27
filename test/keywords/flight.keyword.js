const SearchPage = require('../pageobjects/search.page')
const FiltersPage = require('../pageobjects/filters.page')
const BookFlightPage = require('../pageobjects/bookFlight.page');

class FlightKeyword {

    isFlightOnSearchPage(){
        return (
            $('div[data-test="WatchdogAndSortingWrapper"]').isDisplayed()
            )
    }

    inicializSearchPage(){
        SearchPage.open();
        browser.maximizeWindow();
    }

    inicializBookingPage(){
        BookFlightPage.open();
        browser.maximizeWindow();
    }

}

module.exports = new FlightKeyword();