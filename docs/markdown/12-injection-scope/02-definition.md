# Qu'est que l'injection scope ?

-   Dans NestJS tout est par défaut partagé <br/><br/>
-   Parfois on souhaite que l'instance d'une classe ait une durée de vie propre à la requête/réponse <br/><br/>
    -   mise en cache graphQL
    -   log propre un certain context
    -   ...

Notes:
Pour rappel, dans NodeJs chaque request/response est traité dans un thread séparé ce qui rend l'utilisation d'une instance de classe partagé
comme les services totalement sûre.

##==##

# Provider et controller

**On peut modifier le scope d'un controller mais aussi celui d'un Provider**

<!-- .element: class="full-center" -->

##==##

# Les différents scopes

| Default                                                       | Request                  | Transient                    |
|---------------------------------------------------------------|--------------------------|------------------------------|
| Mode par défaut <br/> Crée une unique instance <br/> partagée | Une instance par requête | Une instance par consommateur |
