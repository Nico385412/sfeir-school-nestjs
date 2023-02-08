# Comment puis-je valider mon fichier de configuration
- Utile pour aligner tous vos fichiers de config <br/><br/>
- Propriété à passer au ConfigModule de Nest <br/><br/>
- Possibilité de faire de la validation custom grâce à Joi <br/><br/>

##==##

<!-- .slide: class="with-code inconsolata" -->
# Validation classique
```typescript
ConfigModule.forRoot({
  validationSchema: Joi.object({
    PORT: Joi.number().default(3000)  
  }),
  validationOptions: {
    allUnknown: false,
    abortEarly: true  
  } 
})
```
<!-- .element: class="big-code" -->
