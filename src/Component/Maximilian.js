import React, {useEffect, useRef,useState} from 'react'

export const Maximilian = () => {
    const NameInputRef = useRef()
    const[InputName, setInputName]  = useState("");
    const[InputNameIsValid, setEnteredNameIsValid] =useState(false);
    const[enterNaemTouched,setenterNaemTouched] = useState(false);

    useEffect(() =>{
        if(InputNameIsValid){
            console.log('Name input is valid!');    
        }
    }, [InputNameIsValid]);

     const inputHandler = (event)=>{
        setInputName(event.target.value);
     }
     const FormSubmit = (event) =>{
         event.preventDefault();
         setenterNaemTouched(true);
         if(InputName.trim() ===''){
            setEnteredNameIsValid(false);
             return;
         }
         setEnteredNameIsValid(true);
         console.log(InputName);
         const enteredValue = NameInputRef.current.value;
         console.log(enteredValue);
         setInputName('');
     };
     const InputNameIsValid = !enteredNameIsValid && enterNaemTouched;
     const NameInputclasses = InputNameIsValid ? "form-control-invalid" : 'form-control';
    return (
        <>
        <form onSubmit={FormSubmit}>
        <div className={NameInputclasses}>
        <label>Name</label>
        <input ref={NameInputRef} type="text" placeholder="input name here" 
            onChange={inputHandler} value={InputName}/>
            {InputNameIsValid && <p className="error-text"> Name must not be Empty</p>} 
        <button >Submit</button>
        </div>
        </form>   
        </>
    )
}
export default Maximilian;