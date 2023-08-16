const User = require('../models/user');

const users = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
  },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(users);
    console.log('Users seeded successfully.');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
