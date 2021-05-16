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

    const search = () => {
        console.log("Search")
    }

    return (
        <header>
            <div className="title"><Link to="/"><img src="logo.png" alt="CSC" /></Link></div>
            <nav>
                <ul>
                    <li><Link to="#">Courses</Link></li>
                    <li><Link to="#">Jobs</Link></li>
                    <li><Link to="#">News</Link></li>
                    <li><Link to="/blog" id="btn-blog" className="btn btn-default" style={{display: "inline", width: "70px", padding: "3px 15px"}}>Blog</Link></li>
                </ul>
            </nav>

            <div className="search">
                <form action="">
                    <input type="text" name="search" id="search" placeholder="Search" autoComplete="off"/>
                    <Button icon={<BsSearch/>} onClick={search}/>
                </form>
            </div>

            <div className="user">
                <Button onClick={onClick} icon={<FaRegUser/>}/>
                {toggleUser && <div class="dropdown">
                    <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/login">Log in</Link></li>
                    </ul>
                </div>}
            </div>
        </header>
    )
}

export default Header
