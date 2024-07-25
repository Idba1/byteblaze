import { useLoaderData } from "react-router-dom";

const Blog = () => {
    const blog = useLoaderData()
    console.log(blog);
    
    const {
        comments_count,
        title,
        reading_time_minutes,
        public_reactions_count,
    } = blog

    return (
        <div className='max-w-3xl px-6 py-16 mx-auto space-y-12 overflow-hidden'>
            <article className='space-y-8 '>
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold md:tracking-tight md:text-5xl'>
                        {title}
                    </h1>

                    <div className='flex flex-col items-start justify-between w-full md:flex-row md:items-center '>
                        <p className='text-sm'>
                            {reading_time_minutes} min read •{' '}
                            {new Date(blog.published_at).toLocaleDateString()}
                        </p>
                        <p className='flex-shrink-0 mt-3 text-sm md:mt-0'>
                            {comments_count} comments • {public_reactions_count} views
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Blog;