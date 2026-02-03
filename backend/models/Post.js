const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        text: {
            type: String
        },
        image: {
            type: String
        },
        likes: {
            type: [String], // usernames
            default: []
        },
        comments: [
            {
                username: String,
                text: String
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
