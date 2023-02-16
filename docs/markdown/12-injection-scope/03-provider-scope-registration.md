<!-- .slide: class="with-code inconsolata" -->
# Comment changer le scope de notre provider ?
S'il s'agit d'un provider classique utilisant l'annotation **@Injectable** <br/><br/>

```typescript
@Injectable({
  scope: Scope.REQUEST  
})
export class TodoService {}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment changer le scope de notre provider ?
S'il s'agit d'un provider custom <br/><br/>

```typescript
{
  provide: 'LOGGER',
  useClass: CustomLogger,
  scope: Scope.TRANSIANT
}
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->
# Comment changer le scope d'un controller ?
Le scope d'un controller est soit Default, soit Request <br/><br/>

```typescript
@Controller({ scope: Scope.Request })
export class TodoController {}
```
<!-- .element: class="big-code" -->

