const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;

const UserSchema  = new Schema({
    username : {
        type: String,
        required: true,
        unique: true 
    },
    password : {
        type: String,
        required: true 
    }
})

//use instance.save() when modifying a user's password
// to trigger this pre-hook
UserSchema.pre(
    'save',
    async function (next) {
        const user = this;
        // if password wasnt changed to paintext skip to next func
        if (!user.isModified('password')) return next();
        //if password was changed assume it was changed to plaintext and hash it
        
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next(); 
    }
)


const User = mongoose.model('User', UserSchema);

module.exports = {User}