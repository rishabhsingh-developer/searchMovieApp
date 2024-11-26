import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API = "c45a857c193f6302f2b5061c3b85e743";

export const fetchMovie = createAsyncThunk("fetchMovie", async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${page}?api_key=${API}&language=en-US&page=1`
  );
  return res.json();
});

export const searchMovie = createAsyncThunk("searchMovie", async (term) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${term}&page=1`
  );
  return res.json();
});

export const detailMovie = createAsyncThunk("detailMovie", async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API}&language=en-US`
  );
  return res.json();
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: { results: [] },
    moveiDetail: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, actions) => {
      state.movie = actions.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(detailMovie.fulfilled, (state, action) => {
      state.moveiDetail = action.payload;
    });
  },
});
export default movieSlice.reducer;
