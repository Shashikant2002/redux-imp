import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decNum, incNum } from './redux/action/action';



function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  console.log(myState)
  return (
    <div className="text-center w-100 d-flex justify-content-center py-5">
      <div className='d-flex justify-content-center flex-column' style={{ width: "100%", maxWidth: "300px" }}>
        <Button className='px-5 m-3 py-2' onClick={() => dispatch(incNum(10))}>Increment</Button>
        <h1 className='text-center'>{myState}</h1>
        <Button className='px-5 m-3 py-2' onClick={() => dispatch(decNum(0))}>Decrement</Button>
      </div>
    </div>
  );
}

export default App;
