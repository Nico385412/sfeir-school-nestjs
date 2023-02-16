<!-- .slide: class="transition-bg-sfeir-1 underline"-->

# Les modules dynamiques

##==##

# Qu'est ce qu'un module dynamique ?

-   Module customisable <br/><br/>
-   Possibilité de passer des paramètres <br/><br/>
-   Très utile lors de la création de librairie

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment créer un module dynamique

```typescript
import { Module } from "@nestjs/common";

@Module()
export class AppModule {
    forRoot(params: string) {
        return {
            module: AppModule,
            providers: [{ provide: "current-user", useValue: params }],
        };
    }
}
```

<!-- .element: class="big-code" -->
