import Hero from "../Components/Hero";

const Home = () => {
    return (
        <div>
            <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
                <Hero></Hero>
            </div>
        </div>
    );
};

export default Home;