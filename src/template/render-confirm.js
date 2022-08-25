import {Storage} from "../core/storage.js";


export const renderConfirm = (todoId) => {
    const todo = Storage.getTodoInfo(todoId)



    return `
    
    <div class="modal-container modal-container-confirm">
        <h2 class="modal__notice">Are you sure want to delete
            <span class="modal__notice-name">${todo.title}</span> item from the list?
        </h2>
        <div class="modal__actions">
            <button class="modal__btn modal__btn_agree btn" type="submit">YES</button>
            <button class="modal__btn modal__btn_disagree btn" type="submit">NO</button>
        </div>
    </div>
`

}