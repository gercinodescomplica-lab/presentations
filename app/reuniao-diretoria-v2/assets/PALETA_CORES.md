# Paleta de cores — Paper de IA PRODAM

Paleta usada em `Paper_IA_PRODAM_Combos.html`.

As duas cores de marca foram extraídas diretamente dos pixels de `Logo Prodam_Colorida_Azul.pdf` — não são aproximações. As demais formam uma escala neutra derivada do azul: todos os cinzas puxam levemente para o azul, o que faz com que convivam com a marca sem competir com ela.

## Cores de marca

| Cor | Hex | RGB | Uso no documento |
|---|---|---|---|
| Azul Prodam | `#002B48` | 0, 43, 72 | Fundo da capa, cabeçalhos de tabela e de combo, títulos, nomes de produto |
| Laranja Prodam | `#FF671D` | 255, 103, 29 | Selo dos 3 meses, tags de combo, marcadores de lista, categorias, filete de destaque |

## Escala neutra

| Cor | Hex | RGB | Uso no documento |
|---|---|---|---|
| Tinta | `#12212E` | 18, 33, 46 | Texto corrido |
| Cinza texto | `#5B6B7A` | 91, 107, 122 | Subtítulos, descrições, rodapé, notas |
| Cinza fundo | `#F4F7FA` | 244, 247, 250 | Cards de governança, caixa de "ganho esperado" |
| Linha | `#DFE6EC` | 223, 230, 236 | Bordas de card, divisórias de tabela |
| Branco zebra | `#FAFCFE` | 250, 252, 254 | Linhas alternadas da tabela do catálogo |

## Sobre fundo azul

| Cor | Hex | RGB | Uso no documento |
|---|---|---|---|
| Azul claro | `#C9D8E4` | 201, 216, 228 | Texto de apoio sobre o azul da capa e do bloco de oferta |
| Azul acinzentado | `#8FA8BD` | 143, 168, 189 | Endereço e contato no rodapé da capa |

## Variáveis CSS

Estão declaradas no topo do HTML. Trocar aqui propaga para o documento inteiro.

```css
:root{
  --navy:   #002B48;
  --orange: #FF671D;
  --ink:    #12212e;
  --muted:  #5b6b7a;
  --line:   #dfe6ec;
  --bg:     #f4f7fa;
}
```

## Regra de contraste

O laranja sobre branco tem contraste de aproximadamente **3.4:1**, abaixo do mínimo WCAG AA de 4.5:1 para texto corrido. Por isso, no paper ele aparece apenas em:

- texto grande (selo "3 meses", números dos passos);
- texto sobre fundo azul escuro;
- elementos gráficos (marcadores, filetes, tags com fundo laranja e texto branco).

Nunca em parágrafo. Vale manter essa regra em outras peças da mesma família.

## Tipografia

Segoe UI, com fallback para `-apple-system`, `Helvetica Neue` e `Arial`. Pesos 400, 700 e 800.

## Assets

| Arquivo | Descrição |
|---|---|
| `assets/prodam-logo-colorida.png` | Logo original em 1600 px de largura, fundo transparente |
| `assets/prodam-logo-branca.png` | Versão monocromática branca (o "Prodam" fica branco, o grafismo permanece laranja), para fundos escuros |

Ambas foram geradas a partir de `Logo Prodam_Colorida_Azul.pdf` a 300 dpi. No HTML, as duas estão embutidas em base64, então o arquivo funciona sozinho, sem depender da pasta `assets/`.
