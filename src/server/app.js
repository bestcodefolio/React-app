const express = require('express')
const sql = require('mssql/msnodesqlv8')
const app = express();

const SELECT_ALL_GIFS_QUERY = 'SELECT * FROM gifs';
const SELECT_ALL_USERS_QUERY = 'select * from users';

app.get('/', (req, res) => {
    res.send('hi')
})

const config = {
    driver: "msnodesqlv8",
    server: 'localhost', 
    database: 'gifs',
    options: {
        trustedConnection: true,
        useUTC: true
    } 
};

const poolPromise = new sql.ConnectionPool(config)
                                .connect()
                                .then(pool => {
                                    console.log('Connected to DB');
                                    return pool;
                                })
                                .catch(err => {
                                    console.error(err);
                                });

app.get('/gifs', async (req, res) => {
    const pool = await poolPromise;
    const request = pool.request();
    request.query(SELECT_ALL_GIFS_QUERY)
        .then(result => {
            res.send(result);
        })
})

app.get('/users', async (req, res) => {
    const pool = await poolPromise;
    const request = pool.request();
    request.query(SELECT_ALL_USERS_QUERY)
        .then(result => {
            res.send(result);
        })
})

app.get('/files', (req, res) => {
    res.send('nope')
})

app.listen(3000, () => {
    console.log('server started !!!')
})
