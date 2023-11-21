


export const loggerMiddleware = (store)=> {
    return function(next){
        return function(action) {
            console.log(`[LOG]: ${action.type} ${new Date().toString()}`);
            // Calling next meddleware in pipeline
            next(action);
            // printing modified state
            console.log(store.getState());
        }
    }
}