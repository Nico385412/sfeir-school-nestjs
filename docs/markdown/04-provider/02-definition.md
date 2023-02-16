# A quoi sert un provider ?

-   Concept fondamental de NestJS <br/><br/>
-   Injecter des dépendances (classes, valeurs, fonctions, etc...) <br/><br/>
-   Créer des relations entre objets <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Qu'est ce qu'un provider ?

Un **Provider** est une simple classe précédée de l'annotation **@Injectable** <br/><br/>

```typescript
@Injectable()
export class AppService {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Où s'enregistre un provider ?

Un **Provider** doit être enregistré dans le tableau de `providers` dans un module <br/><br/>

```typescript
@Module({
    providers: [AppService],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment utiliser un service dans un controller ?

Il faut l'injecter <br/><br/>

```typescript
import { Controller } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
}
```

<!-- .element: class="big-code" -->
