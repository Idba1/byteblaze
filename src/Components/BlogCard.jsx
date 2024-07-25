import { Link } from "react-router-dom";
import PropTypes from 'prop-types'


const BlogCard = ({ blog }) => {
    console.log(blog);
    const { cover_image, title, description, published_at, placeholderImg } = blog
    return (
        <div>
            <Link
                to={`/blog/${blog.id}`}
                className='max-w-sm mx-auto group hover:no-underline focus:no-underline '
            >
                <img role="presentation" className="className='object-cover w-full rounded h-44 " src={cover_image || placeholderImg} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
  }

export default BlogCard;