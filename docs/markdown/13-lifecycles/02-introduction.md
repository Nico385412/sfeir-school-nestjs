# Lifecycle dans NestJs

NestJs possède des évènements de lifecycle que l'on peut classer en trois catégories<br/><br/>

-   Initialisation <br/><br/>
-   En cours<br/><br/>
-   Fin du serveur

##==##

# Les 5 lifecycles

-   **onModuleInit()** appelé quand les dépendances du modules sont résolues <br/><br/>
-   **onApplicationBootstrap()** appelé quand tous les modules ont été correctement initialisés <br/><br/>
-   **onModuleDestroy()** appelé une fois que le signal de fin du serveur a été envoyé <br/><br/>
-   **beforeApplicationShutdown()** appelé une fois que tous les hooks onModuleDestroy ont été appelés<br/><br/>
-   **onApplicationShutdown()** appelé une fois que toutes les connections sont fermées<br><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Comment on implémente cela dans le code ?

Chaque lifecycle est une interface à implémenter<br/><br/>

```typescript
@Injectable()
export class UserService implements OnModuleInit {
    onModuleInit(): void {
        console.log("The module has been initialized");
    }
}
```

<!-- .element: class="big-code" -->
