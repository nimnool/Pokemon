import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, listTitle}) => {
    if (!posts.length) {
        return <h2>Posts not found</h2>
    }
    return (
        <div>
            <h1>{listTitle}</h1>
            {posts.map((post, index) =>
                <PostItem  key={index} number={index + 1} post={post}/>
            )}
        </div>
    );
};

export default PostList;
