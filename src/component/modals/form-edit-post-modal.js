import {Component} from "../../core/component.js";
import {Storage} from "../../core/storage.js";
import {Validator} from "../../core/validators.js";
import {Form} from "../../core/form.js";
import {pageApplication} from "../../main.js";

export class FormEditPostModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('click', onCloseModalHandler.bind(this))
        this.formWrapper = this.component.firstElementChild
        this.formWrapper.addEventListener('submit', inSubmitPostHandler.bind(this))
        this.formData = new Form(this.formWrapper, {
            title: [Validator.required],
            description: [Validator.required]
        })
    }

    onShow(todoId) {
        this.id = todoId
        this.todoData = Storage.getTodoInfo(todoId)
        this.formWrapper.title.value = this.todoData.title
        this.formWrapper.description.value = this.todoData.description
    }

}

function inSubmitPostHandler(e) {
    e.preventDefault()
    if (this.formData.isValid()) {
        console.log(this.todoData)
        const formData = {
            ...this.todoData,
            ...this.formData.value()
        }
        if (this.formWrapper.title.value !== this.todoData.title ||
            this.formWrapper.description.value !== this.todoData.description) {
            Storage.editPost()

        }



        this.hide()
        pageApplication.show()
    }
}

function onCloseModalHandler(e) {
    const {target} = e
    const isBg = target === this.component
    if (isBg) {
        this.hide()
    }
}