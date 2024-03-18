export default async function getData(initialState) {
    try {
    //   const response = await SampleService.fetchData();
    //   const data = response.data || [];
      return {
        ...initialState,
        user: {
          ...(initialState.user || {}), 
          name:"SSR_NAME"
        },
        test: {
          ...(initialState.test || {}), 
          isSSR:true
        }
      };
    } catch (error) {
      throw Error(error);
    }
  }
  