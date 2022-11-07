import configureStore from  '@redux/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        user: userReducer,
    },
});