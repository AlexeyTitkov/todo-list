export class Component {
    constructor(id) {
        this.component = document.getElementById(id)
        this.init()
    }
    init(){}

    hide () {
        this.component.classList.add('hide')
    }

    show() {
        console.log(this.component)
        this.component.classList.remove('hide')
    }
}
