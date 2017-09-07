$('.tabs .tab').click(function(){
    if ($(this).hasClass('signin')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signin-cont').show();
    }
    if ($(this).hasClass('signup')) {
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        $('.cont').hide();
        $('.signup-cont').show();
    }
});

$(function() {
//twitter bootstrap script
    $("#signinBtn").click(function(){
        $.ajax({
            type: "POST",
            url: "http://httpbin.org/post",
            data: $('#signin').serialize(),
            success: signin(),
            error: function(){
                alert("failure");
            }
        });
    });
});

$(function() {
//twitter bootstrap script
    $("#signupBtn").click(function(){
        $.ajax({
            type: "POST",
            url: "http://httpbin.org/post",
            data: $('#signup').serialize(),
            success: signup(),
            error: function(){
                alert("failure");
            }
        });
    });
});

function signin() {
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modal-text');
    var username = document.getElementById('username');
    modalTitle.innerHTML = "Sign in";
    modalText.innerHTML = username.value+"님 로그인되었습니다.";
    $('#signModal').modal();
    return false;
}

function signup(json, status) {
    var modalTitle = document.getElementById('modalTitle');
    var modalText = document.getElementById('modal-text');
    var name = document.getElementById('name');
    modalTitle.innerHTML = "Sign up";
    modalText.innerHTML = name.value+"님 회원가입되었습니다.";
    $('#signModal').modal();
    return false;
}