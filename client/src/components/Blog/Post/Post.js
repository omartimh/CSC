import './style.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Markup } from 'interweave';
import moment from 'moment';
import { BsClockHistory } from 'react-icons/bs';
import { BiUserPin } from 'react-icons/bi';
import { AiOutlineLike, AiFillLike, AiTwotoneDelete } from 'react-icons/ai';
import { GoKebabHorizontal } from 'react-icons/go';
import { Button as ButtonM } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '../../Button/Button';
import { likePost } from '../../../actions/posts';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, blogForm, setCurrentId }) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const postEdit = () => {
        setCurrentId(post._id);
        blogForm();
    };
    const postLike = () => {
        dispatch(likePost(post._id));
    };
    const postDelete = () => {
        dispatch(deletePost(post._id));
    };

    const Likes = () => {
        if (post.likes.length > 0) {
          return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <div className="post">
            <div className="postAuthor">
                <Link to="#"><BiUserPin style={{ fontSize: "35px", color: "#1e88e5", position: "relative", top: "12px", marginRight: "15px"}}/>{post.name}</Link>
                <span className="date" style={{ fontSize: "15px", fontWeight: "300", color: "C1C1C1", position: "relative", top: "11px" }}>{moment(post.createdAt).fromNow()}<BsClockHistory style={{ marginLeft: "0.5em", position: "relative", top: "3.5px" }}/></span>
            </div>

            <div className="postBody">
                <div className="postTitle" style={{ position: "relative" }}>
                    <h4>{post.title}</h4><br/>
                    {(user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (
                        <Button onClick={postEdit} className="postOptions" icon={<GoKebabHorizontal/>}/>
                    )}
                </div>
                <Markup tagName="span" content={post.body}/>
                {post.attachedFile && <img src={post.attachedFile} alt={post.title}/>}
            </div>
            
            <div className="postTags">
                {post.tags.map((tag) => <p key={Math.random().toString(36).substr(2, 9)}>#{tag}&nbsp;</p>)}
            </div>

            <div className="postBar">
                <ButtonM size="small" color="primary" disabled={!user?.result} onClick={postLike}><Likes/></ButtonM>
                {(user?.result?.googleId === post?.author || user?.result?._id === post?.author) && (
                    <ButtonM size="small" color="secondary" onClick={postDelete}><DeleteIcon fontSize="small"/> Delete</ButtonM>
                )}
            </div>
        </div>
    )
}

export default Post;
