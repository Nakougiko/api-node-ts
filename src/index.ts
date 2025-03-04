// Importation des modules
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv'; // Permet de charger les var d'environnement
import userRoutes from './routes/user.routes'; // Importe les routes utilisateurs

// Charge les var d'environnement
dotenv.config();

// Crée une application express
const app = express();

// Definition du port du serveur (par défaut 3000)
const PORT = process.env.PORT || 3000;

// Middleware pour parser le body des requêtes
app.use(express.json());

// Route de test pour vérifier si le serveur fonctionne
app.get('/', (req: Request, res: Response) => {
  res.send('Api Node.js avec TypeScript');
});

// Utilisation des routes utilisateur defini dans user.routes.ts
app.use('/users', userRoutes);

// Demarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});