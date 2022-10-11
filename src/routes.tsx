import { Route, Routes } from 'react-router-dom'

import App from './App'
import Home from './components/mainMap/map'
import Incident from './components/form/incident'
import RegulationPage from './pages/regulation/regulation'
import Login from './pages/login/login'
const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="incident" element={<Incident/>} />
            <Route path="regulations" element={<RegulationPage/>} />
            <Route path="login" element={<Login/>} />
        </Routes>
    </App>
)

export default AppRoutes
