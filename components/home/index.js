import { useRouter } from 'next/router'

const Home = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }
    
    return (
        <div>
            <p>HOME PAGE - Open redux dev tools to see the magic happen</p>
            <button onClick={handleClick}>Click here to Go to /</button>
        </div>
    )
}

export default Home;