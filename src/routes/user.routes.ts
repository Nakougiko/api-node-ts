// Importation du module Router d'Express
import { Router } from 'express';

// Importation des controllers
import { getUsers, addUser, updateUser, deleteUser, getUser } from '../controllers/user.controller';

// Création d'un routeur
const router = Router();

/**
 * Route pour récupérer tous les utilisateurs
 * GET /users
 * @returns {User[]} - La liste de tous les utilisateurs
 */
router.get('/', getUsers);

/**
 * Route pour recupérer un utilisateur
 * GET /users/:id
 * @returns {User} - L'utilisateur récupéré
 */
router.get('/:id', getUser);

/**
 * Route pour ajouter un utilisateur
 * POST /users
 * @returns {User} - L'utilisateur ajouté
 */
router.post('/', addUser);

/**
 * Route pour mettre à jour un utilisateur
 * PUT /users/:id
 * @returns {User} - L'utilisateur mis à jour
 */
router.put('/:id', updateUser);

/**
 * Route pour supprimer un utilisateur
 * DELETE /users/:id
 * @returns {User} - L'utilisateur supprimé
 */
router.delete('/:id', deleteUser);

// Exporte le routeur
export default router;