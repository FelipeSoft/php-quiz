import { Button } from "../components/Button";

const Home = () => {
    return (
        <div className="bg-black w-screen h-screen flex items-center justify-center flex-col">
            <h1 className="text-white text-3xl font-semibold mb-4">Quiz PHP</h1>
            <a href="/quiz" className="bg-blue-500 rounded-md py-2 mb-4 px-4 hover:bg-blue-600 text-white font-semibold">JOGAR</a>
            <a href="/thanks" className="bg-blue-500 rounded-md py-2 mb-4 px-4 hover:bg-blue-600 text-white font-semibold">AGRADECIMENTOS</a>
            <img src="/php.png" alt="" />
        </div>
    )
}

export default Home;