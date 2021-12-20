import React,{useState} from 'react';

export const NewFrom = () => {
    // const [EnterTitle, setEnterTitle] = useState('');
    const [EnterSystem, SetEnterSystem] = useState({
        EnterTitle:'',
        EnterPassword:'',
    });

    const titlechangehandler = (event) => {
        SetEnterSystem({
            ...EnterSystem,
            EnterTitle:event.target.value,
        });
    };
    const passwoedchangehandler = (event) => {
        SetEnterSystem({
            ...EnterSystem,
            EnterPassword:event.target.value,
        });
    };
    const Submithandler = (event) =>{
        event.preventDefault();
    };
    return (
        <form onSubmit={Submithandler}>
         <label>Name</label><br/>
        <input type="text" placeholder="enter name here" onChange={titlechangehandler}></input>
        <br/>
        <label>Password</label><br/>
        <input type="text" placeholder="enter password here" onChange={passwoedchangehandler}></input><br/> 
        <button type="submit">Submit</button> 
        </form>
    )
}
