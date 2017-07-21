import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';
import Moment from 'react-moment';

class Task extends Component {
  static propTypes = {
    task: PropTypes.shape({
      name: PropTypes.string,
      tags: PropTypes.array,
      actual_effort: PropTypes.number,
      estimated_effort: PropTypes.number,
      due_date: PropTypes.string,
    }).isRequired,
    back: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
  };

  static defaultProps = {
    task: {
      name: '',
      tags: '',
      actual_effort: '',
      estimated_effort: '',
      due_date: '',
    },
  };

  constructor(props) {
    super();
    this.state = {
      isChangeName: false,
      task: props.task,
    };
  }

  changeName = () => {
    this.setState({
      isChangeName: true,
    })
  }

  saveName = () => {
    this.setState({
      isChangeName: false,
    })
  }

  back = () => this.props.back()

  save = () => this.props.save(this.state.task)

  render() {
    const { isChangeName, task } = this.state;

    return (
      <div>
        <p style={{ display: 'flex' }}>Task Name:
          {isChangeName
            ? (
              <div className="InputTaskName">
                <input type="text" value={task.name} onChange={(event) => this.setState({ task: { ...task, name: event.target.value }})} />
                <button onClick={this.saveName}>Save</button>
              </div>
              )
            : <p className="InputTaskName" style={{ margin: 0 }} onClick={this.changeName}>{task.name}</p>
          }
        </p>
        {task.tags
          ? task.tags.map((tags, key) => <p>Tags: {tags}</p>)
          : <p>No Tags</p>
        }
        <p>Actual Effort: {task.actual_effort} h</p>
        <p>Estimated Effort: {task.estimated_effort} h</p>
        <p>Due Date: <Moment format="YYYY.MM.DD">{task.due_date}</Moment></p>
        <p>Description: {task.description}</p>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    );
  }
}

export default Task;
