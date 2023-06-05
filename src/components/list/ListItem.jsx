import s from "./list.module.css"
const ListItem = (props) => {
    return (
        <li className={s.contactItem} key={props.id}>
           <div className={s.content}>
             <p>{props.name}: </p>
             <p>{props.phone}</p>
           </div>
            <button> Delete </button>
        </li>
    )
}



export default ListItem