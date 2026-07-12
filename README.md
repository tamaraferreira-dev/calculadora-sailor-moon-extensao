🔌🌙 Prisma Lunar: Calculadora Mágica (Extensão para o Chrome)

Bem-vinda ao repositório do Prisma Lunar, uma extensão fofa e interativa para o Google Chrome que coloca a Calculadora Mágica da Sailor Moon diretamente na tua barra de ferramentas do navegador! 🪐✨

Este projeto foi desenvolvido como um passo avançado nos meus estudos de desenvolvimento web frontend, com o objetivo de aprender a estruturar, adaptar e publicar uma extensão de navegador utilizando as regras modernas do Google Chrome.

🎨 O que é esta Extensão?

A extensão permite fazer cálculos rápidos e divertidos num popup compacto sem que precises de abrir uma nova aba no navegador. Ela traz toda a estética mágica de Sailor Moon:

Design Aconchegante (Glassmorphism): Um visual translúcido de vidro fosco com brilhos dourados e rosa pastel.

Animação Marquee: Frases de efeito clássicas do anime que deslizam suavemente pelo visor de histórico sempre que clicas no botão especial ✨.

Efeito de Faíscas: Estrelas e luas cintilantes que voam do cursor a cada clique nos botões!

🚀 Desafios e Aprendizados Técnicos

Desenvolver uma extensão trouxe desafios de arquitetura muito diferentes de um site comum. Neste projeto, eu aprendi a lidar com:

🔒 1. Segurança de Conteúdo (CSP do Chrome)

Para evitar falhas de segurança, o Google Chrome proíbe o uso de JavaScript "inline" (como os atributos onclick="..." diretamente nas tags do HTML).

Como resolvi: Adaptei todo o meu código HTML (popup.html) para usar atributos de dados (data-action e data-val) e reescrevi a lógica do JavaScript (script.js) para escutar os cliques de forma totalmente isolada através de addEventListener.

📦 2. Restrição de Links Externos (CDNs)

O Chrome Manifest V3 não permite o carregamento de estilos ou scripts vindos de servidores externos em popups.

Como resolvi: Descarreguei o código fonte do Tailwind CSS diretamente e salvei como um arquivo local (tailwind.css) dentro da pasta da extensão, garantindo que o visual continue lindo de forma totalmente offline e segura.

⚙️ 3. O arquivo de configuração (Manifest V3)

Criei e configurei o arquivo manifest.json, que serve como o bilhete de identidade da extensão, indicando ao navegador o nome do projeto, ícones, permissões e qual arquivo HTML deve ser aberto como popup.

📂 Estrutura do Repositório

manifest.json - Configuração e metadados da extensão.

popup.html - Estrutura adaptada da calculadora (sem atributos inline).

style.css - Estilos de vidro fosco, animação de flutuação e efeito de faíscas.

tailwind.css - Framework CSS Tailwind salvo localmente para segurança.

script.js - Lógica matemática e captura dinâmica de eventos do teclado.

LICENSE - Licença MIT que permite o uso livre do projeto.

💻 Como Instalar e Usar no seu Navegador (Sem a Loja)

Como esta extensão está em fase de desenvolvimento, você pode testá-la e usá-la de forma 100% gratuita no seu Google Chrome seguindo estes passos simples:

📥 Passo 1: Preparar a pasta no seu Computador

Faça o download ou clone este repositório para o seu computador.

Certifique-se de extrair o arquivo .zip (se baixou por ele) para que fique uma pasta comum contendo os arquivos manifest.json, popup.html, style.css, script.js e as imagens locais.

🔌 Passo 2: Ativar o Modo de Programador no Chrome

Abra o seu navegador Google Chrome.

Na barra de endereços, digite chrome://extensions/ e aperte Enter.

No canto superior direito da página, ative a chave "Modo de programador" (Developer Mode) 🟢.

🚀 Passo 3: Carregar a Extensão

No canto superior esquerdo que acabou de aparecer, clique em "Carregar descompactada" (Load unpacked).

Selecione a pasta do projeto no seu computador (onde estão os arquivos da calculadora) e clique em Selecionar Pasta.

Pronto! A calculadora mágica agora está instalada localmente.

📌 Passo 4: Fixar na Barra de Ferramentas

Clique no ícone de Quebra-cabeça 🧩 (Extensões) no canto superior direito do seu Chrome.

Encontre a Prisma Lunar: Calculadora Mágica na lista e clique no ícone do Alfinete 📌 ao lado dela.

Agora ela está sempre visível! Basta dar um clique no ícone da Lua Crescente 🌙 para abrir e usar enquanto navega na internet.

✨ Como Usar os Poderes Mágicos:

Contas Rápidas: Faça suas operações matemáticas do dia a dia clicando nas teclas de cristal ou usando o teclado físico do seu computador.

Efeito de Faíscas: Cada clique em qualquer botão faz estrelas, luas e corações mágicos voarem pelo seu cursor!

Botão de Brilho Especial (✨): Clique no botão rosa com a estrelinha para fazer o visor de histórico deslizar frases de efeito clássicas do anime Sailor Moon!