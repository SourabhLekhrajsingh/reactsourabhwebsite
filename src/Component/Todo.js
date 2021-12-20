import React,{useState} from "react";
<link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"/>


const Todo = ()=>{
    const[InputData,setInputData]= useState('');
    const[items, setItems]= useState([]);
    const[toggleSubmit, setToggleSubmit]=useState(true);
    const[isEditItem,setIsEditItem] = useState(null);


    const addItem =()=>{
        if(!InputData){
            alert("please fill the data");

        }else if(InputData && !toggleSubmit ) {
            setItems(
                items.map((elem)=>{
                    if(elem.id === isEditItem){
                        return{...elem,name:InputData}
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setInputData('');
            setIsEditItem(null); 
        }
        else{
            const allInputData ={id:new Date().getTime().toString(),name:InputData}
            setItems([...items,allInputData]);
            setInputData('')
        }
         
    }
    // delete the items

    const deleteItems=(index)=>{
        const updateitems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateitems);
        }
        const EditItems =(id)=>{
            let newEditItem =items.find((elem) => {
                return elem.id === id;
            });
            console.log(newEditItem);
            setToggleSubmit(false);
            setInputData(newEditItem.name);
            setIsEditItem(id);
        }

        //remove all
        const removeAll = () =>{
            setItems([]);

        }
    return(
        <>
        <div>
        <label>Enter the value here:-</label><br/><br/>
        <input type="text" placeholder="Add items" id="none" 
            value={InputData}
            onChange={(e)=>setInputData(e.target.value)}
        />
        {
            toggleSubmit ?  <button onClick={addItem}>add</button>:
            <button onClick={()=>EditItems(addItem)}>Edit</button>


        }
        <button onClick={addItem}>add</button>
        </div>
        <div>
        {
            items.map((elem)=>
            {
                return(
                <div className="each-item" key={elem.id}>
                <h3>{elem.name}</h3>
                <button onClick={()=>EditItems(elem.id)}>Edit</button>
                <button onClick={()=>deleteItems(elem.id)}>Delete</button>
            </div>
                )
            })
        }   
        </div>
        <button onClick={removeAll} >Delete All</button>
        </>

    );
};
export default Todo;