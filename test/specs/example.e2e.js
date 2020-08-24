const assert = require('chai').expect;

describe('Login tests', ()=>{ 

    it('should go to the register page and validate url', ()=> {

        browser.url('https://www.kiwi.com/us/landing/-/-')
        expect(browser).toHaveUrl(`/landing/-/-`, { message: 'No funciono' , containing : true , wait: '10000', interval: 1000})

        let SearchPlaceOrigin = $('div[data-test="SearchPlaceField-origin"] input[data-test="SearchField-input"]')
        let SearchPlaceDestination = $('div[data-test="SearchPlaceField-destination"] input[data-test="SearchField-input"]')
        let ButtonSelected = $('div[data-test="PlacePickerRow-station"]')
        let ButtonSelected2 = $('div[data-test="PlacePickerRow-city"]')
        

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
        $('[data-test="LandingSearchButton"]').click

    

        browser.pause(10000)

    })
});