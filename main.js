var loginPeople = [
    {
        username:"Rozvilla12",
        password:"haslo123"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < loginPeople.length; i++){
        if(username == loginPeople[i].username
            && password == loginPeople[i].password){
                alert(username +' '+ 'jest zalogowany');
                console.log(username + 'jest zalogowany');
                return;
            }
            alert('NIEPRAWIDŁOWY UŻYTKOWNIK LUB HASŁO');
            console.log('NIEPRAWIDŁOWY UŻYTKOWNIK LUB HASŁO');
    }
}
