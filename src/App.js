import './App.css';
import {useState} from 'react';
import Card from './components/card/Card'

function App() {
  
  const [inputvalue,setinputvalue]=useState(1);
  const [arr,setarr]=useState([]);
  const [arr2,setarr2]=useState([]);
  const [previous,setprevious]=useState(0);
 const handlesubmit=(e)=>{
  e.preventDefault();
  var arr1 = [];
  var arr3 = [];
  console.log(inputvalue);
  for(let i=0;i<inputvalue;i++){
    arr1.push("card"+(i+1));
    arr3.push(false);
  }
  setarr(arr1);
  setarr2(arr3);
 }

 const handleClick = (index) =>{
  const newarr = arr2;
  newarr[previous] = false;
  console.log(index);
  newarr[index] = true;
  setarr2(newarr);
  console.log(arr2);
  setprevious(index);
 }

  return (
   <>
   <div className="inputvalue">
    <input type='number' value={inputvalue} onChange={(e)=>{setinputvalue(e.target.value); console.log(e.target.value)}}/>
    <button className="button" onClick={handlesubmit}>
          Submit
        </button>
    </div>
    <div className="table">
    <table>
        <thead>
          <tr>
            <th>Card_Id</th>
            <th>Card Name</th>
            <th>Open Card</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((item, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item}</td>
              <td>
                <button className='button1' onClick={()=>handleClick(index)}> { arr2[index]? <Card />:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQqTSfENXIHBYv-5SoioZ-U-opzQSSWOR0xpu0l-66OxZfCRM0PnGoqGtURaYuQt4e8Y&usqp=CAU"/>}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
   </>
  );
}

export default App;
