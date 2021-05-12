import { useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaRegUser } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    const [toggleUser, setToggleUser] = useState(false)
    const onClick = () => {
        setToggleUser(!toggleUser)
    }

    return (
        <header>
            {/* <div className="title"><RiCodeBoxLine style={{marginRight: "5px", fontSize: "40px"}}/>CSC</div> */}
            <div className="title"><Link to="/"><img src="logo.png" alt="CSC" /></Link></div>
            <nav>
                <ul>
                    <li><Link to="#">Courses</Link></li>
                    <li><Link to="#">Jobs</Link></li>
                    <li><Link to="#">Articles</Link></li>
                    <li><Link to="#">Explore</Link></li>
                </ul>
            </nav>

            <div className="search">
                <form action="">
                    <input type="text" name="search" id="search" placeholder="Search" autoComplete="off"/>
                    <button className="" type="submit"><BsSearch/></button>
                </form>
            </div>

            <div className="user">
                <Button onClick={onClick} icon={<FaRegUser/>}/>
                {toggleUser && <div class="dropdown">
                    <ul>
                        <li><Link to="/signup">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                    </ul>
                </div>}
            </div>
        </header>
    )
}

export default Header
