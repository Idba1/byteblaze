import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
        <div>
            <div className='flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
                <Hero></Hero>
                <img className='absolute bottom-0 w-full' src={wave} alt='background image' />
            </div>
        </div>
    );
};

export default Home;