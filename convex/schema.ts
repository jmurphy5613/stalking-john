import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    posts: defineTable({
        likes: v.number(),
        hearts: v.number(),
        claps: v.number(),
        place: v.string(),
        caption: v.string(),
        images: v.array(v.object({
            src: v.string(),
            height: v.number(),
        })),
        comments: v.array(v.string())
    })
})