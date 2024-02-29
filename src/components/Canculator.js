import React from "react";
import './canculator.css'
import { useDispatch,useSelector } from "react-redux";
import {loadAns, loadBackspace, loadButtons, loadClear,} from '../redux/canculatorRedux/canculator.actions'
import {CALCULATOR_KEY} from '../redux/canculatorRedux/canculatorReduser'

const Canculator = () => {

    const dispatch = useDispatch()
    const view = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })

    return (  
        <>
        
        <div className='container'>
       <div className='canculator'>
       <form> 
      <div className='display'>
          <input placeholder="0" type='text' value={(view.ans).length === 0 ? view.number: view.ans}/>
         
      </div>
      <div>
          <input 
          type='button' 
          value='AC'
          className="operator"
          onClick={() => dispatch(loadClear())}
          />
          <input 
          type='button'
           value='DE'
           className="operator"
           onClick={() => dispatch(loadBackspace())}
           />
          <input
           type='button'
           value='.'
           className="operator"
           onClick={() => dispatch(loadButtons('.'))}
           />
          <input 
          type='button'
           value='/'
           className="operator"
           onClick={() => dispatch(loadButtons('/'))}
           />
      </div>

      <div>
          <input
           type='button' 
           value= '7'
           onClick={() => dispatch(loadButtons(7))}
          />
          <input
           type='button'
           value='8'
           onClick={() => dispatch(loadButtons(8))}
          />
          <input
           type='button'
           value='9'
           onClick={() => dispatch(loadButtons(9))}
          />
          <input
           type='button'
           value='*'
           onClick={() => dispatch(loadButtons('*'))}
          />
      </div>


      <div>
          <input 
          type='button'
           value='4'
           onClick={() => dispatch(loadButtons(4))}
          />
          <input 
          type='button'
           value='5'
           onClick={() => dispatch(loadButtons(5))}
          />
          <input 
          type='button'
           value='6'
           onClick={() => dispatch(loadButtons(6))}
          />
          <input 
          type='button'
           value='-'
           onClick={() => dispatch(loadButtons('-'))}
          />
      </div>

      <div>
          <input
           type='button'
           value='1'
           onClick={() => dispatch(loadButtons(1))}
          />
          <input
           type='button'
           value='2'
           onClick={() => dispatch(loadButtons(2))}
          />
          <input
           type='button'
           value='3'
           onClick={() => dispatch(loadButtons(3))}
          />
          <input
           type='button'
           value='+'
           onClick={() => dispatch(loadButtons('+'))}
          />
      </div>


      <div>
          <input
           type='button'
           value='00'
           onClick={() => dispatch(loadButtons('00'))}
          />
          <input
           type='button'
           value='0'
           onClick={() => dispatch(loadButtons(0))}
           
          />
          <input
           type='button'
           value='=' 
          className='equal'
          onClick={() => dispatch(loadAns())}
          />
          </div>
      </form>
        </div>
    </div>
   </>
    );
}
 
export default Canculator;