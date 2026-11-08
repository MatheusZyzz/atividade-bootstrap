# CodeStart — Atividade Bootstrap 5

Página responsiva em HTML5 + Bootstrap 5.3.8 + CSS e JavaScript nativo.

## Estrutura
- `index.html`: estrutura semântica e seis componentes Bootstrap.
- `style.css`: cores do carrossel e detalhes visuais.
- `script.js`: validação demonstrativa do formulário.

## Os 6 componentes
1. **Navbar**: `navbar`, `navbar-expand-lg`, `navbar-toggler`, `collapse`.
2. **Carrossel**: `carousel`, `carousel-inner`, três `carousel-item`, indicadores, setas.
3. **Cards**: `card`, `row`, `row-cols-1`, `row-cols-md-2`, `row-cols-lg-3`.
4. **Tabela**: `table`, `table-striped`, `table-responsive`, cinco linhas no `tbody`.
5. **Formulário**: `form-control`, `form-select`, `invalid-feedback`, validação HTML5 e JS nativo.
6. **Modal**: `modal`, `modal-dialog`, `data-bs-toggle="modal"`, `data-bs-dismiss="modal"`.

## Executar no Codespaces
1. Crie um repositório no GitHub e abra-o via **Code > Codespaces > Create codespace on main**.
2. Adicione os arquivos na raiz do repositório.
3. No terminal, rode `python3 -m http.server 8000`.
4. Use o aviso de porta encaminhada ou a aba **Ports** para abrir a porta 8000 no navegador.
5. Teste em telas largas e estreitas, incluindo menu, carrossel, formulário e modal.

O Bootstrap CSS e JavaScript são carregados por CDN: é necessária conexão com a internet.

## Atenção
O formulário apenas verifica os campos no navegador. Ele **não armazena nem envia** informações a um servidor.

## Referências oficiais
- Bootstrap: https://getbootstrap.com/docs/5.3/getting-started/introduction/
- GitHub Codespaces: https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository
