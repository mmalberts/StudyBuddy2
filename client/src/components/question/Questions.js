import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


export default class Questions extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        question: '',
        answer1:'',
        answer2:'',
        answer3:'',
        correctAnswer: "",
        number:1
      
      };

    }
    
    saveAndIncrement=(question)=>{
      let questions = this.props.questions.slice("");
      questions.push(question);
      let number= this.state.number + 1;
      this.setState({
        question: '',
        answer1:'',
        answer2:'',
        answer3:'',
        correctAnswer: "",
        number:number,
        questions: questions
      });
    }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
         <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                     
                      <h2 className="qh2">question {this.state.number}</h2>
            
                      
                    
                      <h3 className="qh3">what is the question?</h3>
                      <input className="addnew" value={this.state.question} type="text" name="question" onChange={this.handleChange}/>
                      <h3 className="qh3">what are the possible answers?</h3>
                      <input className="addnew"  value={this.state.answer1} onChange={this.handleChange} type="text" name="answer1" placeholder="1"/>
                      <input className="addnew"  value={this.state.answer2} onChange={this.handleChange} type="text" name="answer2" placeholder="2"/>
                      <input className="addnew"  value={this.state.answer3} onChange={this.handleChange} type="text" name="answer3" placeholder="3"/>
                      <h3 className="qh3">which answer is correct?</h3>
                      <input className="addnew" value={this.state.correctAnswer}type="text" name="correctAnswer" onChange={this.handleChange} placeholder="enter 1, 2, or 3"/>
                      
                      
                      <button className="btn" onClick={()=>this.saveAndIncrement(this.state)}>Save Question </button>
                      

                                 
                      <button className="white-button send oversized" id="submit" onClick={this.props.saveQuestion} >create my flashcard set! </button>
                      
                      </div>
                   
        );
    }
}
