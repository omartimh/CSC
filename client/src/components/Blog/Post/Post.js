import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Markup } from 'interweave';
import moment from 'moment';
import { BsClockHistory } from 'react-icons/bs';
import { BiUserPin } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike, AiTwotoneDelete } from 'react-icons/ai';
import { GoKebabHorizontal } from 'react-icons/go';

import Button from '../../Button/Button';
import { likePost } from '../../../actions/posts';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, blogForm, setCurrentId }) => {
    
    const dispatch = useDispatch();

    const editPost = () => {
        setCurrentId(post._id);
        blogForm();
    };
    
    return (
        <div className="post">
            <div className="postAuthor">
                <Link to="#"><BiUserPin style={{ fontSize: "35px", color: "#1e88e5", position: "relative", top: "12px", marginRight: "15px"}}/>{post.author}Omar Tarek</Link>
                <span className="date" style={{ fontSize: "15px", fontWeight: "300", color: "C1C1C1", position: "relative", top: "11px" }}>{moment(post.createdAt).fromNow()}<BsClockHistory style={{ marginLeft: "0.5em", position: "relative", top: "3.5px" }}/></span>
            </div>

            <div className="postBody">
                <div className="postTitle" style={{ position: "relative" }}>
                    <h4>{post.title}</h4><br/>
                    <Button onClick={editPost} className="postOptions" icon={<GoKebabHorizontal/>}/>
                </div>
                <Markup tagName="span" content={post.body}/>
                {post.attachedFile && <img src={post.attachedFile} alt={post.title}/>}
            </div>
            
            <div className="postTags">
                {post.tags.map((tag) => <p key={Math.random().toString(36).substr(2, 9)}>#{tag}&nbsp;</p>)}
            </div>

            <div className="postBar">
                <div>
                    <Button onClick={() => dispatch(likePost(post._id))} icon={<AiOutlineLike style={{ color: "#1976d2" }}/>}/>
                    <span style={{ marginLeft: "0.8em", position: "relative", bottom: "4.5px" }}>{post.likeCount} {post.likeCount === 1 ? "Like" : "Likes"}</span>
                    <AiFillLike style={{ display: "none" }}/>
                </div>
                <Button onClick={() => dispatch(deletePost(post._id))} icon={<AiTwotoneDelete style={{ color: "#d50000" }}/>}/>
            </div>
        </div>
    )
}

export default Post;
