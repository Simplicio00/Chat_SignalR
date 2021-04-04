// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function (){
    mostrar()
})

async function RequestNameJson() {

    try {
        
        const uri = "https://localhost:5001/values/anonimo"
        const request = await fetch(uri)
        const response = await request.json()
        return response;
        
    } catch (error) {
        console.log(error)
    }
}

async function RequestStatus() {
    try {
        const uri = "https://localhost:5001/values/status"
        const request = await fetch(uri)
        const response = await request.json()
        return response.status;

    } catch (error) {
        console.log(error)
    }
}

function mostrar(){
    try {

        RequestNameJson()
        .then(dados => {
            document.getElementById("nome").innerText = dados.anonimo
        })

        RequestStatus()
            .then(data => {
                document.getElementById("status").innerText = data;
			})

    } catch (error) {
        console.log(error)
    }
}