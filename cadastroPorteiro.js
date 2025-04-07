//cadastro porteiro

async function cadastrar(){

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const data = {
        email,
        senha,
    }

    try {
        const response = await fetch('http://localhost:3500/porteiro/cadastrar', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const results = await response.json();

        if (results.success) {
            console.log(results)
            alert(results.message)
            window.location.href = "login.html"
        } else {
            alert(results.message)
        }
    }
    catch (error) {
        console.log(error);
    }
}

