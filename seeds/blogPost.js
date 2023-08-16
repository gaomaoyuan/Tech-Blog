const BlogPost = require('../models/Post');

const blogPosts = [
  {
    title: 'First Blog Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    userId: 1, 
  },
];

const seedBlogPosts = async () => {
  try {
    await BlogPost.bulkCreate(blogPosts);
    console.log('Blog posts seeded successfully.');
  } catch (error) {
    console.error('Error seeding blog posts:', error);
  }
};

module.exports = seedBlogPosts;
