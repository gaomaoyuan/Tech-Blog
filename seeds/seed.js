const sequelize = require('./config/connection');
const seedUsers = require('./seeds/users');
const seedBlogPosts = require('./seeds/blogPosts');
const seedComments = require('./seeds/comments');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 
    await seedUsers();
    await seedBlogPosts();
    await seedComments();
    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close(); 
  }
};

seedDatabase();
