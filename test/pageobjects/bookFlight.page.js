const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class BookFlightPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/landing/-/-';
    }
    /**
     * define selectors using getter methods
     */

    get btnBook () { return $('//span[contains(text(),"Book")]')}
    get fillEmail () { return $('input[name="email"]')}
    
    get selectPhoneCounty(){ return $('[name=phoneCountry]')}
    get fillTelephone () {return $('[name=phone]')}

    get fillFirstName () { return $('[name = "firstname"]')}
    get fillLastName () { return $('[name = "lastname"]')}
    get fillNactionality () { return $('[data-test="ReservationPassenger-nationality"]')}
    get fillGender () {return $('[name="title"]')}
    get fillMonth () {return $('[name="birthMonth"]')}
    get fillDay () {return $('[name="birthDay"]')}
    get fillYear () {return $('[name="birthYear"]')}

    get fillIDNumber () {return $('[name="idNumber"]')}
    get fillExpirationMonth () {return $('[name="idExpirationMonth"]')}
    get fillExpirationDay () {return $('[name="idExpirationDay"]')}
    get fillExpirationYear () {return $('[name="idExpirationYear"]')}

    ClickandFill(selectors,value){
        selectors.click();
        selectors.addValue(value);
    }

    ClickandSelect(selectors,index){
        selectors.click();
        selectors.selectByIndex(index);
    }

    ClickBookButton(){
        this.btnBook.click();
    }

    FillContactDetails(){
        this.ClickandFill(this.fillEmail,'sferx22@gmail.com');
        this.ClickandSelect(this.selectPhoneCounty,53)
        this.ClickandFill(this.fillTelephone, '86150813')}


    FillPrimaryPassenger(){
        this.ClickandFill(this.fillFirstName, 'Fernanda');
        this.ClickandFill(this.fillLastName, 'Fernandez');
        this.ClickandSelect(this.fillNactionality,53);
        this.ClickandSelect(this.fillGender, 2);
        this.ClickandSelect(this.fillMonth, 9);
        this.ClickandFill(this.fillDay, '09');
        this.ClickandFill(this.fillYear, '1992');
        // this.fillFirstName.click();
        // this.fillFirstName.addValue('Fernanda');
        // this.fillLastName.click();
        // this.fillLastName.addValue('Fernandez');
        // this.fillNactionality.click();
        // this.fillNactionality.selectByIndex(53);
        // this.fillGender.click();
        // this.fillGender.selectByIndex(2);
    }

    FillVisaRequirements(){
        this.ClickandFill(this.fillIDNumber,'207160831');
        this.ClickandSelect(this.fillExpirationMonth,9);
        this.ClickandFill(this.fillExpirationDay,'10');
        this.ClickandFill(this.fillExpirationYear,'2029');
    }



    isStartBooking(){
        return (
            $('h1[data-test="CommonJourneyHead"]').isExisting()
            )
    }

    isStartFillPrimaryPassegers(){
        return (
            $('//span[contains(text(),"Use all given names and surnames")]').isExisting()
            )
    }

    isVisaRequiremets(){
        return (
            $('//span[contains(text(),"Visa requirements check")]').isExisting()
            )
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open(this.pageUrl);
    }
}

module.exports = new BookFlightPage();