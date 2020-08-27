const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class SearchPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/landing/-/-';
    }
    /**
     * define selectors using getter methods
     */

    get searchPlaceOrigin () { return $('div[data-test="SearchPlaceField-origin"] input[data-test="SearchField-input"]')}
    get searchPlaceDestination () {return $('div[data-test="SearchPlaceField-destination"] input[data-test="SearchField-input"]')}
    get buttonSelected () {return $('div[data-test="PlacePickerRow-station"]')}
    get buttonSelected2 () { return $('div[data-test="PlacePickerRow-city"]')}

    get passegersButton () {return $('[data-test="PassengersField"] button')}
    get increaseAdultsPassagers () {return $('[data-test="PassengersRow-adults"] button[aria-label=increment]')}
    get increaseChildPassagers () {return $('[data-test="PassengersRow-children"] button[aria-label=increment]')}
    get increseInfantPassagers () {return $('[data-test="PassengersRow-infants"] button[aria-label=increment]')}
    get passegersButtonDone () {return $('button[data-test="PassengersFieldFooter-done"]')}

    get searchDateInput () {return $('div[data-test="SearchDateInput"]')}
    get nextMonth() {return $('[data-test="CalendarMoveNextButton"]')}
    get departureDate () { return $('[data-value="2020-09-01"]')}
    get returnDate () { return $('[data-value="2020-09-15"]')}
    get btnSetDates() { return $('[data-test="SearchFormDoneButton"]')}

    get btnsearch(){ return $('[data-test="LandingSearchButton"]')}


    FillAirpots () {
        this.searchPlaceOrigin.setValue('TXL');
        this.buttonSelected.click();
        this.searchPlaceDestination.setValue('London');
        this.buttonSelected2.click();
    }

    SelectPassagers () {
        this.passegersButton.click();
        this.increaseAdultsPassagers.click();
        this.increaseChildPassagers.click();
        this.increaseChildPassagers.click();
        this.increaseChildPassagers.click();
        this.increseInfantPassagers.click();
        this.passegersButtonDone.click();
    }

    SelectDates (){
        this.searchDateInput.click()
        this.nextMonth.click()
        this.departureDate.click()
        this.returnDate.click() 
    }

    isFlightOnSearchPage(){
        return (
            $('div[data-test="WatchdogAndSortingWrapper"]').isExisting()
            )
    }
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new SearchPage();