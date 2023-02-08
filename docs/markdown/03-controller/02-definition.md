# A quoi sert un controller

-   Assure la responsabilité de catcher la request
-   Assure la responsabilité d'envoyer la réponse
-   Un controller par endpoint

![center h-600](assets/images/school/03-controller/controller.png)

##==##

<!-- .slide: class="with-code inconsolata"-->

# Qu'est ce qu'un Controller ?

Un **Controller** est une simple classe précédée de l'annotation **@Controller**
<br/><br/>

```typescript
@Controller()
export class StudentController {}
```

<!-- .element: class="big-code" -->

Notes:

-   le controller prend en paramètre une chaîne de caractère qui définira le endpoint global pour ce controller
-   le controller peut également prendre un objet { host: string, path: string) en paramètre
-   Il est également possible de définir un wildcard en utilisant les opérateur regex

##==##

<!-- .slide: class="with-code inconsolata" -->

# Où s'enregistre un controller

Un **Controller** doit être enregistré dans un tableau de controllers d'un module<br/><br/>

```typescript
@Module({
    controllers: [AppController],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->
