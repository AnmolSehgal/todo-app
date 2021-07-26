import {Component} from 'react';
import {ImCross} from 'react-icons/im';
import {BsPencilSquare} from 'react-icons/bs'
import {stateObj} from '../App';
import InputComponent from './InputComponent'
import '../css/CardComponent.css'

interface CardComponentProps{
    data:stateObj;
    handleChange : (content:string,objectID:string)=>void;
    handleDelete: (objectID:string)=>void;
    handleActive: (inactive:boolean,objectID:string)=>void;
    keyValue:string;
    tag?: keyof JSX.IntrinsicElements;
}
interface CardComponentState{
    toggle:boolean;
    inactive:boolean;
    content:string;
    
}
class CardComponent extends Component<CardComponentProps,CardComponentState> {
    state:CardComponentState = {
                                    toggle:true,
                                    inactive:this.props.data.inactive,
                                    content:this.props.data.content,
                                }
    editContent  = (content:string)=>{
                    this.setState({content:content});
                    this.props.handleChange(content,this.props.data.objectID)
                    this.setState({toggle:!this.state.toggle})
    }
    render(){
        const {tag='li',keyValue,handleDelete} = this.props; 
        const Wrapper = tag;
        return (
                <Wrapper className="CardComponentContainer">
                    <input type="checkbox" 
                            defaultChecked={this.state.inactive}
                            onChange = {(evt):void=>{
                                        
                                        this.props.handleActive(!this.state.inactive,this.props.data.objectID);
                                        this.setState({inactive:!this.state.inactive});
                                        }}/>
                    {this.state.toggle?<span className={this.state.inactive?"todoActive":"todoInactive"}>{this.state.content} </span>:<InputComponent inputType = 'text' 
                                                                                            className = "" width="100px" 
                                                                                            inputValue = {this.state.content}
                                                                                            handleSubmit = {this.editContent}/>}
                    <i>
                        {this.state.toggle?<BsPencilSquare color='#ebdbda' onClick ={(evt)=>{
                                this.setState({toggle:!this.state.toggle})
                        }}/>:""}
                        </i>
                    <i>
                        <ImCross color='#ebdbda' onClick ={(evt)=>{
                                handleDelete(keyValue);
                        }}/>
                        </i>
                </Wrapper>
    );
    }
}
export default CardComponent;