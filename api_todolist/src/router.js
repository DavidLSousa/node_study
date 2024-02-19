import { Router } from 'express'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const router = Router()

router.get('/tasks', async (_, res) => {
  const allTasks = await prisma.tasks.findMany()

  return res.status(200).json(allTasks)
})

router.post('/tasks', async (req, res) => {
  const { task } = req.body

  await prisma.tasks.create({
    data: {
      task,
    }
  })

  return res.status(200).json({ taskContent: task })
})

export default router