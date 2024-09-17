import { LightningElement } from 'lwc';

export default class Getterexample extends LightningElement 
{
    users = ["User1", "User2", "User3", "User4", "User5"];

    get userName()
    {
        return this.users[1];
    }
    
}