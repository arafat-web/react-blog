import React from 'react';
import BlogCard from './BlogCard';

function PostList({ blogs }) {
    return (
        <section className="blog-section">
            <div className="blog-container">
                {blogs.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </section>
    );
}

export default PostList;
