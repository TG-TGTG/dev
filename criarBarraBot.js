function criarBarra(var_nome, var_avatar) {
  // a2 Criação do elemento de barra de usuário
  var userBar = document.createElement("div");
  userBar.className = "user-bar";
  userBar.style.position = "absolute";  // Certificando que a barra fique fixada no topo
  userBar.style.top = "0";
  userBar.style.left = "0";
  userBar.style.width = "100%";
  userBar.style.zIndex = "9999"; // Garantir que a barra fique no topo
  userBar.style.backgroundColor = "#fff"; // Definindo fundo branco (ajustar conforme necessário)

  // Criação do botão de voltar (opcional)
  var backButton = document.createElement("div");
  backButton.className = "back";
  backButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
  </svg>`;

  // Criação do avatar
  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="' + var_avatar + '" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%;">';

  // Criação do nome
  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>' + var_nome + '</span>';

  // Criação do status (digitando...)
  var varStatus = document.createElement("span");
  varStatus.className = "status";
  varStatus.innerText = "digitando...";

  // Adiciona o status ao nome
  name.appendChild(varStatus);

  // Montar a barra com os elementos criados
  userBar.appendChild(backButton);
  userBar.appendChild(avatar);
  userBar.appendChild(name);

  // Seleciona o elemento pai dentro do shadow DOM do Typebot
  var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');

  // Adiciona a barra ao topo do elemento pai
  if (elementoPai) {
    elementoPai.prepend(userBar);
  }

  // Função para atualizar o status para "digitando..."
  const botBody = elementoPai;

  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    
    if (isTyping) {
      varStatus.innerText = 'digitando...'; // Exibe "digitando..."
    } else {
      varStatus.innerText = 'Online'; // Exibe "Online" quando não estiver digitando
    }
  }, 400);
}
