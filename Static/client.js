//<script type="module">
// import fs from 'fs'
const submitBtn = document.querySelector('#submit-btn')
// alert(localStorage.getItem('payload'))
// console.log(submitBtn)
submitBtn.addEventListener("click",()=>{
    console.log('clicked')
    const userId = document.querySelector('#user-id');
    const password = document.querySelector('#passwd');
    let payload = {
        username: userId.value,
        password: password.value
    }
    console.log(payload)
    // localStorage.setItem('payload',JSON.stringify(payload));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/add-login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    let res = xhr.send(JSON.stringify(payload));
    alert('Login Saved Successfully!')
    userId.value = '';
    password.value = '';
})
//</script>