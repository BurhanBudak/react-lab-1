import {useState} from 'react'

function Book({ title }) {

    const [isActive, setActive] = useState(false)

    const addActive = () => {
        setActive(prev => !prev)
    }

    return (
        <li className={`list-group-item  ${isActive ? 'active' : ''}`}
            aria-current="true"
            onClick={addActive}>
        {title}
        </li>
    ) 

}

export default Book