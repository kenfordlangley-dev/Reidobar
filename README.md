# 🍸 Rei Do Bar - Website Profissional

Website de divulgação premium para bartender profissional com drinks clicáveis e vídeos demonstrativos.

## ✨ Recursos

- **Design Premium**: Layout moderno com gradientes, glassmorphism e animações suaves
- **Drinks Clicáveis**: Galeria de drinks que abrem vídeos em modal
- **Horários de Disponibilidade**: Seção mostrando quando você está disponível
- **Informações de Contato**: WhatsApp, telefone, e-mail e localização
- **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- **Animações**: Partículas animadas, efeitos parallax, hover effects e muito mais

## 📁 Estrutura de Arquivos

```
reidobar/
├── index.html          # Estrutura principal da página
├── style.css           # Estilos e design system
├── script.js           # Interatividade e animações
└── README.md          # Este arquivo
```

## 🎬 Como Adicionar Seus Vídeos

1. Faça upload dos vídeos dos seus drinks no YouTube
2. Abra o arquivo `script.js`
3. Localize o objeto `drinkVideos` (linha ~2)
4. Substitua os IDs dos vídeos pelos seus:

```javascript
const drinkVideos = {
    caipirinha: 'https://www.youtube.com/embed/SEU_VIDEO_ID',
    mojito: 'https://www.youtube.com/embed/SEU_VIDEO_ID',
    cosmopolitan: 'https://www.youtube.com/embed/SEU_VIDEO_ID',
    margarita: 'https://www.youtube.com/embed/SEU_VIDEO_ID'
};
```

**Como pegar o ID do vídeo:**
- URL do YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID do vídeo: `dQw4w9WgXcQ`
- URL para embed: `https://www.youtube.com/embed/dQw4w9WgXcQ`

## 📞 Como Atualizar Informações de Contato

Abra o arquivo `index.html` e procure pela seção `<!-- Contact Section -->` (linha ~110).

Atualize:
- **WhatsApp**: Substitua `5511999999999` pelo seu número (formato: código do país + DDD + número)
- **Telefone**: Atualize para seu número real
- **E-mail**: Substitua `contato@reidobar.com` pelo seu e-mail
- **Localização**: Atualize "São Paulo - SP" para sua cidade

## 🕐 Como Atualizar Horários

No arquivo `index.html`, procure pela seção `<!-- Availability Section -->` (linha ~80).

Edite os horários conforme sua disponibilidade.

## 🎨 Como Personalizar as Cores

Abra o arquivo `style.css` e modifique as variáveis CSS no início (linha ~3):

```css
:root {
  --primary-gold: #D4AF37;        /* Cor principal (dourado) */
  --accent-pink: #ff6b9d;         /* Cor de destaque (rosa) */
  --accent-blue: #4ecdc4;         /* Cor secundária (azul) */
  --deep-purple: #1a0b2e;         /* Cor de fundo escuro */
  /* ... outras cores */
}
```

## 🖼️ Como Adicionar Mais Drinks

1. **No HTML** (`index.html`), adicione um novo card dentro de `.drinks-grid`:

```html
<div class="drink-card" data-drink="nomedodrink">
    <img src="caminho/para/imagem.png" alt="Nome do Drink" class="drink-image">
    <div class="drink-info">
        <h3 class="drink-name">Nome do Drink</h3>
        <p class="drink-description">Descrição do drink aqui.</p>
        <button class="view-video-btn">▶ Assistir Vídeo</button>
    </div>
</div>
```

2. **No JavaScript** (`script.js`), adicione o vídeo e nome:

```javascript
const drinkVideos = {
    // ... drinks existentes
    nomedodrink: 'https://www.youtube.com/embed/VIDEO_ID'
};

const drinkNames = {
    // ... nomes existentes
    nomedodrink: 'Nome Completo do Drink'
};
```

## 🚀 Como Visualizar o Site

1. **Opção 1 - Abrir direto no navegador:**
   - Navegue até a pasta `reidobar`
   - Clique duas vezes em `index.html`

2. **Opção 2 - Live Server (recomendado para desenvolvimento):**
   - Instale a extensão "Live Server" no VS Code
   - Clique com botão direito em `index.html`
   - Selecione "Open with Live Server"

## 📱 Hospedagem Online

Para colocar o site online, você pode usar:

1. **GitHub Pages** (Grátis):
   - Crie uma conta no GitHub
   - Crie um repositório
   - Faça upload dos arquivos
   - Ative GitHub Pages nas configurações

2. **Netlify** (Grátis):
   - Crie conta em netlify.com
   - Arraste a pasta do projeto
   - Site fica online automaticamente

3. **Vercel** (Grátis):
   - Crie conta em vercel.com
   - Importe o projeto
   - Deploy automático

## 🎯 Dicas de Uso

- **Vídeos**: Use vídeos curtos (30-60 segundos) para manter a atenção
- **Qualidade**: Grave vídeos em boa iluminação e qualidade HD
- **Thumbnails**: As imagens dos drinks são importantes - use fotos profissionais
- **Atualização**: Mantenha horários e contatos sempre atualizados
- **SEO**: Altere o título e descrição no `<head>` do HTML para melhor posicionamento no Google

## 🛠️ Tecnologias Utilizadas

- HTML5 (Estrutura semântica)
- CSS3 (Design system, animations, gradients)
- JavaScript Vanilla (Sem dependências externas)
- Google Fonts (Playfair Display & Poppins)

## 📄 Licença

Este projeto foi criado exclusivamente para uso pessoal do Rei Do Bar.

---

**Criado com ❤️ e muito ☕**

Para dúvidas ou suporte, abra uma issue ou entre em contato!
