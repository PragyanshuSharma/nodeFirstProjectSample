function validate()
{
    var id=document.getElementById("1").value;
    var pswd=document.getElementById("2").value;
  
    
            fetch('http://localhost:3000/first', {
                method: 'post',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({user:  id, password: pswd})
              }).then(res=>res.json())
                .then(res => alert(res.status));


}