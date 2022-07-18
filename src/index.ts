import express, { Request, Response } from 'express'
import { URLcontroller } from './controller/URLcontrtoller'

const api = express()
api.use(express.json())

const urlController = new URLcontroller()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))
