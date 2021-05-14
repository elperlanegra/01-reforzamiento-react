import { useEffect } from "react";
import { reqResApi } from "../api/reqRes";

export const Usuarios = () => {
  useEffect(() => {
    // Lla mando al API
    reqResApi
      .get("/users")
      .then((resp) => {
        console.log(resp);
      })
      .catch(console.log);
  }, []);

  return (
    <div>
      <h3>Usuarios</h3>

      <table className="table table-striped table bordered">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
