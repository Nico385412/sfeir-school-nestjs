<!-- .slide: class="with-code inconsolata" -->

# NestJs et son CLI

Pour utiliser Nest le plus facilement possible, pensez à installer sa CLI

```bash
npm install -g @nestjs/cli
```

<!-- .element: class="big-code" -->
<br/>

![center h-800](assets/images/school/01-setup-env/nest-cli.png)

Notes:
Il est conseillé d'utiliser le CLI de Nest pour bootstraper un projet, cependant il est possible de le faire manuellement en installant les package suivant:

-   @nestjs/core
-   @nestjs/common
-   rxjs
-   reflect-metadata

##==##

# Dépendances nécessaires aux TPS

Déplacez vous dans le dossier steps et tapez la commande suivante:

```bash
npm install
```

<!-- .element: class="big-code" -->

<br/>
ou
<br/><br/>

```bash
npm ci
```

<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment lancer l'exercice d'un TP

Dans le dossier steps/apps, il y a un dossier par concept / chapitre

Pour lancer le serveur **Nest** contenu dans ce dossier il vous suffira de lancer la commande suivante dans le dossiers steps <br/><br/>

```bash
npm run start -- _nom_dossier_dans_apps__
```

<!-- .element: class="big-code" -->

<br/><br/>

## Exemple

```bash
npm run start -- 02-bootstaping
```

<!-- .element: class="big-code" -->
