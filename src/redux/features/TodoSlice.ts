import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateType {
  todo: TodoData[];
  isLoading: boolean;
  error: string;
}

const initialState: initialStateType = {
  todo: [],
  isLoading: false,
  error: "",
};
const url = import.meta.env.VITE_URL;

export const getReq = createAsyncThunk("todo/get", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postReq = createAsyncThunk(
  "todo/post",
  async (newData: TODO.postReq) => {
    try {
      const response = await axios.post(url, newData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteReq = createAsyncThunk(
  "todo/delete",
  async (_id: TODO.deleteReq) => {
    try {
      const response = await axios.delete(`${url}/${_id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);


export const editReq = createAsyncThunk(
  "todo/edit",
  async ({_id, newData}: TODO.EditReq) => {
    try {
      const responce = await axios.put(`${url}/${_id}`, newData);
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ? getReq
      .addCase(getReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = true;
      })
      .addCase(getReq.rejected, (state, actions) => {
        state.isLoading = true;
        state.error = actions.error.message || "Invalid getReq";
      })
      // ? postReq
      .addCase(postReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = true;
      })
      .addCase(postReq.rejected, (state, actions) => {
        state.isLoading = true;
        state.error = actions.error.message || "Invalid postReq";
      })
      .addCase(deleteReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(deleteReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid deleteReq";
      })
      .addCase(editReq.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editReq.fulfilled, (state, actions) => {
        state.todo = actions.payload;
        state.isLoading = false;
      })
      .addCase(editReq.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message || "Invalid editReq";
      });
  },
});

export default TodoSlice.reducer;
