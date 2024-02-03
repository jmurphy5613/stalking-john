import { internalMutation, query } from "./_generated/server"
import { gridItems } from "../utils/constants"

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
                    claps: 0
                })
            }
        })
    },
})