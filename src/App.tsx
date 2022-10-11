import { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom'

//Styles
import './App.css';
import markerIco from './images/marker.png'

type Props = {
  children?: ReactNode
}
const App: FC<Props> = ({ children }: Props) => (
  <div className="App">
    <div className='App-header'>
      <ul className='logo'>
        <li className='map'><img src={markerIco} width="44" height="44" /></li>
        <li className='map'><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>  Mapa Potrzeb Świecia</Link></li>
      </ul>
      <ul className='menu'>
        <li className='map'><Link style={{ textDecoration: 'none', color: 'white' }} to='/'>&#127757; Map</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/incident'>&#9889; Incidents</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/regulations'>&#128196; Regulations</Link></li>
      </ul>
      <ul className='login'>
        <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/login'> &#129333; Login</Link></li>
      </ul>
    </div>
    {children}
  </div>
)

export default App;
