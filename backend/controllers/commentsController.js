import Comment from '../models/Comments.js';

// addComment Func
const addComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (error) {
        console.log(error);
    }
};

// getComments Func
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting users..');
    }
};

// deleteComment Func
const deleteComment = async (req, res) => {
    const commentId = req.params.commentId;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            return res.status(404).send('Comment Not Found!');
        }
        res.json(deletedComment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Trying to Remove Comment');
    }
};

export { addComment, getComments, deleteComment };
