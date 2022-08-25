import {Component} from "../../core/component.js";
import {Storage} from "../../core/storage.js";
import {Form} from "../../core/form.js";
import {Validator} from "../../core/validators.js";
import {pageApplication} from "../../main.js";


export class FormEditPostModal extends Component {
    constructor(id) {
        super(id);
    }
    init() {
        this.component.addEventListener('click', onCloseModalHandler.bind(this))
        this.formWraper = this.component.firstElementChild
        this.formWraper.addEventListener('submit', onSubmitPostHandler.bind(this))
        this.formData = new Form(this.formWraper, {
            title: [Validator.required],
            description: [Validator.required]
        })
    }

    onShow(todoId) {
        this.id = todoId
        this.todoData = Storage.getTodoInfo(todoId)
        this.formWraper.title.value = this.todoData.title
        this.formWraper.description.value = this.todoData.description

    }

    onHide() {
        this.formData.clear()
    }


}

function onSubmitPostHandler(e){
    e.preventDefault()

    if(this.formData.isValid()){
        const formData = {
            ...this.todoData,
            ...this.formData.value()
        }
        if(this.formWraper.title.value !== this.todoData.title || this.formWraper.description.value !== this.todoData.description){
        Storage.editPost(this.id, formData)
        }
        this.hide()
        pageApplication.show()


    }

}

function onCloseModalHandler(e){
    const {target} = e
    const isBg = target === this.component
    if(isBg ) {
        this.hide()
    }


}