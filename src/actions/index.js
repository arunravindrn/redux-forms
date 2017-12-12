import { FORM_SUBMIT,
    FORM_SUBMT_SUCCESS,
    COMPANY_NAME_CHANGE,
    COMPANY_DESCRIPTION_CHANGE,
    IMAGE_UPLOAD,
    IMAGE_UPLOAD_SUCCESS,
    FORM_SUBMIT_FAILURE } from './types';
import axios from 'axios';

export const formSubmitted=(formdata)=>{
    
    return async(dispatch)=>{
        dispatch({type:FORM_SUBMIT})
        const config = {
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            }
        }
        if(formdata.company_name.value.length!==0 && formdata.company_description.value.length!==0){
            console.log(formdata);
        //   console.log("inside validated")
            
        let formData  = new FormData();
        formData.append('company_name',formdata.company_name.value)
        formData.append('company_description',formdata.company_description.value)
        let response = await axios.post(`http://posttestserver.com/post.php?dir=example`,formData,config)
        console.log(response);
    dispatch({
        type:FORM_SUBMT_SUCCESS,
        payload:{
                data:response.data,
                status:response.status
            }
    })
        }else{
            console.log("failed validation",formdata);
            
              dispatch({
        type:FORM_SUBMIT_FAILURE,
        payload:"Please fill out all fields"
    })
        }
    }
  
}

export const companyNameChanged = (text)=>{
    console.log(text)
    return{
        type:COMPANY_NAME_CHANGE,
        payload:text.target.value
    }
}

export const companyDescriptionChanged = (text)=>{
    console.log(text.target.value)
    return{
        type:COMPANY_DESCRIPTION_CHANGE,
        payload:text.target.value
    }
}


export const imageUploaded = (image)=>{
    console.log(image)
    return async(dispatch)=>{
        dispatch({type:IMAGE_UPLOAD})
        const formData = new FormData();
        formData.append('file',image);
        console.log("Formdata = ",formData)
        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
            
        }

        let response = await axios.post("http://posttestserver.com/post.php?dir=example",formData,config)
        console.log(response)

        dispatch({
            type:IMAGE_UPLOAD_SUCCESS,
            payload:{
                data:response.data,
                status:response.status
            }
    })
    }
}