import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("auth")) || {
  isAuth: false,
  id: "",
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  category: "",
  weight: "",
  height: "",
  birthDay: "",
  blood: "",
  geneticDiseases: "",
  medications: "",
  surgeryBefore: "",
  profileImg : ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    setLoginData(state, action) {
      state.isAuth = true;
      state.id = action.payload.id || state.id;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email || state.email;
      state.gender = action.payload.gender;
      state.category = action.payload.category;
      state.weight = action.payload.weight || state.weight;
      state.height = action.payload.height || state.height;
      state.birthDay = action.payload.birthDay || state.birthDay;
      state.blood = action.payload.blood || state.blood;
      state.geneticDiseases =
        action.payload.geneticDiseases || state.geneticDiseases;
      state.medications = action.payload.medications || state.medications;
      state.surgeryBefore = action.payload.surgeryBefore || state.surgeryBefore;
      state.profileImg = action.payload.profileImg || state.profileImg
      localStorage.setItem("auth", JSON.stringify({ ...initialState }));
    },
    logout: (state) => {
      state.isAuth = false;
      state.id = "";
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.category = "";
      state.gender = "";
      state.weight = "";
      state.height = "";
      state.birthDay = "";
      state.blood = "";
      state.geneticDiseases = "";
      state.medications = "";
      state.surgeryBefore = "";
      state.profileImg = ""
      localStorage.setItem(
        "auth",
        JSON.stringify({
          ...initialState,
        })
      );
    },
  },
});

export const { login, logout, setLoginData } = authSlice.actions;
export default authSlice.reducer;
