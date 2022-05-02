const sequelize = require('../config/connection');
const seedGolfer = require('./golferData');
const seedScore = require('./scoreData');


const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedGolfer();
  
    await seedScore();
  
    process.exit(0);
  };
  
  seedAll();