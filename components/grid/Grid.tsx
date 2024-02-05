'use client'

import styles from './Grid.module.css'
import Image from 'next/image'
import { Masonry } from "masonic";
import { useEffect, useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Send from '../icons/Send';
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from '@/convex/_generated/dataModel';
import User from '../icons/User';

interface imageItem {
    src: string,
    height: number
}

interface GridItem {
    place: string,
    caption: string,
    images: imageItem[]
    likes: number,
    hearts: number,
    claps: number,
    comments: string[],
    _id: Id<"posts">
}

const Grid = () => {

    const gridItems = useQuery(api.posts.getPosts)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (gridItems) {
        return (
            <div className={styles["grid-container"]}>
                {isClient && <Masonry
                    items={gridItems}
                    columnGutter={20}
                    columnWidth={300}
                    render={GridItem}
                    
                ></Masonry>}
            </div>

        )
    }

    return (
        <div className={styles["grid-container"]}>

        </div>
    )

}

interface GridItemProps {
    data: GridItem;
}

const GridItem: React.FC<GridItemProps> = ({ data: { place, caption, images, likes, hearts, claps, _id, comments } }) => {

    const [activeSlide, setActiveSlide] = useState(0);

    const clapPost = useMutation(api.posts.clapPost)
    const heartPost = useMutation(api.posts.heartPost)
    const likePost = useMutation(api.posts.likePost)

    const commentPost = useMutation(api.posts.commentPost)

    const [textBoxValue, setTextBoxValue] = useState('')

    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className={styles["grid-item"]}>
            <h2 className={styles.place}>{place}</h2>
            <h2 className={styles.caption}>{caption}</h2>
            <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                <Carousel
                    responsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 0 },
                            items: 1,
                        }
                    }}
                    arrows={isHovering}
                >
                    {(images.map((image: imageItem, index) => {
                        return (
                            <>
                                <div className={styles["image-container"]} style={{ height: `${image.height}rem` }}>
                                    <Image className={styles.image} src={image.src} fill objectFit='cover' alt={caption} />
                                </div>
                            </>
                        )
                    }))}
                </Carousel>
            </div>
            <div className={styles.interactions}>
                <div className={styles["interaction-icon-container"]} onClick={async () => {
                    await likePost({
                        postId: _id
                    })
                }}>
                    <h1 className={styles.interaction}>👍</h1>
                </div>
                <h2 className={styles.counter}>{likes}</h2>
                <div className={styles["interaction-icon-container"]} style={{ marginLeft: '0.5rem' }} onClick={async () => {
                    await heartPost({
                        postId: _id
                    })
                }}>
                    <h1 className={styles.interaction}>❤️</h1>
                </div>
                <h2 className={styles.counter}>{hearts}</h2>
                <div className={styles["interaction-icon-container"]} style={{ marginLeft: '0.5rem' }} onClick={async () => {
                    await clapPost({
                        postId: _id
                    })
                }}>
                    <h1 className={styles.interaction}>👏</h1>
                </div>
                <h2 className={styles.counter}>{claps}</h2>
            </div>
            <div className={styles.wrapper}>
                <input placeholder='type a comment' className={styles["comment-box"]} value={textBoxValue} onChange={(e) => {
                    setTextBoxValue(e.target.value)
                }} />
                <div className={styles["send-icon-container"]} onClick={() => {
                    if (textBoxValue.length > 0) {
                        commentPost({
                            postId: _id,
                            comment: textBoxValue
                        })
                        setTextBoxValue('')
                    }
                }}>
                    <Send fill='#777F76' />
                </div>
            </div>
            <div className={styles.comments}>
                {comments.map((comment, index) => {
                    return (
                        <div className={styles["comment-container"]} key={index}>
                            <div className={styles["user-icon-component"]}>
                                <User fill='#636363' />
                            </div>
                            <h2 className={styles.comment}>{comment}</h2>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Grid