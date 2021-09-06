export const fetchToys = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_TOYS" });
    fetch("http://localhost:3004/toys")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "ADD_TOYS", toys: json }));
  };
};

export const addToy = (toy) => {
  return (dispatch) => {
    fetch("http://localhost:3004/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((json) => dispatch({ type: "ADD_TOY", toy: json }));
  };
};

export const likeToy = (id, likes) => {
  return (dispatch) => {
    fetch(`http://localhost:3004/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: (likes += 1) }),
    }).then(() => dispatch({ type: "LIKE_TOY", id }));
  };
};

export const removeToy = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3004/toys/${id}`, {
      method: "DELETE",
    }).then(() => dispatch({ type: "REMOVE_TOY", id }));
  };
};
