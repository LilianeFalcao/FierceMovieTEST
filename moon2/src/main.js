class list{
    constructor() {
        this.tarefas = []
    }
    add(data) {
        this.tarefas.push(data)
    }
}
class filholist{
    constructor() {
        super()
    }
    addfilho() {
        this.addfilho("conteudo ")
    }
    mostratarefa(){
        console.log(this.tarefas)
    }
}
const minhalista = new filholist()
window.document.querySelector("#novo").onclick = () => {
    minhalista.addfilho()
    minhalista.mostratarefa()
}