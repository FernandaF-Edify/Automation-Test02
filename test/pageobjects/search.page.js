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
    get btnSetDates() {$('#library > div.SearchFormstyled__StyledSearchForm-sc-447g91-0.drtsxf.SearchForm > div > span > div.FormWrapperstyled__StyledSearchFormWrapper-sc-1mbkv3y-0.fIYBuk > div.FormWrapperstyled__SearchFormContainer-sc-1mbkv3y-1.fCjTmU > div:nth-child(5) > div.ClickCheck > div > span > div > div.FooterBarstyled__Footer-sc-1fnzjcn-0.fJqDLy > div.Stack__StyledStack-sc-1t576ow-0.jbBnTm > button.ButtonPrimitive__StyledButtonPrimitive-q2qrvj-0.fQZUGX')}

    get btnsearch(){$('a[data-test="SearchButton"]')}


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
        this.searchDateInput.click();
        this.departureDate.click();
        this.returnDate.click();
        this.nextMonth.click();
        
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