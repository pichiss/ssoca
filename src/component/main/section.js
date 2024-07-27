import './section.css'

const Section = ({contents})=>{
    return(
        <section>
            {contents.map(content => (
                <div className="contWrap" key={content.id}>
                    <h3>{content.title}</h3>
                    <p>{content.text}</p>
                    <p>{content.text2}</p>
                    <p>{content.text3}</p>
                    <img src={process.env.PUBLIC_URL + content.img} />
                </div>
            ))}
        </section>
    )
}

export default Section;