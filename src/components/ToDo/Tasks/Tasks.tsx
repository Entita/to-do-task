import React from 'react'
import { TasksWrapperStyled, ToggleAllStyled } from './Tasks.style'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { TaskFilters, TaskState } from '@/types/task'
import Task from './Task'
import agent from '@/utils/agent'
import { updateTask } from '@/lib/slices/taskSlice'

export const getAllIncompletedTasks = (tasks: TaskState[]) => tasks.filter(task => !task.completed)

const filterTasks = (tasks: TaskState[], filter: TaskFilters) => {
  // Filter tasks based of the current filter
  return tasks.filter(task => filter === 'All' || (filter === 'Completed' && task.completed) || (filter === 'Active' && !task.completed))
}

export default function Tasks() {
  const tasks = useAppSelector(state => state.tasks)
  const filteredTasks = filterTasks(tasks.value, tasks.filter)
  const allSelected = React.useMemo(() => getAllIncompletedTasks(filteredTasks).length === 0, [filteredTasks])

  const dispatch = useAppDispatch()
  const completeAllTasks = async() => {
    const completePromises = tasks.value.map(async(task) => {
      if (!task.completed) {
        await agent.Tasks.complete(task.id)
          .then((updatedTask) => dispatch(updateTask(updatedTask)))
          .catch(error => console.error(`Error completing task with id ${task.id}:`, error))
      }
    })

    // Spustíme všechny požadavky souběžně a zpracujeme je podle výsledků
    await Promise.allSettled(completePromises)
  }
  const incompleteAllTasks = async() => {
    const incompletePromises = tasks.value.map(async(task) => {
      if (task.completed) {
        await agent.Tasks.incomplete(task.id)
        .then((updatedTask) => dispatch(updateTask(updatedTask)))
        .catch(error => console.error(`Error incompleting task with id ${task.id}:`, error))
      }
    })

    // Spustíme všechny požadavky souběžně a zpracujeme je podle výsledků
    await Promise.allSettled(incompletePromises)
  }
  const toggleAllCheck = () => {
    const numberOfIncompletedTasks = getAllIncompletedTasks(tasks.value).length
    if (numberOfIncompletedTasks === 0) incompleteAllTasks()
    else completeAllTasks()
  }

  return (
    <TasksWrapperStyled>
      <ToggleAllStyled $allSelected={allSelected}>
        <input id='toggle-all' onClick={toggleAllCheck} type='checkbox' />
        <label htmlFor='toggle-all'>Toggle All Inputs</label>
      </ToggleAllStyled>
      {filteredTasks.map((task: TaskState) => <Task key={task.id} task={task} />)}
    </TasksWrapperStyled>
  )
}
