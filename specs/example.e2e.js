const assert = require('chai').expect;

describe('Login tests', ()=>{ 

    it('should go to the register page and validate url', ()=> {

        browser.url('https://www.kiwi.com/us/landing/-/-')
        expect(browser).toHaveUrl(`/landing/-/-`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})

        let SearchPlaceOrigin = $('div[data-test="SearchPlaceField-origin"] input[data-test="SearchField-input"]')
        let SearchPlaceDestination = $('div[data-test="SearchPlaceField-destination"] input[data-test="SearchField-input"]')
        let ButtonSelected = $('div[data-test="PlacePickerRow-station"]')
        let ButtonSelected2 = $('div[data-test="PlacePickerRow-city"]')

        let origen = ('button[@data-test="DatepickerMonthButton"])[1]')
        let destino = ('//button[@data-test="DatepickerMonthButton"])[2]')
        

        SearchPlaceOrigin.setValue('TXL')
        ButtonSelected.click()
        SearchPlaceDestination.setValue('London')
        ButtonSelected2.click()

        $('[data-test="PassengersField"] button').click()
        $('[data-test="PassengersRow-adults"] button[aria-label=increment]').click()
        
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()

        $('[data-test="PassengersRow-infants"] button[aria-label=increment]').click()
        
        $('button[data-test="PassengersFieldFooter-done"]').click()

        $('div[data-test="SearchDateInput"]').click()

        browser.pause(10000)
        
        $('button[data-test="CalendarMoveNextButton"]').click()
        $('button[data-test="DatepickerMonthButton]').click()
        $('button[data-test="Container"]').click()
        destino.click()
        $('button[data-test="SearchFormDoneButton"]').click()
        
        expect(browser).toHaveUrl(`/#/?adults=2&children=0&infants=1`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})
        
        $('a[data-test="SearchButton"]').click()
        
        browser.pause(10000)

        $('div[data-test="WatchdogAndSortingWrapper"]').isExisting()
        
        browser.pause(10000)
    })

    it('should go to the register page and validate url', ()=> {

        browser.url('https://www.kiwi.com/us/landing/-/-')
        expect(browser).toHaveUrl(`/landing/-/-`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})

        let SearchPlaceOrigin = $('div[data-test="SearchPlaceField-origin"] input[data-test="SearchField-input"]')
        let SearchPlaceDestination = $('div[data-test="SearchPlaceField-destination"] input[data-test="SearchField-input"]')
        let ButtonSelected = $('div[data-test="PlacePickerRow-station"]')
        let ButtonSelected2 = $('div[data-test="PlacePickerRow-city"]')

        let origen = ('button[@data-test="DatepickerMonthButton"])[1]')
        let destino = ('//button[@data-test="DatepickerMonthButton"])[2]')
        

        SearchPlaceOrigin.setValue('TXL')
        ButtonSelected.click()
        SearchPlaceDestination.setValue('London')
        ButtonSelected2.click()

        $('[data-test="PassengersField"] button').click()
        $('[data-test="PassengersRow-adults"] button[aria-label=increment]').click()
        
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()
        $('[data-test="PassengersRow-children"] button[aria-label=increment]').click()

        $('[data-test="PassengersRow-infants"] button[aria-label=increment]').click()
        
        $('button[data-test="PassengersFieldFooter-done"]').click()

        $('div[data-test="SearchDateInput"]').click()

        browser.pause(10000)
        
        $('button[data-test="CalendarMoveNextButton"]').click()
        $('button[data-test="DatepickerMonthButton]').click()
        $('button[data-test="Container"]').click()
        destino.click()
        $('button[data-test="SearchFormDoneButton"]').click()
        
        expect(browser).toHaveUrl(`/#/?adults=2&children=0&infants=1`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})
        
        $('a[data-test="SearchButton"]').click()
        
        browser.pause(10000)

        $('div[data-test="WatchdogAndSortingWrapper"]').isExisting()
        
        browser.pause(10000)
    })
});