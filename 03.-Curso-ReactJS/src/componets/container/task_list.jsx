import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enums'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Ejemplo', 'Descripcion de Ejemplo', true, LEVELS.NORMAL);



    return (
        <div>
            <div>
                <h1>
                    Your Tasks:
                </h1>
            </div>
            {/* TODO: aplicar un for/map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}



export default TaskListComponent
