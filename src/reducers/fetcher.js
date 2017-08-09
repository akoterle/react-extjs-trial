
const fetcher = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_POSTS':
            const {posts, subreddit} = action
            return ({
                ...state
            })
            

        default:
            return state
    }
}

export default fetcher