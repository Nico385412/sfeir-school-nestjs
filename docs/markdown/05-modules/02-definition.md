# L'aspect modulaire est très important

-   un module par fonctionnalité <br/><br/>
-   un shared module <br/><br/>
-   un core module <br/><br/>
-   nécessaire à la haute scalabilité de l'architecture

##==##

<!-- .slide: class="with-code inconsolata"-->

# Qu'est ce qu'un module ?

Un **Module** est une classe précédée par l'annotation **@Module** <br/><br/>

```typescript
import { Module } from "@nestjs/common";

@Module({
    imports: [/* import here another module */],
    controllers: [/* import here controllers of your module */],
    providers: [/* import here providers of your module */],
    exports: [/* export what must export your module */],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Où s'importe un module ?

Un **Module** peut être importé dans n'importe quel autre module <br/><br/>

```typescript
import { Module } from "@nestjs/common";
import { CoreModule } from "shared/core";

@Module({
    imports: [CoreModule],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->
