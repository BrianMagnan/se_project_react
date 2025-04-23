const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

function addItem(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

function deleteItem(item) {
  return fetch(`${baseUrl}/items/${item._id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem };
