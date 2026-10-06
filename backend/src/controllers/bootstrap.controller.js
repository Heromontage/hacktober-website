const User = require('../models/user');

exports.makeAdmin = async (req, res) => {
  try {
    const { username } = req.body || {};

    if (!username) {
      return res.status(400).json({
        error: 'Username is required',
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    // Only allow the bootstrap for the first real user.
    const adminExists = await User.exists({ role: 'admin' });

    if (adminExists) {
      return res.status(403).json({
        error: 'Admin already exists',
      });
    }

    user.role = 'admin';
    await user.save();

    return res.json({
      message: `${user.username} is now an admin`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Something went wrong',
    });
  }
};