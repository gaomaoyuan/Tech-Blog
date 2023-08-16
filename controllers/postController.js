const { Post } = require('../models');

module.exports = {
  async getAllPosts(req, res) {
    try {
      const posts = await Post.findAll({});
      return res.json(posts);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async getPostById(req, res) {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      return res.json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async createPost(req, res) {
    try {
      const post = await Post.create({ 
        title: req.body.title,
        content: req.body.content,
        userId: req.session.user.id,
      });
      return res.status(201).json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async updatePost(req, res) {
    try {
      const post = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      if (!post) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deletePost(req, res) {
    try {
      const post = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });

      if (!post) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
