import {FC,ReactElement} from 'react';
import { AppStateInterface,stateObj } from '../App';
import CardComponent  from './CardComponent';

export interface ListCardInterface{
    data:AppStateInterface;
    handleChange :  (content:string,objectID:string)=>void;
    handleDelete : (objectID:string)=>void;
    handleActive: (inactive:boolean,objectID:string)=>void;
}

const ListCardComponents:FC<ListCardInterface> = ({data,handleChange,handleDelete,handleActive}:ListCardInterface):ReactElement=>{
    return(<ul style={{listStyle:"none"}}>
            {data.data.map((value:stateObj):ReactElement=>{
                return  <CardComponent tag="li" data = {value} handleChange={handleChange} key={value.objectID} handleDelete= {handleDelete} keyValue={value.objectID} handleActive={handleActive}/>
            })}
    </ul>)
}
export default ListCardComponents;