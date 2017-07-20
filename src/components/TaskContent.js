import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import Moment from 'react-moment';

class TasksContent extends Component {
  static propTypes = {
    task: PropTypes.shape({
      name: PropTypes.string,
      tags: PropTypes.array,
      actual_effort: PropTypes.number,
      estimated_effort: PropTypes.number,
      due_date: PropTypes.string,
    }).isRequired,
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

  render() {
    const { task } = this.props;
    return (
      <div>
        <p>Task Name: {task.name}</p>
        {task.tags
          ? task.tags.map((tag, id) => <p key={id}>Tags: {tag}</p>)
          : <p>No Tags</p>
        }
        <p>Actual Effort: {task.actual_effort} h</p>
        <p>Estimated Effort: {task.estimated_effort} h</p>
        <p>Due Date: <Moment format="YYYY.MM.DD">{task.due_date}</Moment></p>
      </div>
    );
  }
}

export default TasksContent;
