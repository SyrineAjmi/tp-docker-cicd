# Image de base : Node.js 18 sur Alpine Linux (léger)
FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Optimisation du cache Docker : copier d'abord les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Le conteneur écoute sur le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]

