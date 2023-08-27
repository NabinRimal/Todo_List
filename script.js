let textbox = document.getElementById("textbox")
let create_btn = document.getElementById("create-btn")
let container2 = document.getElementsByClassName("container2")[0]
let warnpara = document.getElementsByClassName("warning")[0]


const insert_todo = () => {

    if (textbox.value != "") {

        let tododiv = document.createElement("div")
        let todopara = document.createElement("p")
        let delbtn = document.createElement("button")
        let deltxtnode = document.createTextNode("Delete")
        console.log(textbox.value)

        tododiv.className = "todobox"
        todopara.className = "todo-para"
        delbtn.className = "delbtn"
        container2.appendChild(tododiv)
        tododiv.appendChild(todopara)
        tododiv.appendChild(delbtn)
        todopara.innerHTML = textbox.value
        delbtn.appendChild(deltxtnode)
        warnpara.innerHTML = ""



        localStorage.setItem("todo note", textbox.value)

        let arr = []
        let length = document.getElementsByClassName("todobox").length


        for (let v = 0; v < length; v++) {
            arr[v] = document.getElementsByClassName("delbtn")[v].addEventListener("click",deltodo)
        }
    console.log(arr)
        return arr
    }
    else if (textbox.value == "") {

        warnpara.innerHTML = "Todo text cannot be empty"
    }
    textbox.value = ""
}


const deltodo = () => {
    let length = document.getElementsByClassName("todobox").length

    // for (let v = 0; v < length; v++) {
        
    // }
    let todotxt = document.getElementsByClassName("todobox")[0]
    todotxt.remove()
    // let v= insert_todo()
    // console.log(v)
}
create_btn.addEventListener("click", insert_todo)

