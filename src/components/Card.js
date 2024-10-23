export default function Card({ image, caption }) {
    return <div style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", padding: "10px" }}><img src={image} alt="Card" />
        <p>{caption}</p></div>
}
