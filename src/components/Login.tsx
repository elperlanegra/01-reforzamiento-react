import { useReducer, useEffect } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type AuthAction = { type: "logout" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        userName: "",
      };

    default:
     return state;
  }
};

export const Login = () => {
  const [{ validando }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando.....</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-info">Validando.....</div>
      <div className="alert alert-success">No auntenticado</div>
      <div className="alert alert-danger">Auntenticado</div>
      <button className="btn btn-info">Login</button>
      &nbsp;
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
