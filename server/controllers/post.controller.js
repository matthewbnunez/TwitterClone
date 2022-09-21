const { Post } = require('../models/post.model');

module.exports.allPosts = (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err))
}

module.exports.commentsOfOneUser = (req, res) => {
    Post.find({ user: req.params.userId })
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json(err))
}


module.exports.addPost = (request, response) => {
    const { user, content } = request.body;
    Post.create({
        user,
        content
    })
        .then(user => response.json(user))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePost = (request, response) => {
    Post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}