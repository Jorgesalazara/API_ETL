const express = require('express');
const app = express();
const port = 3000;
const cor = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

app.get('/:city',(req,res) =>{
    const city = req.params.city;
    switch (city) {
        case 'Bogota':
            res.send('Cundinamarca');
            break;
        case 'Cartagena':
            res.send('Bolivar');
            break;
        case 'Barranquilla':
            res.send('Atlantico');
        case 'Santa Marta':
            res.send('Magadalena');
        default:
            res.send(city);
            break;    
    }
});

app.listen(port, () => {
    console.log(`App listening ${port}`)
});