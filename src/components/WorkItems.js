import React from 'react'

const WorkItems = ({workPortfolioItems}) => (
  <ul>
  {
    workPortfolioItems.map(workItem=>(
      <li className={(workItem.activeState === true) ? "" : "inactive"}>
      <h4>        
        <a href={workItem.url} target={(workItem.url.length > 1 ? "_blank" : "")}>{workItem.name}</a>
      </h4>
      <i>Completed: {workItem.year}, Agency: {workItem.agency}, Notes: {workItem.notes}</i> 
      </li>
      ))
  }  
  </ul>    
)

export default WorkItems