import React from 'react'
import { connect } from 'react-redux';
import {createClickCreator, makeMadLibCreator, mtvCreator} from '../actionCreators'

class CompletedForm extends React.Component{
    
    state = {
        complete: false,
        newMadlib: {},
        madlibToReplace: this.props.selectForm.text
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
    }

    madLibCreator(props){ 
        console.log(this.props.answers)
        fetch('https://clownsource-backend.herokuapp.com/madlibs',{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user_id: this.props.currentUser.id, template_id: this.props.selectForm.id, answers: this.props.answers})
        })
        .then((response) => response.json())
        .then((value) => {
          this.props.makeMadLib(value)
          this.setState({newMadlib: value.completed_text,
                        complete: true                                                        
          })
        })
       
      }
      
    
    render(){
        // console.log(this.props)
        // let complete = (`Hello ${this.props.answers.test_1}, I am ${this.props.answers.test_2} and Im ready to ${this.props.answers.test_3}`)
        // console.log(complete)
        // let complete_too = JSON.parse(JSON.stringify(this.props.selectForm.text))
        // console.log(typeof complete_too)
        // console.log(this.props.selectForm.text)

        // IN RUBY: params[:answers].each_value{|value| currenttemplate.text.sub!(/[_]/, value)}

        // let allanswers = Object.values(this.props.answers)
        // console.log(allanswers)
        // console.log(this.props.selectForm.text)
        // allanswers.map(thing => this.setState({madlibToReplace: this.state.madlibToReplace.replace(/_/, thing)}))
        // // console.log(newresult)
        console.log(this.state)
        
        //THIS WILL NOT WORK IN JUST JS, best thing for future use is to just 
        return(
         
            <div className="Centerwindow">
              <h4 className="Top">Clowns sent!</h4>
                 {/* {this.props.selectForm.displaytext} */}
                 <br/>
                 And your answer is...
                 <br/>
                 <p>
                  {this.state.complete? this.state.newMadlib : this.props.selectForm.text}
                 {/* Hello {this.props.answers.test_1}, I am {this.props.answers.test_2} and I'm ready to {this.props.answers.test_3}  */}
                 </p>  
                {this.state.complete? <button onClick={this.props.create}>Go again?</button>:<button onClick={(props)=>this.madLibCreator(props)}>Send your answer!?</button> } 
                {this.state.complete? <button onClick={this.props.mtv}>View and Email?</button>:""}
            </div>
        )
    }
}

const MSP = (state) => {
    console.log(`MSP`,state)
    return {
        answers: state.answers,
        selectForm : state.selectForm,
        userName:  state.userName,
        currentUser: state.currentUser,
        allMadlibs: state.allMadlibs,
        viewMadlib: state.viewMadlib

    }
  }
  
const MDP = (dispatch) => {
    // console.log(`MDP`, dispatch)
    return {
      create: () => dispatch(createClickCreator()),
      makeMadLib: (value) => dispatch(makeMadLibCreator(value)),
      mtv: () => dispatch(mtvCreator())
    }
  }
  
export default connect(MSP, MDP)(CompletedForm);
