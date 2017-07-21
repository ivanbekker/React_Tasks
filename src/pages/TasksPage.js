import React, { Component } from 'react';
import { connect } from 'react-redux'
import Moment from 'react-moment';
import Modal from 'react-modal';

import '../App.css';
import { saveTask } from '../actions';
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

  save = (task) => {
    this.props.saveTask(task);
    this.back();
  }

  render() {
    console.log(this.props);
    const { openModal, openTask } = this.state;

    return (
      <div className="Content">
        {this.props.tasks.map(t => t.obj_status === 'active' && (
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
          className="TaskModal"
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

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  saveTask: task => dispatch(saveTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
