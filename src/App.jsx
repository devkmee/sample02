import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro.jsx';
import Detail from './pages/Detail.jsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    );
}

export default App;
