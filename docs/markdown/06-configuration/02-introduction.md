# Mise en context

-   Les applications tournent sur différents environnements <br/><br/>
-   En NodeJs on utilise les fichiers **.env** <br/><br/>
-   NestJs met à disposition un package npm pour cette problématique

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment l'utiliser ?

```bash
npm install @nestjs/config
```

<!-- .element: class="big-code" -->

<br/><br/>

```typescript
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

<!-- .element: class="medium-code" -->

##==##

# Qu'est ce que ce package nous offre ?

-   Utilise dotenv <br/><br/>
-   Charge vos fichiers d'environnement <br/><br/>
-   Expose un service ConfigService <br/><br/>
-   Permet une config lazyloadé
