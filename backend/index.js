import Express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = Express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'akash123',
    database: 'test',

})
db.connect(function (err) {
    if (err) {
        console.log('Error connecting to Database', err);
        return;
    }
    console.log('Connection established');
});

app.use(Express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.json('hallow this is the backend')
})

app.get('/books', (req, res) => {
    // res.json('hallow this is the book page')
    const query = 'select * from books;'
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

//add new data
app.post('/books', (req, res) => {
    console.log(req.body);
    const q = "INSERT INTO books (id,book) VALUES(?)"
    const VALUES = [req.body.id, req.body.book]
    db.query(q, [VALUES], (err, data) => {
        if (err) return res.json(err)
        return res.json('books has been created sucessfully')
    })
})

//delete
app.delete('/books/:id', (req, res) => {
    const id = req.params.id
    const q = 'DELETE FROM books WHERE id=?'
    db.query(q, [id], (err, data) => {
        if (err) return res.json(err)
        return res.json('data deleted sucessfully')
    })
})
//update
app.put('/books/:id', (req, res) => {
    const id = req.params.id
  
    const q = 'UPDATE books SET id = ?, book= ? WHERE id= ?'
    const VALUES = [req.body.id, req.body.book]

    db.query(q,[...VALUES,id], (err, data) => {
        if (err) return res.json(err)
        return res.json('data updated sucessfully')
    })
})

app.listen(8800, () => {
    console.log('connected to backend');
})