import HomeStage from "../components/Stage/HomeStage";
import HomeModal from "../components/HomeModal/HomeModal";
function Home() {
    return (
        <div className="h-screen w-full flex flex-col bg-blue-400 relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center z-50">
                <HomeModal />
            </div>
            <img className="flex justify-center p-5 0 bg-black/30 bg-[url('/cloudsBackground.png')] bg-center bg-[length:10%]" />
            <div className="flex flex-col md:flex-row w-full justify-center relative flex-1">
                <HomeStage />
            </div>
        </div >
    );
}



export default Home
