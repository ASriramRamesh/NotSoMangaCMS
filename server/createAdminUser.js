require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdminUser = async () => {
  try {
    const adminUser = await User.create({
      username: 'admin',
      email: 'admin@example.com',
      password: 'adminpassword123',
      role: 'admin'
    });

    console.log('Admin user created:', adminUser);
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdminUser();