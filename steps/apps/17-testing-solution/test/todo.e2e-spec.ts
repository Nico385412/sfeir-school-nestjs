import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from 'supertest';

describe("Todo", () => {
    let app: INestApplication;

    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleRef.createNestApplication();
        await app.init();
    });

    it(`GET api/todos/:id`, () => {
        return request(app.getHttpServer()).get("/api/todos/1").expect(200).expect({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        });
    });

    afterAll(async () => {
        await app.close();
    });
});