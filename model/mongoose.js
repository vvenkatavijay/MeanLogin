/**
 * Created by Vijay on 2/2/16.
 */

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email:String
});