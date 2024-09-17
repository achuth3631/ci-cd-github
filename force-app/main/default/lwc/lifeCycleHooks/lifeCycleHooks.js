import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement 
{

    constructor()
    {
        super();
        console.log('Parent Constructor Called');
    }

    connectedCallback()
    {
        console.log('Parent Connected Callback Called');
    }

    renderedCallback()
    {
        console.log('Parent Rendered Callback Called');
    }
}