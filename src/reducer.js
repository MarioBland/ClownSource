

let defaultState = {
    //our centrailized state goes here
    userName : '',
    userColor: '',


}

let reducer = (prevState=defaultState, action) => {
    //reducer is run once in createStore
    //this is whole thing is our reducer template.
    // console.log(arg1, arg2) ?? didn't get this part of the deal
    //use prevstate to add chagnge state.
    //make sure your payload keys are in order
        switch(action.type){
            case 'TEST':
              return console.log ('testing 1.2.3.')
                //to use () => this.dispatch.('TEST')
            case `HANDLE_CHANGE`:
              return console.log ('state : ${action.payload}')
                // to use  (event) => this.dispatch(`FORM_TEST`, event.target.value)
            case `ADD_TEXT`:
            //   return console.log ({...prevState, text: "", thangs=[...this.state.things, this.state.text]})
                //this is adding a text to state
                //reset your text state here if you want to. (text : "")
                //to use ()=> this.dispatch('ADD_TEXT')
            default:
                return prevState //do what previously happens, just a good catchall.
    }
}

export default reducer