import {Component} from "../../core/component.js";
import {Storage} from "../../core/storage.js";
import {pageApplication} from "../../main.js";
import {renderConfirm} from "../../template/render-confirm.js";




export class ConfirmActionModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('click', onCloseModalHandler.bind(this))
    }


    onShow(todoId) {
        this.todoId = todoId
        this.component.innerHTML = ''
        const htmlInfoConfirm = renderConfirm(todoId)
        this.component.insertAdjacentHTML('afterbegin', htmlInfoConfirm)
    }


}

function onCloseModalHandler(e){
    const {target} = e
    const isBg = target === this.component
    const isCanselBtn = target === this.component.querySelector('.modal__btn_disagree')

    if(isBg || isCanselBtn) {
        this.hide()
    }
    if (target.classList.contains('modal__btn_agree')) {

        Storage.removePost(this.todoId)
        this.hide()
        pageApplication.show()
    }

}