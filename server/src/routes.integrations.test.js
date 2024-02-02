const request = require('supertest');
const app = require('./index');

describe('Create User Controller', () => {

    it('should be able to create a new user', async () => {
        const response = await request(app)
        .post('/user')
        .send({ 
            name: 'Teste', 
            email: 'teste@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('token');
    });

    it('should not be able to create an existing user', async () => {
        await request(app)
        .post('/user')
        .send({ 
            name: 'Teste Existente', 
            email: 'testeExistente@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })
        
        const response = await request(app)
        .post('/user')
        .send({ 
            name: 'Teste Existente', 
            email: 'testeExistente@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

    it('should be able to edit a user', async () => {
        await request(app)
        .post('/user')
        .send({ 
            name: 'Teste Editado', 
            email: 'testeEditado@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        const response = await request(app)
        .put('/user')
        .send({ 
            email: 'testeEditado@gmail.com', 
            password: '1234'
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should be able to find one user', async () => {
        await request(app)
        .post('/user')
        .send({ 
            name: 'Teste Para Entrar', 
            email: 'testeEntrar@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        const response = await request(app)
        .post('/user/login')
        .send({ 
            email: 'testeEntrar@gmail.com', 
            password: '123'
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should not be able to find one user', async () => {
        const response = await request(app)
        .post('/user/login')
        .send({ 
            email: 'testeUsuarioInesistente@gmail.com', 
            password: '123'
        })

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message');
    });

    it('should be able to find one user with a token', async () => {
        const user = await request(app)
        .post('/user')
        .send({ 
            name: 'Teste P Entrar C Token', 
            email: 'testeEntrarToken@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        const response = await request(app)
        .post('/user/token')
        .send({ 
            token: user.body.token
        })

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should not be able to find one user with a token', async () => {
        const user = await request(app)
        .post('/user')
        .send({ 
            name: 'Teste P Entrar C Token', 
            email: 'testeEntrarToken@gmail.com', 
            password: '123', 
            address: 'Rua Teste de Integração, 100' 
        })

        const response = await request(app)
        .post('/user/token')
        .send({ 
            token: user.body.token
        })

        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message');
    });

    it('should be able to create a new restaurant', async () => {
        const response = await request(app)
        .post('/user/restaurant')
        .send({ 
            name: 'Pizzaria Teste', 
            food_type: 'Teste', 
            phone: '0000-0000', 
            address: 'Rua Teste de Integração, 100', 
            stars: '4,9', 
            delivery_time: 10, 
            delivery_price: '0,00',
            image: 'restaurante-sem-futuro'
        })

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should not be able to create an existing restaurant', async () => {
        await request(app)
        .post('/user/restaurant')
        .send({ 
            name: 'Pizzaria Teste', 
            food_type: 'Teste', 
            phone: '0000-0000', 
            address: 'Rua Teste de Integração, 100', 
            stars: '4,9', 
            delivery_time: 10, 
            delivery_price: '0,00',
            image: 'restaurante-sem-futuro'
        })
        
        const response = await request(app)
        .post('/user/restaurant')
        .send({ 
            name: 'Pizzaria Teste', 
            food_type: 'Teste', 
            phone: '0000-0000', 
            address: 'Rua Teste de Integração, 100', 
            stars: '4,9', 
            delivery_time: 10, 
            delivery_price: '0,00',
            image: 'restaurante-sem-futuro'
        })

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message');
    });

    it('should be able to return all restaurants', async () => {
        await request(app)
        .post('/user/restaurant')
        .send({ 
            name: 'Pizzaria Teste', 
            food_type: 'Teste', 
            phone: '0000-0000', 
            address: 'Rua Teste de Integração, 100', 
            stars: '4,9', 
            delivery_time: 10, 
            delivery_price: '0,00',
            image: 'restaurante-sem-futuro'
        })
        
        const response = await request(app)
        .get('/user/restaurant')

        expect(response.status).toBe(200);
    });
})