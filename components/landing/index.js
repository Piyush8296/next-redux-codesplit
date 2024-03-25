import { useRouter } from 'next/router'
import { connect } from 'react-redux';

const Landing = (store) => {
    const router = useRouter();
    console.log("url - /", store)

    const handleClick = () => {
        router.push("/home/");
    }

    return (
        <div>
            <p>LANDING PAGE</p>
            <p>Open redux dev tools to see the MAGIC happen on Local</p>
            <p>OR</p>
            <p>Check console in dev tools</p>
            <br />
            <button onClick={handleClick}>Click here to Go to Home</button>
        </div>
    )
}

const mapStateToProps = (store) => store;

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Landing);