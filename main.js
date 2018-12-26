// var firstname=document.getElementById('inputFirstName').value;
// var lastname=document.getElementById('inputLastName').value;
// var address=document.getElementById('inputAddress').value;
// var email=document.getElementById('inputEmail').value;
// var password=document.getElementById('inputPassword').value;

function validation() {
let firstname=document.getElementById('inputFirstName').value;
let lastname=document.getElementById('inputLastName').value;
let address=document.getElementById('inputAddress').value;
let email=document.getElementById('inputEmail').value;
let password=document.getElementById('inputPassword').value;
var regexmail= /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
var regexpasswd=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

if ((firstname=="")||(lastname=="")||(address=="")||(email=="")||(password ==""))
return swal({
    type: 'error',
    title: 'Oops...',
    text: 'PLEASE FILL EMPTY FIELD ',
    footer: '<a href>Why do I have this issue?</a>'
  });

else if (regexmail.test (email)==false)
return swal ({
    type: 'error',
    title: 'Oops...',
    text: 'PLEASE Invalid Address email ',
    footer: '<a href>Why do I have this issue?</a>',
  })


else if (regexpasswd.test (password)==false)
return swal ({
    type: 'error',
    title: 'Oops...',
    text: 'invalid password',
    footer: '<a href>Why do I have this issue?</a>',
  })

}
