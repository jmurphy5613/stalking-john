import styles from './Grid.module.css'

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
        place: "Wissahikon Trail",
        caption: "wooooo, climbing so fun :)"
    }
]

const Grid = () => {
    return (
        <div>

        </div>
    )
}

export default Grid