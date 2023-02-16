# Il existe deux types de module

-   Global <br/><br/>
-   Dynamique <br/><br/>

##==##

# Les Modules Globaux

Avec Nest, les providers sont injectés dans le scope du module <br/><br/>

-   Rendre les exports "globaux" <br/><br/>
-   Possibilité d'injecter sans obligatoirement importer le module

##==##

<!-- .slide: class="with-code inconsolata" -->

# L'écriture d'un module Global

```typescript
import { Module, Global } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Global()
@Module({
    providers: [TodoService],
    exports: [TodoService],
})
export class DataServiceModule {}
```

<!-- .element: class="big-code"-->
