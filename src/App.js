import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import Movies from './componentes/Movies';
import Topbar from './componentes/Topbar';
import Showtimes from './componentes/MovieTimes';
import Seats from './componentes/Seats';
import Success from './componentes/Success';

export default function App() {
    const [order, setOrder] = useState(null);

    return(
        <>
            <Topbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Movies />} />
                    <Route path='/sessoes/:movieId' element={<Showtimes />} />
                    <Route path='/assentos/:showtimeId' element={<Seats setOrder={setOrder}/>} />
                    <Route path='/sucesso' element={<Success order={order} setOrder={setOrder}/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}