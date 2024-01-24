import { apiSlice } from "./BaseApiSlice";
const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // API endpoint definitions 
        // Defining the Login Endpoint:
        login: builder.mutation({
            query: (userData) => ({
                url: "/users/login",
                method: "POST",
                body: userData,
            }),
            providesTags: ["User"],
        }),
        // Defining the Logout Endpoint:
        logout: builder.mutation({
            query: () => ({
                url: "/users/logout",
                method: "POST",
            }),
        }),
        // Defining the AddUser Endpoint:
        addUser: builder.mutation({
            query: (newUser) => ({
                url: "/users/",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["User"],
        }),

    }),
});

// Exporting Mutations Hooks:
export const {
    useLoginMutation,
    useLogoutMutation,
    useAddUserMutation
} =
authApiSlice;