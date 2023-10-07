import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <h3>{props.number} {props.post.name}</h3>
                <a href={props.post.url}>{props.post.url}</a>
            </div>
        </div>
    );
};

export default PostItem;
