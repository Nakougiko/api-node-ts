// Importation des types Request et Response d'Express
import { Request, Response } from 'express';
import db from '../db' // Importe la connexion à la base de données

const users: { name: string, email: string }[] = []; // Tableau d'utilisateurs

/**
 * Récupère tous les utilisateurs
 * @param req - La requête
 * @param res - La réponse
 * @returns {User[]} - La liste de tous les utilisateurs
 */
export const getUsers = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query('SELECT * FROM users'); // Récupère tous les utilisateurs
        res.json({ users: rows });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des users' });
    }
}

/**
 * Récupère un utilisateur
 * @param req - La requête
 * @param res - La réponse
 * @returns {User} - L'utilisateur récupéré
 */
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Récupère l'id de la requête

    try {
        const [rows]: [any, any] = await db.query('SELECT * FROM users WHERE id = ?', [id]); // Récupère un utilisateur
        if (Array.isArray(rows) && rows.length === 0) {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
            return
        }
        res.json({ user: rows[0] });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
    }
}

/**
 * Ajoute un utilisateur
 * @param req - La requête
 * @param res - La réponse
 * @returns {User} - L'utilisateur ajouté
 */
export const addUser = async (req: Request, res: Response) => {
    const { name, email } = req.body; // Récupère le nom et l'email de la requête
    
    if (!name || !email) {
        res.status(400).json({ message: 'Le nom et l\'email sont requis' });
        return
    }

    try {
        const [result]: any = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]); // Ajoute un utilisateur
        res.json({ message: `Utilisateur ${name} ajouté avec succès !`, userId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'utilisateur' });
    }
}

/**
 * Supprime un utilisateur
 * @param req - La requête
 * @param res - La réponse
 * @returns {User} - L'utilisateur supprimé
 */
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Récupère l'id de la requête

    try {
        const [result]: any = await db.query('DELETE FROM users WHERE id = ?', [id]); // Supprime un utilisateur
        if ((result as any).affectedRows === 0) {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
            return
        }

        res.json({ message: `Utilisateur supprimé avec succès !` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
}

/**
 * Modifie un utilisateur
 * @param req - La requête
 * @param res - La réponse
 * @returns {User} - L'utilisateur modifié
 */
export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params; // Récupère l'id de la requête
    const { name, email} = req.body; // Récupère le nom et l'email de la requête

    try {
        const [result]: any = await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]); // Modifie un utilisateur
        if ((result as any).affectedRows === 0) {
            res.status(404).json({ message: 'Utilisateur non trouvé' });
            return
        }

        res.json({ message: `Utilisateur ${name} modifié avec succès !` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la modification de l\'utilisateur' });
    }
}