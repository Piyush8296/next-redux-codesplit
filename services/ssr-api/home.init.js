export default async function getHomeData(initialState) {
    try {
      return {
        ...initialState,
        home: {
          ...(initialState.home || {}), 
          isSSR:true
        }
      };
    } catch (error) {
      throw Error(error);
    }
  }
  