/*
in the museum file this is the actions folder seperated as actions and types.

*/ 

const CREATECLICK = "CREATECLICK"
const VIEWCLICK = "VIEWCLICK"
const COMPLETECLICK = "COMPLETECLICK"
const CREATESUBMIT = "CREATESUBMIT"
const ANSWER = "ANSWER"
const VIEWMADLIB = "VIEWMADLIB"
const LOGOUT = "LOGOUT"
const CHANGEUSER = "CHANGEUSER"
const MAKEMADLIB = "MAKEMADLIB"
const MAKETOVIEW = "MAKETOVIEW"


const createClickCreator = () => ({type: CREATECLICK})
const viewClickCreator = () => ({type: VIEWCLICK})
const completeClickCreator = () => ({type: COMPLETECLICK})
const logOutCreator = () => ({type: LOGOUT})
const mtvCreator = () => ({type: MAKETOVIEW})
const makeMadLibCreator = (value) => ({type: MAKEMADLIB, payload: {value}})
const changeUserCreator = (value) => ({type: CHANGEUSER, payload: {value}})
const createSubmitCreator = (value) => ({type: CREATESUBMIT, payload: {value}})
const answerCreator = (value) => ({type: ANSWER, payload: {value}})
const viewMadLibCreator = (value) => ({type: VIEWMADLIB, payload: {value}})
//TO ADD: madlib creator. (at the end of post request adds the response to state.)

//how to fetch
const GETTEMPLATES = "GETTEMPLATES"
const getTemplates = (templates) => ({type: GETTEMPLATES, payload: {templates}})
const GETQUESTIONS = "GETQUESTIONS"
const getQuestions = (questions) => ({type: GETQUESTIONS, payload: {questions}})
const GETMADLIBS = "GETMADLIBS"
const getMadlibs = (madlibs) => ({type: GETMADLIBS, payload: {madlibs}})
const GETUSERS = "GETUSERS"
const getUsers = (users) => ({type: GETUSERS, payload: {users}})
const DELETEMADLIB = "DELETEMADLIB"
const deleteMadLib = (id) => ({type: DELETEMADLIB, payload: {id}})
// fetch delete
// const DELETEMADLIBS = "DELETEMADLIB"
// const DELETEMADLIBS = (madlibs) => ({type: DELETEMADLIBS, payload: {madlibs}})

export {
    createClickCreator,
    viewClickCreator,
    completeClickCreator,
    logOutCreator,
    createSubmitCreator,
    changeUserCreator,
    makeMadLibCreator,
    mtvCreator,
    getTemplates,
    getQuestions,
    getMadlibs,
    getUsers,
    deleteMadLib,
    answerCreator,
    viewMadLibCreator,
}