import React from 'react'
import Result from './Result.react'

export const Results = React.createClass({
  render(){
    let ranking = 0;
    let sameRank = 1;
    const namMember = this.props.namMember
    const lstMember = this.props.lstMember
    const equal = this.props.equal

    return (
      <div>
      <h1> Ranking </h1>
      <table>
      <tbody>
      { namMember.map((element,i) => {
        if (i<namMember.length) {
         if (lstMember[0][i+1] && equal[lstMember[0][i]]==lstMember[0][i+1]) {
           sameRank++
         } else {
           ranking += sameRank
           sameRank = 1
         }
       }
       return <Result key={i} ranking={ranking} name={namMember[lstMember[0][i]]} />
      })}
      </tbody>
    	</table>
      </div>
    )
  }
})
