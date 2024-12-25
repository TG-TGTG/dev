function criarBarra(var_nome, var_avatar) {

  // Criação do elemento de barra de usuário
  var userBar = document.createElement("div");
  userBar.className = "user-bar";
  userBar.style.position = "absolute";  // Certificando que a barra fique fixada no topo
  userBar.style.top = "0";
  userBar.style.left = "0";
  userBar.style.width = "100vw";  // A largura será 100% da largura da tela
  userBar.style.maxWidth = "500px"; // Limita a largura máxima da barra para 500px (ajustável)
  userBar.style.height = "50px"; // Ajuste a altura da barra
  userBar.style.zIndex = "9999"; // Garantir que a barra fique no topo
  userBar.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Fundo semi-transparente
  userBar.style.display = "flex"; // Usando flexbox para alinhar os itens
  userBar.style.alignItems = "center"; // Alinha os itens verticalmente
  userBar.style.padding = "0 10px"; // Adiciona um pouco de espaçamento lateral
  userBar.style.borderRadius = "5px"; // Bordas arredondadas

  // Criação do avatar
  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="' + var_avatar + '" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%;">';
  avatar.style.marginRight = "10px"; // Espaço entre o avatar e o nome

  // Criação do nome
  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span> </span>';

  // Criação do status (digitando...)
  var varStatus = document.createElement("span");
  varStatus.className = "status";
  varStatus.innerText = "digitando...";
  varStatus.style.fontSize = "14px"; // Ajusta o tamanho da fonte do status

  // Adiciona o status ao nome
  name.appendChild(varStatus);

  // Montar a barra com os elementos criados
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
