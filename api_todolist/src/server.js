import app from './app.js' 

import { config } from 'dotenv'
config()

const port = process.env.PORT || 3333


app.listen(port, () => console.log('Server started... ', port))