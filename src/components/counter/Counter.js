import styles from "./counter.module.css"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {counterActions, secondCounterActions} from "../../store";

export function Counter() {
    const [counter, setToggleCounter] = useState(true);
    const counterValue = useSelector(state => state.counterKey.counter);
    const dispatch = useDispatch();

    const handleToggleCounter = () => {
        setToggleCounter(!counter);
    }

    return (
    <div className={styles.counter}>
        <h5 className="title">Redux Counter</h5>
        {counter && <div className={styles.counterDisplay}>{counterValue}</div>}
        <div>
            <button onClick={() => dispatch(counterActions.decrementa())}>Decrementa</button>
            <button onClick={() => dispatch(counterActions.incrementa({by: 1}))}>Incrementa</button>
            <button onClick={() => dispatch(counterActions.incrementa({by: 5}))}>Incrementa di 5</button>
            <button onClick={() => dispatch(secondCounterActions.decrementa())}>Decrementa c2</button>
            <button onClick={() => dispatch(secondCounterActions.incrementa({by: 1}))}>Incrementa c2</button>
            <button onClick={() => dispatch(secondCounterActions.incrementa({by: 5}))}>Incrementa c2 di 5</button>
        </div>
        <button onClick={handleToggleCounter}>Toggle Counter</button>
    </div>
    );
}
