import Image from 'next/image'
import styles from '../styles/Gallerie.module.css'

export default function Gallerie({images}) {
    return <div className={styles.gallerie}>
        {images.map((element, index) => 
            <Image 
                src={element.src} 
                alt={element.alt} 
                width={element.width} 
                height={element.height} 
                key={index} priority />
        )}
    </div>
}