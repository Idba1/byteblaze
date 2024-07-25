import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-screen p-16 ">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h1 className='mb-8 font-extrabold text-8xl dark:text-gray-400'>
                            <span className='bg-gradient-to-r from-primary via-blue-500 to-secondary bg-300% text-transparent bg-clip-text animate-gradient '>
                                {' '}
                                Error 404
                            </span>
                        </h1>
                        <p className="text-2xl font-semibold md:text-3xl">Oops! Page Not Found</p>
                        <p className="mt-4 mb-8 dark:text-gray-300">We are sorry, but the page you are looking for could not be found. It may have been removed, had its name changed, or is temporarily unavailable. Please check the URL for any errors or return to the homepage.</p>

                        <Link
                            to='/'
                            className='relative inline-block px-4 py-2 font-medium group'
                        >
                            <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
                            <span className='absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary'></span>
                            <span className='relative text-black group-hover:text-white'>
                                Home
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;