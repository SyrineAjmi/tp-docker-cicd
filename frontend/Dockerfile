# Image de base : Nginx Alpine
FROM nginx:alpine

# Copier les fichiers statiques dans le répertoire par défaut de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Le conteneur écoute sur le port 80 (HTTP standard)
EXPOSE 80

# CMD par défaut de Nginx : nginx -g 'daemon off;'
# (inutile de le redéfinir car déjà dans l'image officielle)

