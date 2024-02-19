import { Router } from 'express'
import tasksController from './controller/tasksController.js'

const router = Router()

router.get('/tasks', tasksController.getAll)

router.post('/tasks', tasksController.create)

router.delete('/tasks/:id', tasksController.del)

router.put('/tasks/:id', tasksController.edit)

export default router