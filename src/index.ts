import Express from 'express';
import path from 'path';

const app = Express();
const root = path.join(__dirname, '..', 'views', 'assets');

app.set('view engine', 'ejs');
app.set

app.use('/static', Express.static(root));

app.get('/', (req: Express.Request, res: Express.Response) => {
    res.render('index');
});

app.get('/favicon.ico', (req: any, res: Express.Response) => res.sendFile('favicon.ico', { root: root }));

app.get('/embed', (req: Express.Request, res: Express.Response) => {
    res.render('embed', { config: req.query ?? {} });
});

app.listen(process.env.PORT || 3000, () => console.log('Listening on :' + (process.env.PORT || 3000)));
