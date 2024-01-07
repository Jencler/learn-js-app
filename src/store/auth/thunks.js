import { checkingCredential } from "./authSlice"


export const checkingAuth = () => {
  return async (dispatch) => {
    dispatch(checkingCredential())
  }
}

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingAuth())
  }
}

export const startGitHubSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingAuth())
  }
}