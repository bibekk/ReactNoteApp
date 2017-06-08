import React from 'react';


class Note extends React.Component {
   constructor(props){
       super(props);
       
       this.cancelEdit = this.cancelEdit.bind(this);
       this.update = this.update.bind(this);
   }
       
    //handling the change in text value to update the state with new value
    handleTextChange(e){
        this.setState({ body :  e.target.value });
    }
    
    
    //canceling edit set editmode state to false
    cancelEdit(){ 
        this.props.cancelEditNoteHandler(this.props.id);
    }
    
    //this sets editmode to false and updates the body with the latest state value
    update(){
        this.props.updateNoteCallBack(this.props.id,this.refs.commentTitle.value, this.refs.commentText.value);
    }
      
    render() {
       if(this.props.editmode){ 
           return this.renderEdit()
       }
        
       if(this.props.editmode === false) {
           return this.renderDefault();    
       }
       
        if(this.props.active === false){
            return null;
        }
    }
    
    //default render without text area
    renderDefault(){
        return (
           <div className="note panel panel-primary bg-success">
                <div className ="panel-heading">{this.props.title}</div>
                <div className="panel-body">
                    <div className ="commentText">{this.props.body}</div>
                    <br/>
                    <button type="button" className="btn btn-primary" onClick={() =>this.props.editNoteHandler(this.props.id)}><span className ="glyphicon glyphicon-pencil"></span></button> 
                    &nbsp;
                   {/*use arrow function to pass values to method */}
                    <button type="button" className="btn btn-danger" onClick={this.props.deleteNoteCallBack}><span className ="glyphicon glyphicon-trash"></span></button> 
                </div>
           </div>
        );
    }
    
    //render with text area (edit mode)
    renderEdit(){
        return (
           <div className="note panel panel-primary bg-success">
                <div className ="panel-heading"><input autoFocus ref="commentTitle" type="text" defaultValue={this.props.title}/></div>
                <div className="panel-body">
                    <textarea ref ="commentText" defaultValue={this.props.body}></textarea>
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

                
