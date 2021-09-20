import React from 'react'
import * as styles from '../styles/vid.module.css'

const Video = ({ vidData }) => {
    const getDate = (year) => {
        const date = new Date
        const y = date.getFullYear() - year > 15 ? 15 : date.getFullYear() - year
        return y === 1 ? 2 : y
    }
    const getPopularity = (popularity) => {
        const arr = popularity.split(".")
        const sec = arr[0]
        return arr[0].concat(".", sec[0])
    }

    return (
        <>
            {vidData.map((v, i) => (
                <div className={styles.video} key={`v_${i}`}>
                    <div className={styles.vid}>
                        <iframe
                            src={`https://www.youtube.com/embed/${v.youtube_trailer_key}`}
                            loading="lazy"
                            title={v.title}
                            samesite="secure"
                            width="100%"
                            height="auto"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            rel="0"
                            modestbranding="1"
                            autohide="1"
                            showinfo="0"
                            controls="0"
                            frameBorder="0"
                            fs="0"
                        />
                    </div>
                    <div className={styles.vidData}>
                        <div className={styles.img}>
                            <span role="img" aria-label="tick">👤</span>
                        </div>
                        <div className={styles.details}>
                            <h5>{v.title}</h5>
                            <section>
                                <div>
                                    <p>{v.directors[0]}</p>
                                    <span role="img" aria-label="tick">✔</span>
                                </div>
                                <div>
                                    <p>{getPopularity(v.popularity)}K</p><p>views</p>
                                    <p>{getDate(v.year)}</p><p>years ago</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Video
