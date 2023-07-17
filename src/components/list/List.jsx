import propTypes from "prop-types"
import ListItem from "./ListItem"
import s from "./list.module.css"

const List = ({list, deleteContact}) => {
    let listCollection = list.map(item => <ListItem key={item.id} id={item.id} name={item.name} phone={item.phone} deleteContact={deleteContact}/>)
    return (
        <ul>
            {listCollection}
            {list.length === 0 ? <p className={s.messege}>No items in list</p> : null}
        </ul>
        )
    }

    List.propTypes = {
        list: propTypes.array,
        deleteContact: propTypes.func
    }

export default List