# 🚀 API Node.js avec TypeScript et MariaDB

Cette API permet de gérer des utilisateurs avec un CRUD complet. Elle utilise **Express**, **TypeScript**, **MariaDB**, et **dotenv** pour la gestion des configurations.

## 📂 Structure du projet
```
api-node-ts/
├── src/
│   ├── controllers/
│   │   ├── user.controller.ts
│   ├── routes/
│   │   ├── user.routes.ts
│   ├── config/
│   │   ├── db.ts
│   ├── server.ts
├── .env
├── package.json
├── tsconfig.json
```

---

## ⚙️ Installation
### 1️⃣ Cloner le projet
```sh
git clone <URL_DU_DEPOT>
cd api-node-ts
```

### 2️⃣ Installer les dépendances
```sh
npm install
```

### 3️⃣ Configurer la base de données
Créer un fichier `.env` à la racine du projet :
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mot_de_passe
DB_NAME=users_db
DB_PORT=3307
PORT=3000
```

Créer la base de données et la table :
```sql
CREATE DATABASE IF NOT EXISTS users_db;
USE users_db;
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

### 4️⃣ Lancer le serveur
```sh
npm run dev
```

---

## 📌 Routes de l'API
### 🟢 **Récupérer tous les utilisateurs**
```http
GET /users
```
📌 **Réponse :**
```json
{
  "users": [
    { "id": 1, "name": "Lukas", "email": "lukas@example.com" }
  ]
}
```

### 🔵 **Récupérer un utilisateur par ID**
```http
GET /users/:id
```
📌 **Exemple :** `/users/1`

---

### 🟡 **Ajouter un utilisateur**
```http
POST /users
```
📌 **Body (JSON) :**
```json
{
  "name": "Jean Dupont",
  "email": "jean.dupont@example.com"
}
```
📌 **Réponse :**
```json
{
  "message": "Utilisateur ajouté avec succès !",
  "userId": 1
}
```

---

### 🟠 **Modifier un utilisateur**
```http
PUT /users/:id
```
📌 **Body (JSON) :**
```json
{
  "name": "Jean Dupont",
  "email": "jean.dupont@example.com"
}
```
📌 **Réponse :**
```json
{
  "message": "Utilisateur mis à jour avec succès"
}
```

---

### 🔴 **Supprimer un utilisateur**
```http
DELETE /users/:id
```
📌 **Réponse :**
```json
{
  "message": "Utilisateur supprimé avec succès !"
}
```

---

## 🛠 Technologies utilisées
- **Node.js**
- **Express**
- **TypeScript**
- **MariaDB (MySQL)**
- **dotenv**

## 📜 Licence
Ce projet est sous licence MIT.

---

🚀 **Prêt à l'emploi !** N'hésite pas à contribuer et proposer des améliorations !
