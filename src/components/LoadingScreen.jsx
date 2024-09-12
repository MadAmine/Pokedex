import loading from '../assets/LoadBall.gif'


const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <img src={loading} className="text-white text-xl font-bold"></img>
        </div>
    );
};

export default LoadingScreen;