const baseUrl = "http://localhost:3001";
const headers = {
  "Content-Type": "application/json",
};

const authorization = () => {
  return {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("jwt")}`,
  }
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getClothingItems() {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
}

function addClothingItem({ _id, name, imageUrl, weather }) {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: authorization(),
    body: JSON.stringify({
      _id,
      name,
      imageUrl,
      weather,
    }),
  });
}

function deleteClothingItem(cardId) {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: authorization(),
  });
}

function editProfile(user) {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: authorization(),
    body: JSON.stringify({
      name: user.name,
      avatar: user.avatar,
    }),
  });
}

function addCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: authorization(),
  });
}

function removeCardLike(id) {
  return request(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: authorization(),
  });
}

export {
  getClothingItems,
  addClothingItem,
  deleteClothingItem,
  checkResponse,
  editProfile,
  addCardLike,
  removeCardLike,
};
