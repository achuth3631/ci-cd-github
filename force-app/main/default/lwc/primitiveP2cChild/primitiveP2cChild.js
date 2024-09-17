import { LightningElement , api} from 'lwc';

export default class PrimitiveP2cChild extends LightningElement 
{
    @api message;
    @api cardHeading;
    @api number;
    @api isValid;
    
}