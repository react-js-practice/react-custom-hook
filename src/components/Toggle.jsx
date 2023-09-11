import useToggle from '../hooks/useToggle';
import { bulbOn, bulOff, switchOn, switchOff } from '../assets';

const Toggle = () => {
    const { toggle, toggleMe } = useToggle(false);
    return (
        <>
            {toggle ? <img src={bulbOn} /> : <img src={bulOff} />}
            <div className="card">
                <button onClick={toggleMe}>
                    {toggle ? (
                        <img src={switchOff} width="80px" />
                    ) : (
                        <img src={switchOn} width="80px" />
                    )}
                </button>
            </div>
        </>
    );
};

export default Toggle;
