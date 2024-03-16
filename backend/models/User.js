// User - Table
import mongoose from "mongoose";
import bycrypt from "bcrypt";

const usuarioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true, 
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true,
    },
    role: {
        type: String,
        required: true, 
        trim: true
    },
    token: {
        type: String,
    },
    confirmated: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true,
}

);

usuarioSchema.pre("save", async function(next){
    if (!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password);
}

const User = mongoose.model("User", usuarioSchema);

export default User;