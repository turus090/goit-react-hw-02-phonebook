import s from "./list.module.css"
const ListItem = (props) => {
    return (
        <li className={s.contactItem} key={props.id}>
            <p>{props.name}: </p>
            <p>{props.phone}</p>
        </li>
    )
}

export default ListItem