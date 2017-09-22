/**
 * Created by Administrator on 2017/9/6.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = {
    phone:{type:String},
    password:{type:String}
}

mongoose.model("user",new Schema(user));


module.exports={
    user:mongoose.model("user")
}