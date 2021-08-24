const loginBtn = document.getElementById('loginBtn')

loginBtn.addEventListener('click', () => {

    const email = $('#email').val()
    const password = $('#password').val()

    $.ajax({

        type : "POST",
        url : "/user/login",
        data : {
            email : email,
            password : password
        },
        success : function(){
            window.location.href = "/noticeBoard"
        }
    })
    
})

const signupBtn = document.getElementById("signupBtn")

signupBtn.addEventListener('click', () => {

    window.location.href = "/signup"
})