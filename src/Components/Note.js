import React from 'react';


class Note extends React.Component {
   constructor(props){
       super(props);
       
       this.state = {
           editmode: this.props.editmode,
           title: this.props.title,
           body : this.props.body,

       }
       
       this.edit = this.edit.bind(this);
       this.cancelEdit = this.cancelEdit.bind(this);
       //onchange not implemented
       //this.handleTextChange = this.handleTextChange.bind(this);
       this.update = this.update.bind(this);
      // this.remove = this.remove.bind(this);
       
   }
       
    //handling the change in text value to update the state with new value
    handleTextChange(e){
        this.setState({ body :  e.target.value });
    }
    
    //if edit button clicked edit state is set to true
    edit(){
      this.setState({ editmode: true});
    }
    
    //canceling edit set editmode state to false
    cancelEdit(){
        this.setState({editmode: false});
    }
    
    //this sets editmode to false and updates the body with the latest state value
    update(){
       this.setState({
            editmode : false,
            //getting the reference of the textarea name
            title    : this.refs.commentTitle.value,
            body     : this.refs.commentText.value
        });
        //Calling the parent function via prop
        this.props.updateNoteCallBack(this.props.id,this.refs.commentTitle.value, this.refs.commentText.value);
    }
      
    render() {
       if(this.state.editmode){ // || this.props.title == 'New Note' && this.props.body == 'Sample text')
           return this.renderEdit()
       }
        
       if(this.state.editmode === false) {
           return this.renderDefault();    
       }
       
        if(this.state.active === false){
            return null;
        }
    }
    
    //default render without text area
    renderDefault(){
        return (
           <div className="note panel panel-primary bg-success">
                <div className ="panel-heading">{this.state.title}</div>
                <div className="panel-body">
                    <div className ="commentText">{this.state.body}</div>
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={this.edit}><span className ="glyphicon glyphicon-pencil">  Edit</span></button> 
                    &nbsp;
                   {/*use arrow function to pass values to method */}
                    <button type="button" className="btn btn-danger" onClick={this.props.deleteNoteCallBack}><span className ="glyphicon glyphicon-trash">  Delete</span></button> 
                </div>
           </div>
        );
    }
    
    //render with text area (edit mode)
    renderEdit(){
        return (
           <div className="note panel panel-primary bg-success">
                <div className ="panel-heading"><input ref="commentTitle" type="text" defaultValue={this.state.title}/></div>
                <div className="panel-body">
                    <textarea ref ="commentText" defaultValue={this.state.body}></textarea>
                    <br/>
                    <button type="button" className="btn btn-warning" onClick={this.cancelEdit}><span className = "glyphicon glyphicon-remove">Cancel</span></button>       
                    &nbsp;
                    <button type="button" className="btn btn-success" onClick={this.update}><span className ="glyphicon glyphicon-ok">  Update</span></button> 
                </div>
           </div>
        );
    }
    
}

export default Note;

                