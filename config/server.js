/**
 * Base em MVC criada para quaisquer outros projetos.
 *
 * @author Murilo de Oliveira Silva.
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const router = express.Router();
const userRoute = require('../users/routes/userRoute');


app.use(cors());

app.use(express.static('public'));

app.use(bodyParser.json());

userRoute(router);

/** Swagger generator */
const expressSwagger = require('express-swagger-generator')(app);
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            'application/json',
            'application/xml',
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: '',
            },
        },
    },
    basedir: __dirname, //app absolute path
    files: ['../users/controllers/usuarioController.js'], //Path to the API handle folder
};
expressSwagger(options);
/** End Swagger generator */

app.use(router);

const porta = 3000;

console.log(`Servidor iniciado na porta ${porta}`)
app.listen(porta);
