console.log("Script BarraTopoChatV1.js carregado.");

function criarBarra(var_nome, var_avatar, cor_fonte, cor_fundo, textoOnline, textoDigitando, topo, esquerda) {
  console.log("Função criarBarra chamada com os seguintes parâmetros:");
  console.log("var_nome:", var_nome);
  console.log("var_avatar:", var_avatar);
  console.log("cor_fonte:", cor_fonte);
  console.log("cor_fundo:", cor_fundo);
  console.log("textoOnline:", textoOnline);
  console.log("textoDigitando:", textoDigitando);
  console.log("topo:", topo);
  console.log("esquerda:", esquerda);

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

  console.log("Elemento userBar criado:", userBar);

  // Criação do avatar
  var avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.innerHTML = '<img src="' + var_avatar + '" alt="Avatar" style="width: 30px; height: 30px; border-radius: 50%;">';
  avatar.style.marginRight = "10px"; // Espaço entre o avatar e o nome

  console.log("Elemento avatar criado:", avatar);

  // Criação do nome
  var name = document.createElement("div");
  name.className = "name";
  name.innerHTML = '<span>' + var_nome + '</span>';

  console.log("Elemento name criado:", name);

  // Criação do status (DIGITANDO...)
  var varStatus = document.createElement("span");
  varStatus.className = "Status";
  varStatus.innerText = textoDigitando;
  varStatus.style.fontSize = "12px"; // Ajusta o tamanho da fonte do status
  varStatus.style.color = cor_fonte; // Garantir que a cor da fonte seja branca

  console.log("Elemento varStatus criado:", varStatus);

  // Adiciona o status ao nome
  name.appendChild(varStatus);

  // Montar a barra com os elementos criados
  userBar.appendChild(avatar);
  userBar.appendChild(name);

  console.log("Elementos adicionados à userBar:", userBar);

  // Seleciona o elemento pai dentro do shadow DOM do Typebot
  var elementoPai = document.getElementsByTagName("typebot-standard")[0].shadowRoot.querySelector('.typebot-container');

  console.log("Elemento pai selecionado:", elementoPai);

  // Adiciona a barra ao topo do elemento pai
  if (elementoPai) {
    elementoPai.prepend(userBar);
    console.log("Barra adicionada ao elemento pai.");
  } else {
    console.error("Elemento pai não encontrado.");
  }

  // Função para atualizar o status para "DIGITANDO..."
  const botBody = elementoPai;
  setInterval(() => {
    const isTyping = botBody.querySelector('.bubble1');
    console.log("Verificando se está digitando:", isTyping);
    if (isTyping) {
      varStatus.innerText = textoDigitando; // Exibe "DIGITANDO..."
    } else {
      varStatus.innerText = textoOnline; // Exibe "ONLINE" quando não estiver DIGITANDO
    }
  }, 400);
}
