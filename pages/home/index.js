import getHomeData from "../../services/ssr-api/home.init";
import extractReducerInitialState from "../../redux/extract-reducer-initial-state";
import HomePage from "@/components/home";
import withReducer from "@/components/with-reducer";
import injectable from "@/components/home/injectable";

function Home() {
  return (
      <HomePage />
  );
}

export async function getServerSideProps() {
  try {
    const initialState = extractReducerInitialState(injectable);
    const state = getHomeData(initialState);
    return { props: state };
  } catch (error) {
    console.log('Err', error);
    return { props: {} };
  }
}

export default withReducer(injectable)(() => ({}), dispatch => ({ dispatch }))(Home);