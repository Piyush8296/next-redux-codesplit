import { useRouter } from 'next/router'
import { connect } from 'react-redux';

const Home = (store) => {
    const router = useRouter();
    console.log("url - /home/", store)

    const handleClick = () => {
        router.push("/");
    }

    return (
        <div>
            <p>HOME PAGE</p>
            <p>Open redux dev tools to see the MAGIC happen on Local</p>
            <p>OR</p>
            <p>Check console in dev tools</p>
            <br />
            <button onClick={handleClick}>Click here to Go to /</button>
        </div>
    )
}

const mapStateToProps = (store) => store;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Home);