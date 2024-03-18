import { useRouter } from 'next/router'

const Landing = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/home/");
    }
    
    return (
        <div>
            <p>LANDING PAGE - Open redux dev tools to see the MAGIC happen</p>
            <button onClick={handleClick}>Click here to Go to Home</button>
        </div>
    )
}

export default Landing;