import api from "./api-services";

export async function getTodoList() {
  const resp = await api.get("/activity-groups?email=wirapratama758@gmail.com");
  return resp;
}

export async function getTodoDetail(data) {
  const resp = await api.get(`/activity-groups/${data}`);
  return resp;
}

export async function addTodo(data) {
  const resp = await api.post("/activity-groups/", data);
  return resp;
}

export async function updateTodo(value) {
  const { id, data } = value;
  const resp = await api.patch(`/activity-groups/${id}`, data);
  return resp;
}

export async function deleteTodo(data) {
  const resp = await api.delete(`/activity-groups/${data}`, {});
  return resp;
}

export async function addTodoItem(data) {
  const resp = await api.post(`/todo-items`, data);
  return resp;
}

export async function updateTodoItem(value) {
  const { id, data } = value;
  const resp = await api.patch(`/todo-items/${id}`, data);
  return resp;
}

export async function deleteTodoItem(data) {
  const resp = await api.delete(`/todo-items/${data}`, {});
  return resp;
}
