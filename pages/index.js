import getData from "../services/ssr-api/data.init";
import extractReducerInitialState from "../redux/extract-reducer-initial-state";
import Landing from "@/components/landing";
import withReducer from "@/components/with-reducer";
import injectable from "@/components/landing/injectable";

function Home() {
  return (
      <Landing />
  );
}

export async function getServerSideProps() {
  try {
    const initialState = extractReducerInitialState(injectable);
    console.log(initialState)
    const state = getData(initialState);
    return { props: state };
  } catch (error) {
    console.log('Err', error);
    return { props: {} };
  }
}

export default withReducer(injectable)(() => ({}), dispatch => ({ dispatch }))(Home);