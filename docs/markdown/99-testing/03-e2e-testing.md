<!-- .slide: class="with-code inconsolata" -->

# E2E Testing

```typescript
describe("Cats", () => {
    let app: INestApplication;
    let catsService = { findAll: () => ["test"] };

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [CatsModule],
        }).overrideProvider(CatsService).useValue(catsService).compile();
        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`/GET cats`, () => {
        return request(app.getHttpServer()).get("/cats").expect(200).expect({
            data: catsService.findAll(),
        });
    });

    afterAll(async () => {
        await app.close();
    });
});
```
