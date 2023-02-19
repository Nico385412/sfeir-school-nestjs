# Qu'est ce qu'un décorateur ?

-   Les décorateurs nous viennent du monde Javascript <br/><br/>
-   Ce n'est pas propre à NestJS <br/><br/>
-   De simples fonctions qui réalisent un traitement plus ou moins complexe <br/><br/>

##==##

# Que nous apporte NestJS sur ce plan ?

-   Écrire un décorateur en pure JS n'est pas forcément évident <br/><br/>
-   Nest nous apporte une fonction helper pour les écrire plus simplement

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment écrire son propre décorateur ?

```typescript
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const User = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
);
```

<!-- .element class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment les utiliser ?

**Grâce à l'annotation @** <br/><br/>

```typescript
getTodo(@User() user: UserEntity) { }
```

<!-- .element: class="big-code" -->
