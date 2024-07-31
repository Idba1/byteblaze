import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard";

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