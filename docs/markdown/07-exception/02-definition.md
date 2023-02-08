# Qu'est ce qu'une exception dans NestJs

**Une exception est un filtre qui permet d'envoyer une réponse 'User Friendly' en cas d'erreur**

<!-- .element: class="full-center" -->

##==##

# Les "build-in" exceptions

-   Nest catch toutes les HttpExceptions et vous offre une multitude d'exceptions à utiliser
    -   **BadRequestException**
    -   **UnauthorizedException**
    -   **NotFoundException**
    -   **ForbiddenException**
    -   **... et bien d'autres :)** <br/><br/>
-   une exception est une simple classe qui étend la classe HttpException

##==##

<!-- .slide: class="with-code inconsolata"-->

# Créer ses propres exceptions, comment faire ?

-   Les exceptions de base sont suffisantes
-   Créer ses propres exceptions est néanmoins possible
-   **Best Practice** : Réaliser une hiérarchie de vos customs exceptions <br/><br/><br/>

```typescript
export class TodoNotFoundException extends HttpException {
    constructor(id: string) {
        super(`Todo with id ${id} does not exist`, 404);
    }
}
```

<!-- .element: class="big-code"-->
