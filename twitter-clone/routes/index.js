var express = require('express');
var router = express.Router();

const posts = []; // Liste for å lagre innlegg midlertidig

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET-rute for å hente alle innlegg
router.get('/posts', (req, res) => {
  res.json(posts); // Sender listen over innlegg som JSON
});

// POST-rute for å lage et nytt innlegg
router.post('/posts', (req, res) => {
  const { username, content } = req.body; // Henter brukernavn og innhold fra forespørselen
     
  // Sjekk at både brukernavn og innhold er fylt ut
  if (!username || !content) {
    return res.status(400).json({ error: 'Brukernavn og innhold er påkrevd' });
  }

  // Lag et nytt innlegg som objekt
  const newPost = {
    id: posts.length + 1,
    username,
    content,
    timestamp: new Date().toLocaleString()
  };

  posts.push(newPost); // Legger til det nye innlegget i listen
  res.status(201).json(newPost); // Sender tilbake det nye innlegget
});

module.exports = router;