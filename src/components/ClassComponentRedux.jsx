import React, { Component } from 'react'
import {connect} from 'react-redux'
import {reset} from '../redux/reducer/CountReducer'
import {addByAmount} from '../redux/reducer/CountReducer'
 class ClassComponentRedux extends Component {
     render() {
    return (
      <div>
        <h3>{this.props.name} Count Theme </h3>
        <h4>Count: {this.props.count.value}</h4>
        <button onClick={this.props.addAmount}>Add 5</button>
        <button onClick={this.props.resetInit}>Reset</button>
        <h4>{this.props.theme}</h4>
        <button onClick={this.props.changeTheme}>Theme Button</button>
      </div>
    )
  }
}
//pick the "countReducer", "themeReducer" from our Redux store's state
const mapStateToProps=(state, props)=>{
    console.log(state)
  return {count: state.countReducer, theme:state.themeReducer}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        name: 'Class Component',
        changeTheme:()=>{dispatch({type: 'TOGGLE_THEME' })},
        addAmount: ()=>{dispatch(addByAmount(5))},
        resetInit: ()=>{dispatch(reset())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponentRedux)