# Portfolio Astro + Storyblok

1. **Installer les dépendances**

   ```bash
   pnpm install
   ```

2. **Configuration des variables d'environnement**

   Créez un fichier `.env` à la racine du projet :

   ```env
   STORYBLOK_TOKEN=votre_token_preview_storyblok
   ```

   > **Note :** Vous pouvez trouver votre token dans l'espace Storyblok > Settings > Access Tokens

## 🔧 Configuration Storyblok

### 1. Installation de la CLI Storyblok

Installez la CLI Storyblok globalement :

```bash
npm install -g storyblok-cli
```

### 2. Connexion à votre espace Storyblok

```bash
storyblok login
```

### 3. Configuration des scripts

Dans le `package.json`, remplacez `YOUR_SPACE_ID` par l'ID de votre espace Storyblok :

```json
"storyblok:pull": "storyblok components pull --space VOTRE_SPACE_ID",
"storyblok:generate": "storyblok types generate --space VOTRE_SPACE_ID"
```

## 📥 Synchronisation des composants Storyblok

### Récupérer les composants depuis Storyblok

```bash
pnpm run storyblok:pull
```

Cette commande va :

- Télécharger tous les composants de votre espace Storyblok
- Les synchroniser avec votre projet local

### Générer les types TypeScript

```bash
pnpm run storyblok:generate
```

Cette commande va :

- Générer automatiquement les types TypeScript basés sur vos composants Storyblok
- Améliorer l'autocomplétion et la vérification de types

## 🏃‍♂️ Lancement du projet

### Mode développement

```bash
pnpm run dev
```

Le projet sera accessible sur `https://localhost:3000` (HTTPS activé par défaut)

### Build de production

```bash
pnpm run build
```

### Prévisualisation du build

```bash
pnpm run preview
```

### Erreur de certificat HTTPS

- Le projet utilise `mkcert` pour HTTPS local
- Si vous rencontrez des problèmes, vous pouvez désactiver HTTPS en modifiant `astro.config.mjs`
