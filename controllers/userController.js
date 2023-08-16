const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
  async register(req, res) {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      const user = await User.create({ 
        username: req.body.username,
        password: hash,
      });
      req.session.user = {
        id: user.id,
        username: user.username
      };
      return res.status(201).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ where: { username: req.body.username }});
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(400).json({ message: 'Incorrect password' });
      }

      req.session.user = {
        id: user.id,
        username: user.username
      };
      return res.json({ user: req.session.user });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  logout(req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
};
