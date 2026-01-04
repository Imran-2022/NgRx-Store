import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequest } from "../services/auth-api";

export const authActions = createActionGroup({
  source: 'Auth', // basically prefix like | action related to. 
// [Auth] Login
// [Auth] Login Success
// [Auth] Login Failure

  events: {
    login: props<{ username: string; password: string }>(),
    // Dispatched when user clicks Login button
    loginSuccess: props<{ token: string, userId: number | null }>(),
    // ➡️ Dispatched by Effect when API succeeds
    // Used to:
    // Save token
    // Set authenticated user

    loginFailure: props<{ error: string }>(),

    /*

    Dispatched when API fails
    Used to:
    Show error message
    Stop loading spinner

    */


    register: props<RegisterRequest>(),
    registerSuccess: emptyProps(),
    registerFailure: props<{ error: string }>(),

    logout: emptyProps(),
    logoutSuccess: emptyProps(),
  }
})