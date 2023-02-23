# A quoi peut bien servir un Pipe côté serveur ?

-   Transformer une valeur <br/><br/>
-   Faire de la validation <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Qu'est ce qu'un Pipe ?

Un pipe est une classe précédée de l'annotation **@Injectable** et qui implémente l'interface **PipeTransform** <br/><br/>

```typescript
@Get(':id')
getTodo(@Param('id', ParseUUIDPipe) id: UUID) : Todo { }
```
<!-- .element: class="big-code" -->

##==##

# Les Pipes déjà fournis

-   **ValidationPipe** : pipe de validation <br/><br/>
-   **ParseIntPipe** : pipe pour parser un entier <br/><br/>
-   **ParseBoolPipe** : pipe pour parser en boolean <br/><br/>
-   **ParseArrayPipe** : pipe pour parser en tableau <br/><br/>
-   **ParseUUIDPipe** : pipe pour parser un UUID <br/><br/>
-   **DefaultValuePipe** : pipe permettant de donner une valeur par défaut<br/><br/>

##==##