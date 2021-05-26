import './style.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { Editor } from "@tinymce/tinymce-react";
import { RiArrowGoBackFill } from 'react-icons/ri';

import Label from '../../Label/Label';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { createPost } from '../../../actions/posts';

const Form = () => {

    const [postData, setPostData] = useState({ author: '', title: '', body: '', tags: '', attachedFile: '' });
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        history.push('/blog');
    };

    const clear = () => {

    };

    return (
        <div className="blogForm">
            <h3>Write Post</h3>
            <form onSubmit={handleSubmit}>
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
                    {/* <Input name="attachedFile" value={postData.attachedFile} onChange={(e) => setPostData({ ...postData, attachedFile: e.target.value })}/> */}
                </div>

                <div id="wrap">
                    <Label  text="Tags"/>
                    <Input name="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                </div>

                <div id="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ display: "inline-block" }}>
                        <Button type="submit" text="Post" className="btn btn-primary"/>
                        <Button text="Clear" className="btn btn-danger" onClick={clear} style={{ marginLeft: "1em" }}/>
                    </span>
                    <Link id="blogFormBack" to="/blog">Go Back <RiArrowGoBackFill style={{ position: "relative", top: "2.5px", left: "3px" }}/></Link>
                </div>
            </form>
        </div>
    )
}

export default Form;