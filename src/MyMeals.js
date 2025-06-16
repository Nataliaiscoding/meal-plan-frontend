import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return (
        <div>
            <p>{ text }</p>
            <CiEdit onClick={ updatingInInput }></CiEdit>
            <MdDelete onClick={ deleteMeal }></MdDelete>
        </div>
    )
}

export default MyMeals;