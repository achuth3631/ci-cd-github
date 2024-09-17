import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement 
{
    
    constructor()
    {
        super();
        console.log('child Constructor Called');
    }

    connectedCallback()
    {
        console.log('child Connected Callback Called');
    }

    renderedCallback()
    {
        console.log('child rendered Callback Called');
    }
}