import React from 'react'
import { connect } from 'react-redux'
import { Results } from './Results.react'
import * as actionCreators from '../actions/action_creators'

export const Battle = React.createClass({
  render(){
    return (
      !this.props.finishFlag  ?
        <div>
          <h1> Battle No. {this.props.numQuestion} <br/>
          {this.props.percentComplete}% sorted. </h1>
          <div className="voting">
               <div onClick={() => this.props.vote(-1)}>
                  <img src={"images/"+this.props.leftImage} alt={this.props.left}/>
                  <h1> {this.props.left} </h1>
               </div>
                <div onClick={() => this.props.vote(1)}>
                  <img src={"images/"+this.props.rightImage} alt={this.props.right} />
                  <h1> {this.props.right} </h1>
                 </div>
           </div>
        </div>
           :
           <Results {...this.props}/>
    )
  }
})

function mapStateToProps(state){
  return {
    left : state.left,
    right : state.right,
    finishFlag : state.finishFlag,
    namMember : state.namMember,
    equal : state.equal,
    lstMember : state.lstMember,
    leftImage : state.leftImage,
    rightImage : state.rightImage,
    numQuestion : state.numQuestion,
    percentComplete: state.percentComplete
  }
}

export const BattleContainer = connect(
  mapStateToProps,
  actionCreators
)(Battle)
