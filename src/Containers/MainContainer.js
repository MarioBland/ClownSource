import React from 'react'
import { connect } from 'react-redux';
import MadLibCreator from '../components/MadLibCreator'
import Questions from '../components/Questions'
import {getTemplates, getQuestions, getMadlibs} from  '../actionCreators'
// import CompletedForm from '../THE GRAVEYARD/CompletedForm' 
import MadLibView from '../components/MadLibView'
import SingleView from '../components/SingleView'

class MainContainer extends React.Component{
    
    componentDidMount(){
        fetch('http://localhost:3000/templates')
        .then(response => response.json())
        .then(templates => {this.props.getTemplates(templates)});
        fetch('http://localhost:3000/questions')
        .then(response => response.json())
        .then(questions => {this.props.getQuestions(questions)});
        fetch('http://localhost:3000/madlibs')
        .then(response => response.json())
        .then(madlibs => {this.props.getMadlibs(madlibs)});      
  }

  pageRender = () => {
    switch (this.props.MadLibAction) {
      case "Create":
        return this.props.selectForm? <Questions/> : <MadLibCreator/>
      case "View":
        return this.props.viewMadLib ?  <SingleView/> : <MadLibView/>
     default:
        return ('Pick something will ya?') 
    }
  }


    render(){
        
        return(  
            
            
            <div className>
                
                
                {this.pageRender()}
                


            </div>
        )
    }
}




const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        userName:  state.userName,
        formCreateClick: state.formCreateClick,
        viewMadLib: state.viewMadlib,
        MadLibAction: state.MadLibAction,
        selectForm: state.selectForm,
        //fetch here
        allTemplates: state.allTemplates,
        allQuestions: state.allQuestions,
        allMadlibs: state.allMadlibs
    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch) 
    return {
        getTemplates: (templates) => dispatch(getTemplates(templates)),
        getQuestions: (questions) => dispatch(getQuestions(questions)),
        getMadlibs: (madlibs) => dispatch(getMadlibs(madlibs))
    }
  }
  
export default connect(MSP, MDP)(MainContainer);