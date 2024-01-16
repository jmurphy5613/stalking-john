'use client'

import styles from './Grid.module.css'
import Image from 'next/image'
import { Masonry } from "masonic";
import { useEffect, useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Send from '../icons/Send';

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
    claps: number
}

const gridItems = [
    {
        place: "6/29/2023 - Wissahikon Trail",
        caption: "wooooo, climbing so fun :)",
        images: [
            {
                src: "/climbing.jpeg",
                height: 25
            }
        ],
        likes: 12,
        hearts: 12,
        claps: 12
    },
    {
        place: "7/15/2023 - Philadelphia",
        caption: "",
        images: [
            {
                src: "/city.jpeg",
                height: 15
            },
            {
                src: "/city2.jpeg",
                height: 15
            }
        ],
        likes: 12,
        hearts: 12,
        claps: 12
    },
    {
        place: "7/12/2023 - Bala Cynwyd Public Library",
        caption: "kinects are objectively better than legos.",
        images: [
            {
                src: "/kinects.jpeg",
                height: 13
            }
        ],
        likes: 120,
        hearts: 12,
        claps: 12
    },
    {
        place: "6/8/2023 - Haverford Reserve",
        caption: "scary john",
        images: [
            {
                src: "/dark.jpeg",
                height: 10
            },
            {
                src: "/dark2.jpeg",
                height: 10
            }
        ],
        likes: 1,
        hearts: 12,
        claps: 12
    }
]

const Grid = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={styles["grid-container"]}>
            {isClient && <Masonry
                items={gridItems}
                columnGutter={20}
                columnCount={4}
                render={GridItem}
            ></Masonry>}
        </div>

    )
}

interface GridItemProps {
    data: GridItem;
}

const GridItem: React.FC<GridItemProps> = ({ data: { place, caption, images, likes } }) => {

    const [activeSlide, setActiveSlide] = useState(0);

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
                <div className={styles["interaction-icon-container"]}>
                    <h1 className={styles.interaction}>👍</h1>
                </div>
                <h2 className={styles.counter}>{likes}</h2>
                <div className={styles["interaction-icon-container"]} style={{ marginLeft: '0.5rem' }}>
                    <h1 className={styles.interaction}>❤️</h1>
                </div>
                <h2 className={styles.counter}>{likes}</h2>
                <div className={styles["interaction-icon-container"]} style={{ marginLeft: '0.5rem' }}>
                    <h1 className={styles.interaction}>👏</h1>
                </div>
                <h2 className={styles.counter}>{likes}</h2>
            </div>
            <div className={styles.wrapper}>
                <input placeholder='type a comment' className={styles["comment-box"]} />
                <div className={styles["send-icon-container"]}>
                    <Send fill='#777F76' />
                </div>
            </div>


        </div>
    )
}

export default Grid