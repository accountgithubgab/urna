function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="projetopartidos" && password=="20031990") { window.location="./resultado.html"; done=1; }
    if (done==0) { alert("Senha ou Usuário inválido."); }
    }