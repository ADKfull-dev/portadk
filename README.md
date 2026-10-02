# Modèle de portfolio — développeur web

Site d'une seule page, sans outil à installer : `index.html` + `config.js` + le dossier `img/`.

## Personnaliser

Tout se règle dans **`config.js`** :

- `PROFIL` : nom, initiales, métier, numéro WhatsApp (format international, chiffres seulement), téléphone affiché, email, lien GitHub (vide = icône cachée), message WhatsApp prérempli ;
- `REALISATIONS` : la liste de vos sites (titre, type `client` / `produit` / `demo`, lien, description, points forts et captures).

Mettez vos captures d'écran dans `img/` et indiquez leur nom dans `config.js`. Les images `exemple.svg` et `exemple-m.svg` sont des emplacements vides à remplacer.

Les textes généraux de la page (« Des sites qui font appeler vos clients », la méthode, « Pour qui je travaille »…) sont dans `index.html` : adaptez-les à votre offre.

## Mettre en ligne (GitHub Pages)

1. Créez un dépôt sur votre compte GitHub et envoyez-y ces fichiers.
2. Dans le dépôt : *Settings › Pages › Branch : main / (root)* puis *Save*.
3. Le site est en ligne à `https://<votre-compte>.github.io/<nom-du-depot>/`.
