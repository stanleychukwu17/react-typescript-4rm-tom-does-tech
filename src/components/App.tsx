import './App.scss';
import Box, { Box1, Button }  from './1-generics';



function App() {
    // const navigate = useNavigate()

    return (
        <div className="AppMain">
            <Box><div className="">Come back home today</div></Box>

            <Box1 backgroundColor='red' padding={10}>
                <div className="">Come back home today</div>
            </Box1>

            <Button
                onDoubleClick={() => { alert('double clicked')}}
                styles={{background:'skyblue', borderRadius: '5px', padding: 5, paddingInline:10}}
            >Click me</Button>
        </div>
    );
}

export default App;
