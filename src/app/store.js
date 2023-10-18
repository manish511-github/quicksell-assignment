import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { prioritySlice } from '../features/kanban/prioritySlice';
import { statusSlice } from '../features/kanban/statusSlice';
import { userSlice } from '../features/kanban/userSlice';
import { displaySlice } from '../features/kanban/displaySlice';
import { imageSlice } from '../features/kanban/imagesSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const rootReducer = combineReducers({
    Priority: prioritySlice.reducer,
    Status: statusSlice.reducer,
    User: userSlice.reducer,
    display: displaySlice.reducer,
    images: imageSlice.reducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
