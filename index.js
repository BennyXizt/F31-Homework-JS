

class MyButton {
    constructor(text, btnClass) {
        this.text = text
        this.btnClass = btnClass
        this.elem = document.querySelector(".wrapper").appendChild(document.createElement("button"))
    }
    show() {
        this.elem.className = this.btnClass
        this.elem.innerHTML = this.text
    }
}

class ColorButton extends MyButton {
    constructor(text, btnClass, btnColor, txtColor) {
        super(text, btnClass)
        this.btnColor = btnColor
        this.txtColor = txtColor
    }
    show() {
        this.elem.className = this.btnClass
        this.elem.innerHTML = this.text
        this.elem.style.color = this.txtColor
        this.elem.style.backgroundColor = this.btnColor
    }
}

window.addEventListener('load', function () {

    b1 = new MyButton("Click Me", "_btn")
    b2 = new MyButton("Error", "_btn")
    c1 = new ColorButton("Error", "_btn", "red", "white")
    b1.show()
    b2.show()
    c1.show()

  }, false);