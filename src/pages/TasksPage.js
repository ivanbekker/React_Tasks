import React, { Component } from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';

import '../App.css';
import TASKS from '../data/tasks';
import TaskContent from '../components/TaskContent';
import Task from '../components/Task';

class TasksPage extends Component {
  constructor(props) {
    super();
    this.state = {
      openModal: false,
      openTask: {},
    };
  }

  openTask = (task) => {
    this.setState({
      openModal: true,
      openTask: task,
    })
  }

  back = () => {
    this.setState({
      openModal: false,
      openTask: {},
    })
  }

  save = () => {
    console.log('save')
    this.back();
  }

  render() {
    const { openModal, openTask } = this.state;

    return (
      <div className="Content">
        {TASKS.map(t => t.obj_status === 'active' && (
          <div onClick={this.openTask.bind(null, t)} key={t.id} className="TaskContainer">
            {t.is_high_priority
              ? <div className="TaskPriority"><TaskContent task={t} /></div>
              : <TaskContent task={t} />
            }
          </div>
        ))}
        <Modal
          isOpen={openModal}
          contentLabel="Task"
        >
          <Task
            task={openTask}
            back={this.back}
            save={this.save}
          />
        </Modal>
      </div>
    );
  }
}

export default TasksPage;
