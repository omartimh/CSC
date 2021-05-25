import './style.css';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';
import { CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import Button from '../Button/Button';
import { getPosts } from '../../actions/posts';

const Blog = () => {

    const posts = useSelector((state) => state.posts);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log(posts);

    const blogForm = () => {
        history.push('/blog/form');
    };
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const [allPosts, /* setPost */] = useState([
        {
            id: 1,
            author: "John Doe",
            title: "First post", 
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim, amet labore doloremque id consequatur.",
            date: "1 hour ago"
        },
        {
            id: 2,
            author: "John Doe",
            title: "Second post", 
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellat odit consequuntur? Voluptate mollitia, distinctio ipsam veritatis minus culpa quisquam.",
            date: "3 days ago"
        },
        {
            id: 3,
            author: "John Doe",
            title: "Third post", 
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, nesciunt dignissimos, consequatur sequi rerum officia corrupti eos excepturi, et culpa maiores saepe quos non! Nesciunt, velit? Ex suscipit enim commodi expedita incidunt corporis excepturi voluptas eos architecto laboriosam? Aut adipisci ullam harum at minus est nisi doloremque illo eos aperiam.",
            date: "5 hours ago"
        }
    ]);

    return (
        <div className="blog">
            <div className="blogHead">
                <h2 style={{color: "#333", fontWeight: "500"}}>All Posts</h2><br/>
                <Button id="blogForm" onClick={blogForm} className="btn btn-primary" text="New Post" iconRight={<AiOutlineForm style={{ position: "relative", top: "2.5px", left: "3px" }}/>}/>
            </div>

            <div className="blogBar">
                <ul>
                    <li><Button text="Newest"/></li>
                    <li><Button text="Popular"/></li>
                    <li><Button text="Trending"/></li>
                    <li><Button text="Oldest"/></li>
                    <li><Button text="More" icon={<IoIosArrowDown style={{position: "relative", top: "3px"}}/>}/></li>
                </ul>
            </div>

            {!posts.length ? (
                <div style={{ width: "100%", height: "86vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CircularProgress style={{ color: "#f50057" }}/>
                </div>
            ) : posts.map((post) => (<><Post key={post.id} post={post}/><hr/></>))}

            {/* {allPosts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}*/}
            </div>
    )
};

export default Blog;