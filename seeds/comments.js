const Comment = require('../models/comment');

const comments = [
  {
    content: 'Great post!',
    userId: 1, 
    blogPostId: 1, 
  },
];

const seedComments = async () => {
  try {
    await Comment.bulkCreate(comments);
    console.log('Comments seeded successfully.');
  } catch (error) {
    console.error('Error seeding comments:', error);
  }
};

module.exports = seedComments;
