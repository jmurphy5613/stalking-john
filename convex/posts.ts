import { internalMutation, mutation, query } from "./_generated/server"
import { gridItems } from "../utils/constants"
import { v } from "convex/values"


export const addData = internalMutation({
    args: {},
    handler: async (ctx, args) => {
        gridItems.forEach(async (item) => {
            //check that the item doesn't already exist by using the caption as a unique identifier
            const itemExists = await ctx.db.query("posts")
                .filter((itemFound) => itemFound.eq(itemFound.field("caption"), item.caption)).first()
            if (!itemExists) {
                const newItem = await ctx.db.insert("posts", {
                    place: item.place,
                    caption: item.caption,
                    images: item.images,
                    likes: 0,
                    hearts: 0,
                    claps: 0,
                    comments: []
                })
            }
        })
    },
})

export const getPosts = query({
    args: {},
    handler: async(ctx, args) => {
        const posts = await ctx.db.query("posts").collect()
        return posts
    },
})

export const likePost = mutation({
    args: {
        postId: v.id("posts")
    },
    handler: async(ctx, args) => {
        const post = await ctx.db.query("posts").filter((post) => post.eq(post.field("_id"), args.postId)).first()
        if (post) {
            await ctx.db.patch(post._id, {
                likes: post.likes + 1
            })
        }
    }
})

export const heartPost = mutation({
    args: {
        postId: v.id("posts")
    },
    handler: async(ctx, args) => {
        const post = await ctx.db.query("posts").filter((post) => post.eq(post.field("_id"), args.postId)).first()
        if (post) {
            await ctx.db.patch(post._id, {
                hearts: post.hearts + 1
            })
        }
    }
})

export const clapPost = mutation({
    args: {
        postId: v.id("posts")
    },
    handler: async(ctx, args) => {
        const post = await ctx.db.query("posts").filter((post) => post.eq(post.field("_id"), args.postId)).first()
        if (post) {
            await ctx.db.patch(post._id, {
                claps: post.claps + 1
            })
        }
    }
})

export const commentPost = mutation({
    args: {
        postId: v.id("posts"),
        comment: v.string()
    },
    handler: async(ctx, args) => {
        const post = await ctx.db.query("posts").filter((post) => post.eq(post.field("_id"), args.postId)).first()
        if (post) {
            await ctx.db.patch(post._id, {
                comments: post.comments.concat(args.comment)
            })
        }
    }
})