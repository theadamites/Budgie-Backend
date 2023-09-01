const bodyParser = require('body-parser')
const mongoose = require( 'mongoose')

const Schema = mongoose. Schema

const profileSchema = new Schema( 
    {   FirstName: {type:String},
        LastName: {type:String},
        Email: {type:String},
        Age: {type:Number},
        Income: {type:Number},
        UserName: {type:String},
        Occupation: {type:String},
        Password: {type:String},
        AccountBalance: {type:Number},
        Expenses:{type:Array},
        BudgetAllocations:{type:Array},
        SavingsGoal:{type:Number},
        admin: {type:Boolean},

        entryDate: {type: Date, default :Date. now}
        })

const newProfileSchema =  new Schema( 
    {   FirstName: {type:String},
        LastName: {type:String},
        Email: {type:String},
        Age: {type:Number},
        Income: {type:Number},
        UserName: {type:String},
        Password: {type:String},
        Occupation: {type:String},
        AccountBalance: {type:Number},
        Expenses:{type:Array},
        BudgetAllocations:{type:Array},
        SavingsGoal:{type:Number},
        admin: {type:Boolean},

        entryDate: {type: Date, default :Date. now}
        })

const Profiles = mongoose.model ('Profiles', profileSchema, 'Profiles')
const Users = mongoose.model( 'Profiles2', newProfileSchema, 'Profiles')
const mySchemas = {'Users':Users, 'Profiles' :Profiles}

module.exports = mySchemas