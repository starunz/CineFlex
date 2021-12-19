import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movies from './componentes/Movies';


export default function App() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}