import express from 'express'

// importando as rotas que acabamos de definir
import routes from './routes';

const app = express()

app.use(express.json())

// registrando as rotas na aplicação
app.use(routes)

app.listen(3000)
        