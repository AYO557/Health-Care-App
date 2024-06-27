import { redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  addUser(updates);
  return redirect("/auth");
}

export async function loginAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  addUser(updates);
  return redirect("/");
}

const addUser = (data) => {
  const storeUserData = () => {
    const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
    storedUsers.push(data);
    localStorage.setItem("Users", JSON.stringify(storedUsers));
  };

  storeUserData();
};
