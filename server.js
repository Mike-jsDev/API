const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const users = [
  {
    id: 0,
    name: 'Petya',
    surname: 'Pupkin',
  },
  {
    id: 1,
    name: 'Lusya',
    surname: 'Pupkina',
  },
];

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.use('/', express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// EndPoints
app.get('/users', (req, res) => {
  setTimeout(() => {res.send(users);
  }, 2000)
});

app.get('/users/:search', (req, res) => {
  let query = req.params.search;
  let user = users.find(user => { 
    return (
      user.id === +query 
      ||  user.name === query.toLocaleLowerCase() 
      ||  user.surname === query.toLocaleLowerCase()
    )
  });
  res.send(user);
});

app.post('/users', (req, res) => {
  const user = {
    id: users.length,
    name: req.body.name,
    surname: req.body.surname,
  };
  users.push(user);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server listening port: ${port}`);
})