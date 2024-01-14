'use client'

import styles from './Grid.module.css'
import Image from 'next/image'
import { Masonry } from "masonic";
import { useEffect, useState } from 'react';


interface imageItem {
    src: string,
    height: number
}

interface GridItem {
    place: string,
    caption: string,
    images: imageItem[]
    likes: number
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
        likes: 12
    },
    {
        place: "7/15/2023 - Philadelphia",
        caption: "",
        images: [
            {
                src: "/city.jpeg",
                height: 15
            }
        ],
        likes: 12
    }
]

const Grid = () => {

    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    return (
        <>
            {isClient && <Masonry
                items={gridItems}
                columnGutter={10}
                columnCount={4}
                render={GridItem}
            ></Masonry>}
        </>

    )
}

interface GridItemProps {
    data: GridItem;
}

const GridItem: React.FC<GridItemProps> = ({ data: { place, caption, images, likes } }) => {
    return (
        <div className={styles["grid-item"]}>
            <h2 className={styles.place}>{place}</h2>
            <h2 className={styles.caption}>{caption}</h2>
            {(images.map((image: imageItem) => {
                return (
                    <div className={styles["image-container"]} style={{ height: `${image.height}rem` }}>
                        <Image className={styles.image} src={image.src} fill objectFit='cover' alt={caption} />
                    </div>
                )
            }))}
        </div>
    )
}

export default Grid