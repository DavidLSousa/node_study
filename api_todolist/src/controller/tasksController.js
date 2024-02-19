import tasksModel from '../models/tasksModel.js'

const getAll = async (_, res) => {
  const allTasks = await tasksModel.getAll()

  return res.status(200).json(allTasks)
}

const create = async (req, res) => {
  await tasksModel.create(req.body.task)

  return res.status(201).json({ taskContent: req.body.task })
}

const edit = async (req, res) => {
  const { id } = req.params
  const { task } = req.body

  const editTask = tasksModel.edit(id, task)

  return res.status(204).json()
}

const del = async (req, res) => {
  const { id } = req.params

  const deletedTask = await tasksModel.del(id)

  return res.status(200).json({ deletedTask: deletedTask })
}

export default { 
  getAll,
  create,
  edit,
  del
}