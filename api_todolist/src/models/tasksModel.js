import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAll = async () => await prisma.tasks.findMany()

const create = async task => {
  await prisma.tasks.create({
    data: {
      task,
    }
  })
}

const edit = async (id, task) => {
  return await prisma.tasks.update({
    where: { id, },
    data: { task, },
  })
}

const del = async id => {

  try {
    const deletedTask = await prisma.tasks.delete({
      where: { id, },
    })

    return deletedTask
  } catch (error) {
    return `Not found - Err: ${error.message}`
  }
}

export default {
  getAll,
  create,
  edit,
  del
}
