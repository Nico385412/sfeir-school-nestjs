# Qu'est ce qu'un interceptor ?

Un **Interceptor** est une classe implémentant l'interface NestInterceptor et précédée de l'annotation **@Injectable()**<br/><br/>
![h-800](assets/images/school/10-interceptors/interceptors.png)

##==##

# A quoi sert un interceptor ?

-   Ajouter de la logique avant ou après un endpoint <br/><br/>
-   Transformer le résultat d'une fonction <br/><br/>
-   Transformer une exception <br/><br/>
-   Modifier la logique d'une requête (exemple de catching) <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment écrit-on un interceptor ?

```typescript
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle();
    }
}
```

<!-- .element: class="big-code" -->

##==##

# Qu'est ce que le callHandler ?

-   Permet d'appeler le request handler <br/><br/>
-   Retourne un Observable <br/><br/>
-   Permet d'utiliser l'ensemble des opérateurs RxJS pour modifier à souhait la réponse
