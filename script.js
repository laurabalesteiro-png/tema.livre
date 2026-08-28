// Aguarda todo o HTML da página ser carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Efeito de Revelação (Fade-in) ao rolar a página
    const cards = document.querySelectorAll('.card');
    
    const fecharAoRolar = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.1 // Ativa o efeito quando 10% do card aparece na tela
    });

    // Configura o estado inicial dos cards para o efeito visual funcionar
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        fecharAoRolar.observe(card);
    });

    // 2. Mensagem de Boas-Vindas no Console (Útil para testes no navegador)
    console.log("Website sobre aceitação e diversidade carregado com sucesso! 🌈");
});
<main>
<img src="imagem-blog.png"
alt="Logotipo conceitual de tecnologia e educacao: um livro aberto de onde emerge um cérebro digital brilhante, cercado por ícones de Wi-Fi, circuitos e lâmpada de ideia. Cores em tons de azul e branco.">

<div>
<h2>Meu primeiro post</h2>
<p class="artigo-autor">Por: Marcelo Paludetto</p>
<p>Boas-vindas ao meu novo blog! Aqui vou compartilhar dicas de programação
e curiosidades da área de tecnologia.</p>
<button>❤️<span>0</span></button>
<button>👍<span>0</span></button>
</div>

<img src="imagem-blog.png"
alt="Logotipo conceitual de tecnologia e educacao: um livro aberto de onde emerge um cérebro digital brilhante, cercado por ícones de Wi-Fi, circuitos e lâmpada de ideia. Cores em tons de azul e branco.">

<div>
<h2>Meu primeiro post</h2>
<p class="artigo-autor">Por: Marcelo Paludetto</p>
<p>Boas-vindas ao meu novo blog! Aqui vou compartilhar dicas de programação
e curiosidades da área de tecnologia.</p>
<button>❤️<span>0</span></button>
<button>👍<span>0</span></button>
</div>
</main>
