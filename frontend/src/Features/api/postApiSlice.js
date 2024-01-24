import { apiSlice } from "./BaseApiSlice";
const postApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // API endpoint definitions...
        // Defining the GetPosts Endpoint:
        getPosts: builder.query({
            query: () => ({
                url: "./posts",
            }),
            providesTags: ["Post"],
        }),

        // Defining the GetPostInfo Endpoint
        getPostInfo: builder.query({
            query: (postId) => ({
                url: `/posts/${postId}`,
            }),
        }),

        // Defining the AddPost Endpoint
        addPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts/",
                method: "POST",
                body: newPost,
            }),
            invalidatesTags: ["Post"],
        }),

        // Defining the UpdatePost and DeletePost Endpoints
        updatePost: builder.mutation({
            query: ({ postId, updatedPost }) => ({
                url: `/posts/${postId}`,
                method: "PUT",
                body: updatedPost,
            }),
            invalidatesTags: ["Post"],
        }),

        deletePost: builder.mutation({
            query: (postId) => ({
                url: `/posts/${postId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Post"],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostInfoQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApiSlice;