import { useDispatch, useSelector } from "react-redux";
import { increment ,decrement , demoapp} from "./CounterSlice";
function Counter(){

    const dispatch = useDispatch()

    return(
        <div>
            <h1>hello madhu...!</h1>
            <button onClick={()=>dispatch(increment())}>{"Increament"}</button>
            <button onClick={()=>dispatch(decrement())}>{"Decreament"}</button>
            <button onClick={()=>dispatch(demoapp())}>{"Increament by 5"}</button>
        </div>
    )
}
export default Counter; 