import './style.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { Editor } from "@tinymce/tinymce-react";
import { RiArrowGoBackFill } from 'react-icons/ri';

import Label from '../../Label/Label';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { createPost, updatePost } from '../../../actions/posts';

const Form = ({ blogForm , currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({ author: '', title: '', body: '', tags: '', attachedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

        clear();
        blogForm();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({ author: '', title: '', body: '', tags: '', attachedFile: '' }); 
    };

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);

    return (
        <div className="blogForm">
            <form onSubmit={handleSubmit}>
                <h3>{ currentId ? "Edit" : "Create" } Post</h3>
                <div id="wrap">
                    <Label text="Title"/>
                    <Input name="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                </div>
                
                <div id="wrap">
                    <Label text="Body"/>
                    <Editor
                        apiKey='17l04mvi6azx6y5dq7xiqyv1t3viiqw8mkafc02swkcdpqe0'
                        init={{
                            height: 250,
                            resize: false,
                            statusbar: false,
                            toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist outdent indent | link image | print preview media fullpage | ' +
                            'forecolor backcolor emoticons | help',
                            plugins: [
                                'advlist autolink link image lists charmap print preview hr anchor pagebreak',
                                'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                                'table emoticons template paste help'
                            ],
                            content_style: 'body{ cursor: text; overflow-y: auto; overflow-y: hidden;}'
                        }}
                        textareaName="body"
                        value={postData.body}
                        onEditorChange={(newValue) => setPostData({ ...postData, body: newValue })}
                    />
                </div>

                <div id="wrap">
                    <Label text="Attach a File or URL"/>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, attachedFile: base64 })}
                    />
                </div>

                <div id="wrap">
                    <Label  text="Tags"/>
                    <Input name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                </div>

                <div id="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "inline-block" }}>
                        <Button type="submit" text={currentId ? "Update" : "Post"} className="btn btn-primary"/>
                        <Button text="Clear" className="btn btn-danger" onClick={clear} style={{ marginLeft: "1em" }}/>
                    </span>
                    <Button id="blogFormBack" text="Go Back" className="btn" onClick={() => {blogForm(); clear();}} iconRight={<RiArrowGoBackFill style={{ position: "relative", top: "2.5px", left: "3px" }}/>}/>
                </div>
            </form>
        </div>
    )
}

export default Form;