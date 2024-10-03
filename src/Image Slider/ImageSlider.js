import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, limit }) => {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)

            const response = await fetch(`${getUrl}? page=1&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoading(false)
            }

        } catch (error) {
            setErrorMsg(error.message)
            setLoading(false)

        }

    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url])
    console.log({ images })



    if (loading) {
        return <div>Loading....please wait</div>
    }
    if (errorMsg !== null) {
        return <div>Error occurred.... {errorMsg}</div>
    }

    return (
        <div className='container'>
            <BsArrowLeftCircleFill className='arrow arrow-left' />
            {
                images && images.length ? images.map((imageItem) => (
                    <img src={imageItem.download_url}
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        className='current-slide' />
                )) : null

            }

            <BsArrowRightCircleFill className='arrow arrow-right' />
            <span className='circle-indicators'>
                {images && images.length ? images.map((_, index) => <button className='current-indicator' key={index}> </button>
                ) : null}
            </span>
        </div>
    )
}

export default ImageSlider