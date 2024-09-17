import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement 
{
    isVisible = false;
    name;

    handleClick(event)
    {
        this.isVisible = true;
    }

    handleClick1(event)
    {
        this.isVisible = false;
    }
}