import React, {Component} from 'react';
import Header from './Header';
class SecondPage extends Component{
    constructor(props){
        super(props);
        this.state ={
            active:'C',
        }
    }
    handleOnChange = (data) =>{
        this.setState({active: data})
    }
    render(){
        return(
            <div className="container-fluid">
            <Header active_link ="second" {...this.props}/>   
            <h3 className="pt-3">CAPER Chart</h3>
            <div className="">
                <div className="main-content">
                    {
                        this.state.active==="C"&&(
                            <div>
                                <h5>C—Context</h5>
                                <h6>Establish the time and place of a source’s origin.</h6>
                                <ul>
                                    <li>When was this source created?</li>
                                    <li>What historical events or specific circumstances relate to this source?</li>
                                    <li>How does this source connect to other times and places outside its immediate origin?</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        this.state.active==="A"&&(
                            <div>
                                <h5>A—Audiencet</h5>
                                <h6>Establish the intended audience of a source. Establish the point of view, or perspective, of the source.</h6>
                                <ul>
                                    <li>What person or group did the author/creator wish would view this item?</li>
                                    <li>How is the intended audience reflected in the source (consider elements like place of publication)?</li>
                                    <li>What is known about the author/creator of the source?</li>
                                    <li>How might the author/creator’s job, gender, education, family, religion, location, political beliefs, ethnicity, or other characteristics have influenced the content in the source?</li>
                                    <li>How does the source reflect who the author/creator was and what they thought?</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        this.state.active==="P"&&(
                            <div>
                                <h5>P—Purpose</h5>
                                <h6>Establish the purpose for creating the source.</h6>
                                <ul>
                                    <li>What did the author/creator hope to accomplish?</li>
                                    <li>Did the authors/creators seek to influence, teach, persuade, entertain, regulate, inform, record, fulfill a duty, describe, promote themself, or some combination of these?</li>
                                    <li>How does the source reflect this purpose?</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        this.state.active==="E"&&(
                            <div>
                                <h5>E—Evidence</h5>
                                <h6>Establish evidence to support your thesis.</h6>
                                <ul>
                                    <li>Does the source support or not support the statement?</li>
                                    <li>Are there short, direct quotes from the source that support your argument?</li>
                                    <li>Cross-referencing: Do the other sources support the source to make it stronger?</li>
                                </ul>
                            </div>
                        )
                    }
                    {
                        this.state.active==="R"&&(
                            <div>
                                <h5>R—Reliability</h5>
                                <h6>Establish the value of the source.</h6>
                                <ul>
                                    <li>What is the author/creator trying to achieve by writing these things to this audience at this time?</li>
                                    <li>What is the tone of the source? If the author/creator is speaking to a particular audience, at a certain time, with a specific intention in mind, why do they make these language choices?</li>
                                    <li>What is the background of the author/creator, and how does that add value or credibility to the source?</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
                <div className="bottom-pagination">
                    <div className="text-center">
                        <div className="circle-text">C</div>
                        <div className={this.state.active==="C"?"active-circle":'circle'} onClick={()=>this.handleOnChange("C")}></div>
                    </div>
                    <div>
                        <div className="circle-text">A</div>
                        <div className={this.state.active==="A"?"active-circle":'circle'} onClick={()=>this.handleOnChange("A")}></div>
                    </div>
                    <div>
                        <div className="circle-text">P</div>
                        <div className={this.state.active==="P"?"active-circle":'circle'} onClick={()=>this.handleOnChange("P")}></div>
                    </div>
                    <div>
                        <div className="circle-text">E</div>
                        <div className={this.state.active==="E"?"active-circle":'circle'} onClick={()=>this.handleOnChange("E")}></div>
                    </div>
                    <div>
                        <div className="circle-text">R</div>
                        <div className={this.state.active==="R"?"active-circle":'circle'} onClick={()=>this.handleOnChange("R")}></div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default SecondPage;