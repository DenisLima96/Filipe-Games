                                  5° Filipe's Game - São João | Tabela de Pontuação


📋 Sobre o Projeto
O Filipe's Game - São João é uma aplicação interativa criada para gerenciar e registrar a pontuação dos participantes no evento 5° Filipe's Game - São João. A cada rodada, as pontuações são calculadas automaticamente, e a classificação é atualizada em tempo real, com recursos visuais atrativos e um design premium inspirado no tema de São João.

O sistema foi desenvolvido para tornar o processo de pontuação mais eficiente e divertido durante o campeonato, que acontece uma vez por mês com a participação de amigos e familiares. Além de ser uma excelente oportunidade de praticar programação, o projeto também tem como objetivo aprimorar a experiência dos participantes no evento.

🚀 Tecnologias Utilizadas
Next.js: Framework React para renderização do frontend.

React: Biblioteca JavaScript para construção de interfaces.

TypeScript: Superset de JavaScript com tipagem estática.

Tailwind CSS: Framework CSS para estilização.

Framer Motion: Biblioteca para animações fluidas.

Shadcn/UI: Componentes de UI reutilizáveis.

LocalStorage API: Para persistência de dados no navegador.

✨ Funcionalidades
Principais recursos:
Registro de Pontuações: Interface intuitiva para inserção de pontos por rodada.

Cálculo Automático: Soma automática dos pontos de cada participante, facilitando a visualização.

Classificação em Tempo Real: Ordenação automática por pontuação total, sempre atualizada.

Persistência de Dados: Salvamento automático das pontuações no navegador (localStorage), garantindo que os dados não sejam perdidos ao fechar a página.

Exportação de Dados: Opção para exportar a tabela de pontuação em formato CSV, já com a classificação.

Design Premium: Interface elegante, inspirada no tema de São João, com elementos visuais personalizados.

Responsividade: Totalmente adaptável para diferentes tamanhos de tela, incluindo dispositivos móveis e tablets.

Animações: Efeitos visuais suaves e dinâmicos para proporcionar uma experiência interativa e divertida.

Destaque para Vencedores: Medalhas e estilos especiais para os três primeiros colocados.

 Como Usar
Inserção de Pontos:

Digite os pontos de cada participante nas células correspondentes a cada rodada.

Os totais serão atualizados automaticamente.

Salvamento:

As pontuações são salvas automaticamente no navegador.

O botão "Salvar" fornece uma confirmação visual do salvamento.

Exportação:

Clique no botão "Exportar" para baixar a tabela de pontuação em formato CSV.

Os dados exportados já estarão classificados de acordo com a pontuação total.

Compartilhamento:

Use o botão "Compartilhar" para enviar os resultados diretamente, caso haja implementação personalizada.

💻 Detalhes Técnicos
Estrutura de Dados
A aplicação armazena as pontuações dos participantes em um objeto no formato:

typescript
Copiar
Editar
{
  [nome_do_participante]: [pontos_rodada_1, pontos_rodada_2, ..., pontos_rodada_10]
}
Persistência
Os dados são automaticamente salvos no localStorage do navegador, permitindo que as pontuações sejam mantidas mesmo após o fechamento da página ou reinicialização do navegador.

Classificação
A classificação é calculada em tempo real, baseada na soma total dos pontos de cada participante. Os participantes são ordenados automaticamente do maior para o menor total de pontos.

🔧 Instalação e Execução
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/DenisLima96/Filipe-Games.git
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
Execute o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
Acesse a aplicação em http://localhost:3000.

🎨 Personalização
O sistema é altamente personalizável:

Altere a lista de participantes modificando o array participantes.

Ajuste o número de rodadas alterando os loops e arrays correspondentes.

Personalize as cores e estilos utilizando as classes do Tailwind.

Adicione ou remova funcionalidades conforme necessário para adaptar à sua necessidade.

📱 Compatibilidade
A aplicação é responsiva e funciona perfeitamente em:

Navegadores modernos (Chrome, Firefox, Safari, Edge).

Dispositivos móveis e tablets.

Diferentes tamanhos de tela.

Desenvolvido com ❤️ por Denis Lima para o 5° Filipe's Game - São João | 2025.
