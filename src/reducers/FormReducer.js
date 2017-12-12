import { FORM_SUBMIT,
    FORM_SUBMT_SUCCESS,
    COMPANY_DESCRIPTION_CHANGE,
    COMPANY_NAME_CHANGE,
    IMAGE_UPLOAD,
    IMAGE_UPLOAD_SUCCESS,
    FORM_SUBMIT_FAILURE } from '../actions/types';

const INITIAL_STATE = { company_name:'',company_description:'',server_response:null,errors:""}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case COMPANY_NAME_CHANGE:
                return {...state,company_name:action.payload}
        case COMPANY_DESCRIPTION_CHANGE:
                return {...state,company_description:action.payload}
        case FORM_SUBMIT:
                return {...state,server_response:action.payload}
        case IMAGE_UPLOAD:
                return {...state,server_response:action.payload}
        case IMAGE_UPLOAD_SUCCESS:
                return {...state,server_response:action.payload}
        case FORM_SUBMIT_FAILURE:
                return {...state,errors:action.payload}
        case FORM_SUBMT_SUCCESS:
                return {...state,server_response:action.payload,errors:''}
        default:
            return state
    }
}

