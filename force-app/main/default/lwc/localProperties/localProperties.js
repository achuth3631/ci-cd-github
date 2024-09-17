import { LightningElement , track} from 'lwc';

export default class LocalProperties extends LightningElement 
{
    fullName= "John";
    course = "Salesforce";

   
    changeHandler(event)
    {
        this.course = event.target.value;
    }

   @track address = {
        street:"1",
         city:"columbus",
         state:"ohio",
         zipcode:"43081",
    }

    tarckHandler(event)
    {
        this.address.zipcode = event.target.value;
    }
}