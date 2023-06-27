import axios from "axios"
const njjgjdevAPI = axios.create({
  baseURL: "https://njjgj-dev-95211.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return njjgjdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return njjgjdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_nvbb_list(payload) {
  return njjgjdevAPI.get(`/api/v1/nvbb/`)
}
function api_v1_nvbb_create(payload) {
  return njjgjdevAPI.post(`/api/v1/nvbb/`, payload.data)
}
function api_v1_nvbb_retrieve(payload) {
  return njjgjdevAPI.get(`/api/v1/nvbb/${payload.id}/`)
}
function api_v1_nvbb_update(payload) {
  return njjgjdevAPI.put(`/api/v1/nvbb/${payload.id}/`, payload.data)
}
function api_v1_nvbb_partial_update(payload) {
  return njjgjdevAPI.patch(`/api/v1/nvbb/${payload.id}/`, payload.data)
}
function api_v1_nvbb_destroy(payload) {
  return njjgjdevAPI.delete(`/api/v1/nvbb/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return njjgjdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return njjgjdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return njjgjdevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return njjgjdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return njjgjdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return njjgjdevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_nvbb_list,
  api_v1_nvbb_create,
  api_v1_nvbb_retrieve,
  api_v1_nvbb_update,
  api_v1_nvbb_partial_update,
  api_v1_nvbb_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
