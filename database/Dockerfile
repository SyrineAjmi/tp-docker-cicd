# Image de base : PostgreSQL 15 sur Alpine Linux
FROM postgres:15-alpine

# Copier le script d'initialisation dans le conteneur
COPY init.sql /docker-entrypoint-initdb.d/init.sql

# Le conteneur écoute sur le port 5432
EXPOSE 5432

