# Il existe deux types de module

-   global <br/><br/>
-   dynamique <br/><br/>

##==##

# Les Modules Globaux

A l'instar d'Angular les services sont injectés dans le scope du module <br/><br/>

-   Rendre les exports "globaux" <br/><br/>
-   Scope Global <br/><br/>
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
