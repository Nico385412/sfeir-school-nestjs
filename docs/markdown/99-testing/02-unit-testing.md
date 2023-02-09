<!-- .slide: class="with-code inconsolata" -->

# Unit Testing

```typescript
describe("CatsController", () => {
    let catsController: CatsController;
    let catsService: CatsService;
    beforeEach(() => {
        catsService = new CatsService();
        catsController = new CatsController(catsService);
    });
    describe("findAll", () => {
        it("should return an array of cats", async () => {
            const result = ["test"];
            jest.spyOn(catsService, "findAll").mockImplementation(() => result);
            expect(await catsController.findAll()).toBe(result);
        });
    });
});
```
