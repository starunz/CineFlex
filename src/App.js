import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movies from './componentes/Movies';
import Topbar from './componentes/Topbar';
import Showtimes from './componentes/MovieTimes';


export default function App() {
    return(
        <>
            <Topbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<Showtimes />} />
                    <Route path='/assentos/:assetsId' element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}