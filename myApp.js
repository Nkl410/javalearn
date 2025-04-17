const express = require('express');
const app = express();

// Montage du middleware pour servir le dossier public contenant tes fichiers statiques (CSS, images, etc.)
// app.use('/public', express.static(__dirname + '/public'));

// // Définition de la route GET pour la racine qui envoie le fichier HTML
// app.get('/', function(req, res) {
//   // Si le fichier HTML se trouve dans views/
//   res.json(__dirname + '/views/index.html');
// });

app.get('/json', (req, res) => {
  // Ici, on veut renvoyer un objet JS en JSON
  res.json({ message: 'Hello json' });
});

// Démarrage du serveur sur le port 3000 (ou celui défini dans l'environnement)
const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}`);
});
