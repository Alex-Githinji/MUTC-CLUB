
const  Track = ({ image, title, description }) => {
    return (
        <section className="main">
        <div className="tracks"> 
        <div className="track-wrapper">
            <img src={image} alt="" />
        </div>
        <div className="track-body">

            <h2>{title}</h2>
            <p>{description}</p>

        </div>
        </div>
        </section>
    )
}

export default Track;