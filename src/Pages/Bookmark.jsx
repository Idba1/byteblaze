import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard";
import EmptyState from "../Components/EmptyState";

const Bookmark = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }, [])

    const handleDelete = id => {
        deleteBlog(id)
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }

    if (blogs.length < 1) {
        return (
          <EmptyState
            message='No Bookmarks Found'
            address='/blogs'
            label='Browse Blogs'
          ></EmptyState>
        )
      }
    return (
        <div>
            <div className='grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 py-10'>
                {blogs.map(blog => (
                    <BlogCard
                        deletable={true}
                        handleDelete={handleDelete}
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;