const app = require('express')();
const { faker } = require('@faker-js/faker');

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World, I am a public API running from my localhost machine ;)',
    success: true,
    output: {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    },
    correlationId: ''
  });
});

app.listen(8080, () => console.log('API Running on port 8080'));