<!-- .slide: class="with-code inconsolata" -->

# Comment définir un endpoint

Un **Endpoint** est une simple fonction précédée d'une annotation
<br/><br/>

```typescript
@Get('hello')
function sayHello() {
  return 'Hello';
}
```

<!-- .element: class="big-code" -->

##==##

## Quelles sont les annotations disponibles ?

-   **@GET** <br/><br/>
-   **@Post** <br/><br/>
-   **@Put** <br/><br/>
-   **@Patch** <br/><br/>
-   **@Delete** <br/><br/>
-   **@ALL**

Notes:

-   Il est important de remarquer que les annotations @Get, @Post, @Put, @Patch, @Delete prennent en paramètre
    une string définissant un endpoint complémentaire à l'endpoint du controller

##==##

<!-- .slide: class="with-code inconsolata" -->

# Les paramètres

-   Rendre un endpoint dynamique <br/><br/>

```typescript
@Get('hello/:person')
function sayHelloToPerson(@Param('person') name: string) {
  return `Hello ${name}`;
}
```

<!-- .element: class="big-code" -->

##==##

# Les annotations de récupération de paramètres

-   **@Request() / @Req()** permet de récupérer la requête dans son intégralité <br/><br/>
-   **@Response() / @Res()** permet de récupérer la réponse dans son intégralité <br/><br/>
-   **@Session()** permet de récupérer la session courante <br/><br/>
-   **@Param(name_param?)** permet de récupérer un ou tous les pathParams<br/><br/>
-   **@Body(key?)** permet de récupérer le body dans son intégralité ou partiellement <br/><br/>
-   **@Query(key?)** permet de récupérer un ou tous les queryParams<br/><br/>
-   **@Ip()** permet de récupérer l'adresse ip de l'host <br/><br/>
-   **@HostParam()** permet de récupérer l'ensemble des hosts

##==##

# Exemple d'utilisation

```typescript
interface Credentials {
  name: string;
  password: string;
}

@Patch('user/:id')
function updateUser(@Body() credentials: Credentials) {
  return credentials; // { name: 'Nicolas', password: 'pwd' }
}

@Patch('user/:id')
function updateUser(@Body('password') password: string) {
    return password; // 'pwd'
}
```

<!-- .element: class="big-code" -->

##==##

# Les annotations de modifications de réponse

Les annotations permettant de modifier la réponse <br/><br/>

-   **HttpCode()** permet de modifier le status http de la réponse <br/><br/>
-   **Redirect()** permet de réaliser une redirection
