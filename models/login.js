const mongoose=require('mongoose')
const Schema= mongoose.Schema;
const loginSchema=new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    }
});

const Logindata=mongoose.model('Logindata',loginSchema);
module.exports=Logindata;