import sequelize from './config/connection';
import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {  // This syncs models to database without migrations
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
