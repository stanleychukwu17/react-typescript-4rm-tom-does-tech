import './App.scss';
// import { useNavigate } from 'react-router-dom';

//** Working with generic
interface boxProps {
    children: React.ReactNode
}
function Box ({children}: boxProps) {
    return (
        <>
            {children}
        </>
    )
}


// import {Input} from '../input/Input'
// import {TodoEch} from '../todo/TodoEch'


function App() {
    // const navigate = useNavigate()

    return (
        <div className="AppMain">
            <Box>
                <div className="">Come back home today</div>
            </Box>
        </div>
    );
}

export default App;
