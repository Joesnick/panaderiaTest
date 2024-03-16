import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}
);

const Comments = mongoose.model("Comments", commentsSchema);

export default Comments;