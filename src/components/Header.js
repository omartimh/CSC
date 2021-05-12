import { useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaRegUser } from 'react-icons/fa'
import { RiCodeBoxLine } from 'react-icons/ri'

const Header = () => {
    const [toggleUser, setToggleUser] = useState(false)
    const onClick = () => {
        setToggleUser(!toggleUser)
    }

    return (
        <header>
            <div className="title"><RiCodeBoxLine style={{marginRight: "5px", fontSize: "40px"}}/>CSC</div>
            
            <nav>
                <ul>
                    <li><Link to="#">Link 1</Link></li>
                    <li><Link to="#">Link 2</Link></li>
                    <li><Link to="#">Link 3</Link></li>
                    <li><Link to="#">Link 4</Link></li>
                </ul>
            </nav>

            <div className="search">
                Search Box
            </div>

            <div className="user">
                <Button onClick={onClick} icon={<FaRegUser/>}/>
                {toggleUser && <div class="dropdown">
                    <ul>
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="#">Link</Link></li>
                        <li><Link to="#">Link</Link></li>
                    </ul>
                </div>}
            </div>
        </header>
    )
}

export default Header
