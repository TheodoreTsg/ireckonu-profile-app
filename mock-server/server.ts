import jsonServer from 'json-server';
import { delay as delayMiddleware } from './middlewares/delay';
import mockData from './resource/endPoints';
import { Router } from 'express';
import { ReportResource } from './resource/ReportResource';

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(delayMiddleware);
const router: Router = jsonServer.router(mockData);

// We use this one to bundle with JSON-SERVER
server.use(jsonServer.bodyParser);

server.use(
    jsonServer.rewriter(
        {
            '/rest/*': '/$1',
        }
    )
);

ReportResource.endPoints((server));

server.use(router);

const mockServerPort = 5000;

server.listen(mockServerPort, () => {
    console.log('JSON Server is running Open the browser at http://localhost:' + mockServerPort);
});
