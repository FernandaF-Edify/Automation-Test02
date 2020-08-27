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

    get title () {return $('h1[data-test="CommonJourneyHead"]')}

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
    get btnContinue() {return $('[data-test="StepControls-passengers-next"]')}
    get btnStandardType() {return $('[data-test="fareTypesStandardButton"]')}
    get btnPackagesPremium (){return $('[data-test="servicePackagesPremiumButton"]')}
    get btnSelectWindow() { return $('[data-test="SeatingSelectOptionDesktop-window"]')}
    get btnStepControlNxt() { return $('[data-test="StepControls-AdditionalService-next"]')}

    get emailDetails() {return $('//span[contains(text(),"Fernanda")]')}
    

    ClickandSelect(selectors,index){
        selectors.click();
        selectors.selectByIndex(index);
    }

    FillContactDetails(){
        this.fillEmail.addValue('sferx22@gmail.com');
        this.ClickandSelect(this.selectPhoneCounty,53);
        this.fillTelephone.addValue('86150813')}

    FillPrimaryPassenger(){
        this.fillFirstName.addValue('Fernanda');
        this.fillLastName.addValue('Fernandez');
        this.ClickandSelect(this.fillNactionality,57);
        this.ClickandSelect(this.fillGender, 2);
        this.ClickandSelect(this.fillMonth, 10);
        this.fillDay.addValue('09');
        this.fillYear.addValue('1992');
    }

    FillVisaRequirements(){
        this.fillIDNumber.addValue('207160831');
        this.ClickandSelect(this.fillExpirationMonth,10);
        this.fillExpirationDay.addValue('10');
        this.fillExpirationYear.addValue('2029');
    }

    isStartBooking(){
        return (
            this.title.isExisting()
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