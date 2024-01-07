import './CoreConcept.css'

 {/*export default function CoreConcept(props){
    return(
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <h2>{props.description}</h2>
        </li>

    );
} */}
export default function CoreConcept({image, title, description}){
    return(
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <h2>{description}</h2>
        </li>

    );
}