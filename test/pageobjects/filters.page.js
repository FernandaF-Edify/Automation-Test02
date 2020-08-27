const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class FiltersPage extends Page {

    constructor(){
        super()
        this.pageUrl = '/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-10-01_2020-10-31/2020-10-01_2020-10-31';
    }

    get FlightCheckBox(){return $('//span[contains(text(),"Flight")]')}
    get BusCheckBox(){return $('//span[contains(text(),"Bus")]')}
    get TraindCheckBox(){return $('//span[contains(text(),"Train")]')}

    get FlightErrorFound() {return $('//div[contains(@class, "Heading") and contains(., "Sorry")]')}

    SelectOnlyBus(){
        this.FlightCheckBox.click();
        this.TraindCheckBox.click();
    }

    isAnyFlightExist(){
        return this.FlightErrorFound.isExisting()
    }

    open () {
        return super.open(this.pageUrl);
    }

}

module.exports = new FiltersPage();