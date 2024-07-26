import { useEffect, useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../Components/BlogCard";

const Bookmark = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const savedBlogs = getBlogs()
        setBlogs(savedBlogs)
    }, [])

    return (
        <div>
            <div className='grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {blogs.map(blog => (
                    <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;