import React from 'react'
import EditGoal from './EditGoal'

import { connect } from 'react-redux'
import { fetchDeleteGoals } from '../actionCreators/userActions'

class Goal extends React.Component {

  handleEdit = () => {
    this.props.props.history.replace(`/my_goals/edit/${this.props.goal.id}`)

    this.props.handleClickedGoal(this.props.goal)
  }

  handleDelete = () => {
    this.props.deleteGoal(this.props.goal.id, this.props.token)
  }


  render() {
    return (
      this.props.goal.id === parseInt(this.props.props.match.params.goalId) ?
        <EditGoal props={this.props.props} goal={this.props.goal} handleEdit={this.handleEdit} /> :
      (<div className='grid-container'>
        <div className='grid-item'>
          <h4>Goal Date:</h4> {this.props.goal.goalDate}
          <h4>Bedtime Target:</h4>  {this.props.goal.bedtimeTarget}
          <h4>Wakeup Time Target:</h4> {this.props.goal.wakeupTarget}

          <br />

          <button type='button' onClick={this.handleEdit}>edit</button>
          <button type='button' onClick={this.handleDelete}>delete</button>
        </div>
      </div>)
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    goals: state.goals,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteGoal: (goalId, access_token) => dispatch(fetchDeleteGoals(goalId, access_token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Goal)