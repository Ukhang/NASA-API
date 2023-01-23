export const INITIAL_STATE: { 
    loading: boolean, 
    post: object, 
    error: false
} = {
    loading: false,
    post: {},
    error: false
};

export const postReducer = (state: any, action: any) => {
    switch(action.type) {
        case "FETCH_START":
          return {
            loading: true,
            error: false,
            post: {}, 
          }
        case "FETCH_SUCCESS":
          return {
            ...state,
            loading: false,
            // error: false,
            post: action.payload,
          }
        case "FETCH_ERROR":
          return {
            ...state,
              // loading: false,
              error: true,
              post: {}
           }
        default:
          return state;
      }
}