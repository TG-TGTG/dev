function criarBarra(var_nome, var_avatar, cor_fonte, cor_fundo, topo, esquerda) {

  // Criação do elemento de barra de usuário
  var userBar = document.createElement("div");
  userBar.className = "user-bar";
  userBar.style.position = "fixed";  // Certificando que a barra fique fixada no topo
  userBar.style.top = topo;
  userBar.style.left = esquerda;
  userBar.style.width = "auto";  // Ajuste automático da largura da barra com base no conteúdo
  userBar.style.minWidth = "140px"; // Garantir que a largura mínima seja suficiente
  userBar.style.height = "40px"; // Ajuste a altura da barra
  userBar.style.zIndex = "9999"; // Garantir que a barra fique no topo
  userBar.style.backgroundColor = cor_fundo; // Cor de fundo semi-transparente
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
  name.innerHTML = '<span>' + var_nome + '</span>';

  // Criação do status (DIGITANDO...)
  var varStatus = document.createElement("span");
  varStatus.className = "Status";
  varStatus.innerText = "DIGITANDO...";
  varStatus.style.fontSize = "12px"; // Ajusta o tamanho da fonte do status
  varStatus.style.color = cor_fonte; // Garantir que a cor da fonte seja branca

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

  // Função para atualizar o status para "DIGITANDO..."
  const botBody = elementoPai;
  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    if (isTyping) {
      varStatus.innerText = 'DIGITANDO...'; // Exibe "DIGITANDO..."
    } else {
      varStatus.innerText = 'ONLINE'; // Exibe "ONLINE" quando não estiver DIGITANDO
    }
  }, 400);
}