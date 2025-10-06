import  {useState,useEffect } from 'react';

function FormComponent(props){
    const [text, setText] = useState("");
    const [year, setDate] = useState(0);
    const [price, setPrice] = useState("");
    const [cmodel, setCmodel] = useState("");
    const [disk, setDisk] = useState("");
      useEffect(() => {
    console.log("Count updated:", text);
  }, [text]); // runs every time `count` changes

switch(props.control){
case "text":
    return(
    <div>
        <label for={props.controlName}>{props.controlName}</label>
        <input name={props.controlName} type="text" onChange={(e)=> setText(e.target.value)}/>
    </div>);
    
    break;
    case "date":
     return(
    <div>
        <label for={props.controlName}>{props.controlName}</label>
        <input name={props.controlName} type="date" onChange={(e)=> setDate(e.target.value)} />
    </div>);
    break;

    case "currency" :
        return(
    <div>
        <label for={props.controlName}>{props.controlName}</label>
        <input name={props.controlName} type="text" onChange={(e)=> setText(e.target.value)} />
    </div>);
    break;

    case "dropdown":
        return(
    <div>
        {/* <input name={props.controlName} type="dropdown" onChange={(e)=> setText(e.target.value)} /> */}
          <label htmlFor={props.controlName} > {props.controlName} </label>
            <select name={props.controlName}  >
                <option>Select the items</option>
                 {props.dataObj.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        
    </div>);
    break;

    case "checkbox":
        return(
    <div>
        <input name={props.controlName} type="checkbox" onChange={(e)=> setText(e.target.value)} />
    </div>);
    break;

    case "combobox":
        return(
    <div>
        <input name={props.controlName} type="dropdown" onChange={(e)=> setText(e.target.value)} />
    </div>);
    break;
    case "submit_button":
        return(
            <div>
                <button onClick=""></button>
            </div>
        );
    break;
}

function submitForm(){

}
}

export default FormComponent;
/** i am planning to create switch for each required control and use them for creating multiple forms */
/* i want to add label using name props */
/* now i want to submit the form from parent */
/*instead of setting the logic of submitting into the child i want it (current form) to also derive from parent*/
/*now i want it to pass the whole api and other things to be controlled from the parent and i want the features to be implemented like  allow it to have multiple forms */
/*
create a form component which will get the json obj from the parent app create the all fields using json get the submit logic from the parent json
i can bind the url also to the specific form so it will submit that specific instance of form to the specific url
*/

