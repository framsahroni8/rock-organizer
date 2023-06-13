import {Routes, Route, Navigate} from 'react-router-dom'

import { Home, Souvenirs, Venue, Einvite } from '../../pages'

const MainRoutes = () => (
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='souvenirs' element = {<Souvenirs />} />
        <Route path='venue' element = {<Venue />} />
        <Route path='einvite' element = {<Einvite />} />
    </Routes>
)

export default MainRoutes