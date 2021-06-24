import './style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineForm } from 'react-icons/ai';
import { CircularProgress } from '@material-ui/core';

import Form from './Form/Form';
import Post from './Post/Post';
import Button from '../Button/Button';
import { getPosts } from '../../actions/posts';

const Blog = () => {

    const [currentId, setCurrentId] = useState(null);
    const [toggleForm, setToggleForm] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(1);
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    
    const blogForm = () => {
        setToggleForm(!toggleForm);
    };
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        toggleForm ? (
            <Form blogForm={blogForm} currentId={currentId} setCurrentId={setCurrentId}/>
        ) : (
            <div className="blog">
                <div className="blogHead">
                    <h2 style={{color: "#333", fontWeight: "500"}}>All Posts</h2><br/>
                    <Button id="blogForm" onClick={blogForm} className="btn btn-primary" text="New Post" iconRight={<AiOutlineForm style={{ position: "relative", top: "2.5px", left: "3px" }}/>}/>
                </div>
                {toggleForm && <Form/>}
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
                ) : posts.map((post) => (
                    <Post key={post._id} post={post} blogForm={blogForm} setCurrentId={setCurrentId}/>
                ))}
                {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}
            </div>
        )
    )
};

export default Blog;