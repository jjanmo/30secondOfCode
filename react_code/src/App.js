import CallTo from './components/CallTo';

function App() {
    return (
        <div className="App">
            <h2>This is CallTo Component</h2>
            <CallTo color="#eee" bgColor="dodgerblue" phone="01022223333">
                <h1>Call me later : 01022223333</h1>
            </CallTo>
        </div>
    );
}

export default App;
