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