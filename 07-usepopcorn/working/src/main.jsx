import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {StarRating} from "./StarRating.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        <StarRating maxRating={5} messages={['Terrible', 'Bard', 'Good', 'Cool', 'Best']} defaultRating={3}/>
        <StarRating maxRating={7} color='red'/>

    </StrictMode>,
)
