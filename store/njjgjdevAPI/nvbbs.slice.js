import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_nvbb_list = createAsyncThunk(
  "nvbbs/api_v1_nvbb_list",
  async payload => {
    const response = await apiService.api_v1_nvbb_list(payload)
    return response.data
  }
)
export const api_v1_nvbb_create = createAsyncThunk(
  "nvbbs/api_v1_nvbb_create",
  async payload => {
    const response = await apiService.api_v1_nvbb_create(payload)
    return response.data
  }
)
export const api_v1_nvbb_retrieve = createAsyncThunk(
  "nvbbs/api_v1_nvbb_retrieve",
  async payload => {
    const response = await apiService.api_v1_nvbb_retrieve(payload)
    return response.data
  }
)
export const api_v1_nvbb_update = createAsyncThunk(
  "nvbbs/api_v1_nvbb_update",
  async payload => {
    const response = await apiService.api_v1_nvbb_update(payload)
    return response.data
  }
)
export const api_v1_nvbb_partial_update = createAsyncThunk(
  "nvbbs/api_v1_nvbb_partial_update",
  async payload => {
    const response = await apiService.api_v1_nvbb_partial_update(payload)
    return response.data
  }
)
export const api_v1_nvbb_destroy = createAsyncThunk(
  "nvbbs/api_v1_nvbb_destroy",
  async payload => {
    const response = await apiService.api_v1_nvbb_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const nvbbsSlice = createSlice({
  name: "nvbbs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_nvbb_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_nvbb_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_nvbb_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_nvbb_list,
  api_v1_nvbb_create,
  api_v1_nvbb_retrieve,
  api_v1_nvbb_update,
  api_v1_nvbb_partial_update,
  api_v1_nvbb_destroy,
  slice: nvbbsSlice
}
