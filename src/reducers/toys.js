const toysReducer = (state = { toys: [], loaded: false }, action) => {
  switch (action.type) {
    case "LOADING_TOYS":
      return {
        toys: [...state.toys],
        loading: true,
      };
    case "ADD_TOYS":
      return {
        toys: action.toys,
        loading: false,
      };
    case "ADD_TOY":
      return {
        toys: [...state.toys, action.toy],
      };
    case "LIKE_TOY":
      return {
        toys: [
          ...state.toys.map((toy) =>
            toy.id === action.id ? { ...toy, likes: (toy.likes += 1) } : toy
          ),
        ],
      };
    case "REMOVE_TOY":
      return { toys: [...state.toys.filter((toy) => toy.id !== action.id)] };
    default:
      return state;
  }
};

export default toysReducer;
