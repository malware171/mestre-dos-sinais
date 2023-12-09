
const form   = document.getElementById('form')
const campos = document.querySelectorAll('.required')
const spans  = document.querySelectorAll('.span-required')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const msgErro = document.getElementById('msgError')
const msgSucesso = document.getElementById('msgSucess')

const nome = document.getElementById('username')
const email = document.getElementById('email')
const passoword = document.getElementById('password')

let validName            = false
let validEmail           = false
let validPassword        = false
let validConfirmPassword = false

let validChangePassword = false
let validChangeConfirmPassword = false

function setError(index) {
   campos[index].classList.add('border', 'focus:border-red-500');
   spans[index].classList.remove('hidden');

}

function removeError(index) {
   campos[index].classList.remove('focus:border-red-500');
   spans[index].classList.add('hidden');
}


//VALIDAÇÃO DE FORMULARIO PARA CRIAÇÃO DA CONTA 

function nameValidate() {
   if (campos[0].value.length < 3) {
       setError(0);
       validName = false  
      } else {
       removeError(0);
       validName = true
   }

   if (campos[0].value.trim() === '') {
      removeError(0);
      validName = false
   }
}

function emailValidate() {
   const campoEmail = campos[1];
   if (emailRegex.test(campoEmail.value)) {
      removeError(1)
      validEmail = true
   } else {
      setError(1)
      validEmail = false
   }

   if (campos[1].value.trim() === '') {
      removeError(1)
      validEmail = false
   }
}


function passwordValidate() {
   if (campos[2].value.length < 8) {
      setError(2)
      validPassword = false
   } else {
      removeError(2)
      validPassword = true
   }

   if (campos[2].value.trim() === '') {
      removeError(2);
      validPassword = false
   }
}

function confirmPassword() {
   if (campos[3].value === campos[2].value) {
      removeError(3)
      validConfirmPassword = true
   } else {
      setError(3)
      validConfirmPassword = false
   }

   if (campos[3].value.trim() === '') {
      removeError(3)
      validConfirmPassword = false
   }
}

//-------------------------------------------------------//

//VALIDAÇÃO DE FORMULARIO PARA LOGIN DA CONTA E ESQUECI A SENHA

function loginEmailValidate() {
   const campoEmail = campos[0];
   if (emailRegex.test(campoEmail.value)) {
      removeError(0)
   } else {
      setError(0)
   }

   if (campos[0].value.trim() === '') {
      removeError(0)
   }
}



//#############################################
/// VERIFICAÇÃO DE CAMPOS E ARMAZENAMENTO NO LOCALSTORAGE
///#######   PARA ENVIO DE FORMULÁRIO   #######
//#############################################
// CreateAccount.html
function cadastrar (event) {
   event.preventDefault()

   if (validName && validEmail && validPassword && validConfirmPassword ) {
      //INCREMENTA A LISTA USER NA MESMA LISTA, EM VEZ DE CRIAR UMA NOVA 
      // OU ADICIONA AO ARRAY QUE JA EXISTE NO CASO LISTA USER OU ELE CRIA UM ARRAY VAZIO 
      let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
      
      listaUser.push(
         {
            nomeCadastrado: nome.value,
            emailCadastrado: email.value,
            passwordCadastrado: passoword.value
         }
      )
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser))

      //ADICIONA UM DELAY UTILIZANDO A ADDFUNCTION PARA FAZER O REDIRECIONAMENTO DE TELA
      setTimeout(()=>{
         window.location.href = './loginPage.html'
      }, 3000)
      
      
      msgSucesso.classList.remove('hidden')
      msgErro.classList.add('hidden')
   } else {
      msgErro.classList.remove('hidden')
   }
}

//VERIFICAÇÃO DE CAMPOS E ARMAZENAMENTO NO LOCALSTORAGE - PARA RESGATAR O FORMULARIO 
//loginPage.html
function login(event) {
   event.preventDefault()

   let emailLogin = document.getElementById('loginEmail')
   let passwordLogin = document.getElementById('loginPassword')

   let listaUser = []

   let validUser = {
      nome: '',
      email: '',
      senha: ''
   }
   //VALIDAÇÃO DE USUARIO PARA LOGIN 
   listaUser = JSON.parse(localStorage.getItem('listaUser'))
   
   // VAI VARRER A LISTA DE USUÁRIO ITEM POR ITEM EM VEZ DE UTILIZAR O FOR NORMAL DA PARA FAZER 
   // O FOREATCH Q É MAIS OTIMIZADO COMO O ELEANDRO DIZ ;)
   
   listaUser.forEach(element => {
      if(emailLogin.value === element.emailCadastrado && passwordLogin.value === element.passwordCadastrado) {
         
         validUser = {
            nome: element.nomeCadastrado,
            email: element.emailCadastrado,
            senha: element.passwordCadastrado
         }

         window.location.href = './storePage.html'
      } msgErro.classList.remove('hidden')
   });

   if(emailLogin.value === validUser.email && passwordLogin.value === validUser.senha) {
      window.location.href = './storePage.html'
   } else {
      msgErro.classList.remove('hidden')
   }
}



//#############################################
//#### VALIDAR EMAIL RESGATAR RECOMPENSA  #####
//#############################################
function emailValidateReward() {
   const = document.getElementById('')

   const campoEmail = campos[1];
   if (emailRegex.test(campoEmail.value)) {
      removeError(1)
      validEmail = true
   } else {
      setError(1)
      validEmail = false
   }

   if (campos[1].value.trim() === '') {
      removeError(1)
      validEmail = false
   }
}





//MUDAR A SENHA DE NOVA SENHA E CONFIRMAR SENHA -----------------------------

function goToLoginPage () {
   window.location.href = './loginPage.html'
}