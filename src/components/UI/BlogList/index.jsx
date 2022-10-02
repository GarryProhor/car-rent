import React from 'react';
import blogData from "../../../assets/data/blogData";
import BlogItem from "./BlogItem";

const BlogList = () => {
    return (
        <>
            {
                blogData.map(item => <BlogItem item={item} key={item.id} />)
            }
        </>
    );
};

export default BlogList;
