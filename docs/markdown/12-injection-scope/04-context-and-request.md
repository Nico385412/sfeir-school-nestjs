<!-- .slide: class="with-code inconsolata" -->

# Comment récupérer l'instance de la requête en cours ?

Pour un serveur Nest Http, parfois il peut être utile de récupérer l'instance de la requête quand vous êtes dans un scope de type requête <br/><br/>

```typescript
@Injectable({ scope: Scope.REQUEST })
export class TodoService {
    constructor(@Inject(REQUEST) private readonly request: Request) {}
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata"-->

# Comment récupérer le contexte de la requête en cours ?

Pour un serveur Nest type gateway ou microservice, ça n'a pas de sens de récupérer l'instance de la requête, mais plus de sens de récupérer le contexte <br/> <br/>

```typescript
@Injectable({ scope: Scope.REQUEST })
export class TodoService {
    constructor(@Inject(CONTEXT) private readonly context: Context) {}
}
```

<!-- .element: class="big-code" -->

##==##

# Scope Bubbling

TodosController <-- TodosService <-- TodosRepository <br/><br/>

Imaginons que TodosService soit scopé à la Request <br/><br/>

**Le Bubbling** va répercuter son scope au controller. Le scope du service TodosRepository n'est pas impacté
