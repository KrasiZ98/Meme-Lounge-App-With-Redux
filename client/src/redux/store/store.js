import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk"
import rootReducers from "./rootReducers";

const persistConfig = {
    key: "auth_storage",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };