import { useLoaderData } from "react-router-dom";
import placeholderImg from '../assets/404.jpg'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, tags, body_html } = blog

    return (
        <div className='mx-auto transition border-2 p-2  border-opacity-30 group hover:no-underline focus:no-underline '>
            <img
                className='object-cover w-full rounded h-48'
                src={cover_image || placeholderImg}
            />
            <div>
                <div className='flex flex-wrap py-6 gap-2 border-t border-dashed '>
                    {tags &&
                        tags.map(tag => (
                            <a
                                key={tag}
                                rel='noopener noreferrer'
                                href='#'
                                className='px-3 py-1 rounded-sm hover:underline '
                            >
                                #{tag}
                            </a>
                        ))}
                </div>
            </div>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
    )
};

export default Content;