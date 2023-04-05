import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Toast from "./components/toast/Toast";
import router from "./router/router";
import store from "./stores";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toast />
      </Provider>
    </div>
  );
}

export default App;
