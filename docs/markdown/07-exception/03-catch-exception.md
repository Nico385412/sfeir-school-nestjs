# Comment catcher un exception pour en modifier le body ?
- Nest permet de catcher une exception en particulier <br/><br/>
- ... Mais également de catcher toutes les exceptions <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment catcher une exception ?
Par une classe implémentant ExceptionFilter précédée de l'annotation **@Catch** <br/><br/>

```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentHost) { }  
}
```
<!-- .element: class="big-code" -->

##==##

# Qu'est-ce que l'exception et l'host ?
- L'exception -> l'exception en cours (NotFoundException, HttpException, etc) <br/><br/>
- L'host -> ici il s'agit du contexte d'exécution de votre application (http, graphql, rpc, webSocket)<br/><br/>
    - switchToHttp() <br/><br/>
    - switchToRpc()<br/><br/>
    - switchToWs()

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment l'utiliser ?
```typescript
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(RessourceNotFoundException)
export class RessourceNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentHost) {
    const context = host.switchToHttp() // Ici on choisit le contexte http car il s'agit d'une API rest
    const request = context.getRequest<Request>(); // On récupère l'objet requête et on le type en Request Express
    const response = context.getResponse<Response>() // On récupère l'objet réponse et on le type en Response Express
    response.status(404).json({ ...exception, path: request.url })
  }  
}
```
<!-- .element: class="medium-code" -->

##==##

# Comment enregistrer notre HttpException filter ?

- Propre à une route ou à un Controller <br/><br/>
- De manière globale

##==##

<!-- .slide: class="with-code inconsolata" -->
# Propre à un controller ou à un endpoint

```typescript
@UseFilters(new RessourceNotFoundExceptionFilter())
@Controller('api/todos')
```
<!-- .element: class="big-code" -->

<br/><br/>

```typescript
@Post()
@UseFilters(RessourceNotFoundExceptionFilter)
getTodos() {}
```
<!--.element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# De manière globale

```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new RessourceNotFoundExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```
<!-- .element: class="big-code" -->
<br/><br/>

**Et si cette exception dépend de providers ?**

##==##

<!-- .slide: class="with-code inconsolata" -->
# Il est possible de l'enregistrer comme un provider

```typescript
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: RessourceNotFoundExceptionFilter,
    },
  ],
})
export class AppModule {}
```
<!-- .element: class="medium-code" -->
