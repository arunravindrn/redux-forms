import React,{Component} from 'react';
import { formSubmitted,companyDescriptionChanged,companyNameChanged,imageUploaded } from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Button,Form,FormGroup,Label,Input,FormText,Container,Col,Row,Alert } from 'reactstrap';
class ReduxForm extends Component{

    companyNameChange=(text)=>{
        this.props.companyNameChanged(text);
        // console.log(text.target.value)
    }

    companyDescriptionChange=(text)=>{
        this.props.companyDescriptionChanged(text)
        // console.log(text.target.value);
    }

    handleImage=(e)=>{
        // console.log(e.target.files[0]);
        if(e.target.files[0]){
            this.props.imageUploaded(e.target.files[0])
        }
    }

    submitForm=(e)=>{
        e.preventDefault()
        // console.log()
        
        this.props.formSubmitted(e.target.elements)
        let company_name = e.target.elements.company_name.value;
        let company_description = e.target.elements.company_description.value 
        // this.props.formSubmitted();
        // console.log(`form submitted with company name ${company_name} and company description ${company_description}`);
    }

    render(){
        let error;
     if(this.props.errors){
         error = <div>{this.props.errors}</div>
     }else{
         error = <div></div>
     }
        return(
            
            <div>
                
                {console.log("test",this.props)}
                <Container>
                {this.props.server_response && <Alert color="success">Server response:    {this.props.server_response.data}</Alert>}
                {this.props.server_response && <Alert color="info">Server Status:    {this.props.server_response.status}</Alert>}
                
                <h1 style={{textAlign:"center"}}>Company Details</h1>
                {this.props.errors && <Alert color="danger">{this.props.errors}</Alert>}

                <Form  onSubmit={this.submitForm}>
                    <FormGroup>
                        <Label for="company_name">Company Name</Label>
                        <Input type="text" name="company_name" onChange={(event)=>this.companyNameChange(event)}  value={this.props.company_name} placeholder="Enter Company Name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="company_description">Company Description</Label>
                <Input type="textarea" name="company_description" rows={5} onChange={(event)=>this.companyDescriptionChange(event)} value={this.props.company_description} placeholder="Describe about your company"/>
                </FormGroup>
                <FormGroup>
                    Select a file: <Input type="file" name="image" onChange={this.handleImage}/>
                </FormGroup>
                <Button color="primary" size="lg" block>Submit</Button>
                </Form>
                </Container>
            </div>
        );
    }
}

// const mapDispatchToProps=(dispatch)=>{
// return bindActionCreators({formSubmitted:formSubmitted,companyDescriptionChanged:companyDescriptionChanged,companyNameChanged:companyNameChanged})
// }
const mapStateToProps = (state)=>{
    console.log(state)
    
    return{
        company_name:state.forms.company_name,
        company_description:state.forms.company_description,
        server_response:state.forms.server_response,
        errors:state.forms.errors
    }
}

export default connect(mapStateToProps,{companyDescriptionChanged,companyNameChanged,formSubmitted,imageUploaded})(ReduxForm)