//Campos span para mensagem de erro 
let spanNewPassoword = document.getElementById('span-required-erro')
let spanConfirmPassword = document.getElementById('span-required-confirm')

//Campos do input 
let inputNewPassword = document.getElementById('newPassword')
let inputConfirmNewPassword = document.getElementById('confirmNewPassword')

//CAMPOS PARA PODER FAZER ALTERAÇÃO DAS BORDAS E CORES
let campoNewPassword = document.querySelector('.campoNewPassword')
let campoConfirmNewPassword = document.querySelector('.campoConfirmNewPassword')

let validNewPassword = false
let validConfirmNewPassword = false

//#############################################
//######  VALIDAR NOVA SENHA    ###############
//#############################################
function validNewPassoword() {
   if (inputNewPassword.value.length < 8) {
      campoNewPassword.classList.add('border', 'focus:border-red-500')
      spanNewPassoword.classList.remove('hidden')
   } else {
      campoNewPassword.classList.remove('border', 'focus:border-red-500')
      spanNewPassoword.classList.add('hidden')
   }

   if (inputNewPassword.value.trim() === '') {
      spanNewPassoword.classList.add('hidden')
      campoNewPassword.classList.add('border', 'focus:border-blue-500')
   }
}

//#############################################
//######  VALIDAR CONFIRMAR SENHA #############
//#############################################
function validConfirmNewPassoword() {
   if (inputNewPassword.value !== inputConfirmNewPassword.value) {
      campoConfirmNewPassword.classList.add('border', 'focus:border-red-500')
      spanConfirmPassword.classList.remove('hidden')
   } else {
      campoConfirmNewPassword.classList.remove('border', 'focus:border-red-500')
      campoConfirmNewPassword.classList.add('border', 'focus:border-blue-500')
      spanConfirmPassword.classList.add('hidden')
   }

   if (inputConfirmNewPassword.value.trim() === '') {
      spanConfirmPassword.classList.add('hidden')
      campoConfirmNewPassword.classList.add('border', 'focus:border-blue-500')
   }
}

let userEmail

//#############################################
//######    VALIDAR CÓDIGO DO EMAIL       #####
//#############################################
// VALIDAÇÃO DE EMAIL PARA IR ATÉ A TELA DE CONFIRMAÇÃO DE CÓDIGO!
function verifyEmail(event) {
   event.preventDefault()

   let msgErro = document.getElementById('msgError')
   let listaUser = []

   let validUser = {
      nome: '',
      email: '',
      senha: ''
   }

   userEmail = document.getElementById('passwordEmail').value

   listaUser = JSON.parse(localStorage.getItem('listaUser'))

   listaUser.forEach(element => {
      if (userEmail === element.emailCadastrado) {
         validUser = {
            nome: element.nomeCadastrado,
            email: element.emailCadastrado,
            senha: element.passwordCadastrado
         }
      }
   })

   if (userEmail === validUser.email) {
      window.location.href = './forgotPassword-Code.html'
   } else {
      msgErro.classList.remove('hidden')
      setError(0)
   }
}



//#############################################
//######    VALIDAR CÓDIGO DO EMAIL       #####
//#############################################
function verifyCode(event) {
   event.preventDefault()

   let campoCode = document.querySelector('.inputCampo')
   let codeInput = document.getElementById('codeVerify')
   let msgErro = document.getElementById('msgError')
   const code = 202320

   if (codeInput.value != code) {
      campoCode.classList.add('border', 'border-red-500')
      msgErro.classList.remove('hidden')
   } else {
      campoCode.classList.remove('border', 'border-red-500')
      window.location.href='./resetPassword.html'
   }
}

function redefinirCampo() {
   let campoCode = document.querySelector('.inputCampo')
   let codeInput = document.getElementById('codeVerify')
   let msgErro = document.getElementById('msgError')
   

   if (codeInput.value.trim() === '') {
      campoCode.classList.add('border', 'focus:border-blue-500')
      msgErro.classList.add('hidden')
   }
}


//#############################################
//######   ALTERAR SENHA DO USUÁRIO   #########
//#############################################

//ESTÁ ALTERANDO SENHA MAS NÃO SEI COMO FAZER PARA MARCAR O USUARIO EM ESPECIFICO PARA 
//FAZER A ALTERAÇÃO DA SENHA, ELE ESTÁ APENAS CADASTRANDO 
function changePassword(event) {
   event.preventDefault()
   
   let novaSenha = document.getElementById('newPassword')
   let confirmarSenha = document.getElementById('confirmNewPassword')

   let msgErro = document.getElementById('msgError')
   let listaUser = []

   let validUser = {
      nome: '',
      email: '',
      senha: ''
   } 


   listaUser = JSON.parse(localStorage.getItem('listaUser'))

   //console.log(listaUser)

   /*listaUser.forEach(element => {
      if(novaSenha.value === confirmarSenha.value) {
         
         listaUser.push (
            {
               nome: element.nomeCadastrado,
               email: element.emailCadastrado,
               senha: novaSenha.value
            }
         )
         localStorage.setItem('listaUser', JSON.stringify(listaUser))
         console.log('Sucesso !!')
         setTimeout(()=>{
            window.location.href = './loginPage.html'
         }, 3000)
      } else {
         console.log('MENSAGEM DE ERRO')
         //msgErro.classList.remove('hidden')
      }
   })*/

   listaUser.forEach(element => {
      if (userEmail === element.emailCadastrado) {
         if (novaSenha.value === confirmarSenha.value) {
            element.senha = novaSenha.value // Atualiza apenas a senha apenas para o usuário específico
            //localStorage.setItem('listaUser', JSON.stringify(listaUser))
            console.log('Sucesso !!')
            /*setTimeout(() => {
               window.location.href = './loginPage.html'
            }, 3000)*/
         } else {
            console.log('MENSAGEM DE ERRO')
            // msgErro.classList.remove('hidden')
         }
      }
      console.log(listaUser)
   })
   
}