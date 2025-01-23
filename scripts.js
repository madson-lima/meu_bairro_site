document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente carregado e analisado.");

  // Captura o seletor de modos de cor no documento
  const colorModeSelector = document.getElementById("colorModeSelector");

  // Verifica se o seletor foi encontrado corretamente
  if (colorModeSelector) {
    console.log("Seletor de filtro de daltonismo encontrado.");

    // Função para alterar a classe do body conforme o modo selecionado
    function changeColorMode() {
      const selectedMode = colorModeSelector.value; // Captura o valor do modo selecionado
      console.log(`Modo de cor selecionado: ${selectedMode}`);

      document.body.className = ""; // Remove todas as classes do body
      document.body.classList.add(selectedMode); // Adiciona a nova classe com base no valor
      console.log(`Classe aplicada ao body: ${document.body.className}`);
    }

    // Adiciona o evento 'change' ao seletor
    colorModeSelector.addEventListener("change", changeColorMode);

    // Define o modo inicial como "normal" ao carregar a página
    document.body.classList.add("normal");
    console.log("Modo de cor inicial definido como: normal");
  } else {
    console.log("Seletor de filtro de daltonismo não encontrado no DOM.");
  }

  // Seletores das ferramentas de acessibilidade
  const increaseFontBtn = document.getElementById("increaseFont");
  const decreaseFontBtn = document.getElementById("decreaseFont");
  const toggleThemeBtn = document.getElementById("toggleTheme");

  // Definição de variáveis
  let fontSize = 16; // Tamanho padrão da fonte

  // Aumentar o tamanho da fonte
  if (increaseFontBtn) {
    increaseFontBtn.addEventListener("click", () => {
      if (fontSize < 24) {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
        console.log(`Tamanho da fonte aumentado para: ${fontSize}px`);
      }
    });
  }

  // Diminuir o tamanho da fonte
  if (decreaseFontBtn) {
    decreaseFontBtn.addEventListener("click", () => {
      if (fontSize > 12) {
        fontSize -= 2;
        document.body.style.fontSize = `${fontSize}px`;
        console.log(`Tamanho da fonte reduzido para: ${fontSize}px`);
      }
    });
  }

  // Alternar tema claro/escuro
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      // Alterna a classe "dark-mode" no corpo principal
      document.body.classList.toggle("dark-mode");

      // Alterna a classe "dark-mode" nos principais elementos do layout
      document.querySelector(".header").classList.toggle("dark-mode");
      document.querySelector(".footer").classList.toggle("dark-mode");
      document.getElementById("progressBar").classList.toggle("dark-mode");

      // Função de login
      document
        .getElementById("loginForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Obtém os valores do formulário
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          // Verificação básica
          if (email === "user@email.com" && password === "senha123") {
            alert("Login bem-sucedido!");
            // Redirecionar ou carregar o conteúdo após login
            window.location.href = "index.html"; // Mude para o destino apropriado
          } else {
            alert("E-mail ou senha incorretos. Tente novamente.");
          }
        });

        document.getElementById("loginForm").addEventListener("submit", function (e) {
          e.preventDefault();
        
          // Usuários administradores (Exemplo fictício)
          const adminCredentials = [
            { email: "admin1@meubairro.com", password: "admin123" },
            { email: "admin2@meubairro.com", password: "admin456" }
          ];
        
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
        
          // Exibe um loader no botão
          const loginButton = document.querySelector(".login-button");
          loginButton.textContent = "Entrando...";
          loginButton.disabled = true;
        
          // Simula a autenticação
          setTimeout(() => {
            const isAdmin = adminCredentials.some(
              (admin) => admin.email === email && admin.password === password
            );
        
            if (isAdmin) {
              alert("Login bem-sucedido! Bem-vindo, administrador.");
              window.location.href = "admin_dashboard.html"; // Redireciona para o painel do administrador
            } else {
              alert("Acesso negado. Apenas administradores têm permissão.");
            }
        
            loginButton.textContent = "Entrar";
            loginButton.disabled = false;
          }, 1500); // Simula um tempo de resposta de 1.5 segundos
        });
        
        

      // Atualiza os links do menu e rodapé
      document.querySelectorAll(".nav a, .footer a").forEach((link) => {
        link.classList.toggle("dark-mode");
      });

      // Ajusta botões e elementos interativos
      document.querySelectorAll(".cta-button").forEach((button) => {
        button.classList.toggle("dark-mode");
      });

      // Ajusta o banner
      const banner = document.querySelector(".banner");
      if (banner) {
        banner.classList.toggle("dark-mode");
      }

      // Ajusta as seções (e.g., Sobre, Serviços)
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.toggle("dark-mode");
      });

      // Ajusta o vídeo de apresentação
      const presentationVideo = document.querySelector(
        ".presentation-video video"
      );
      if (presentationVideo) {
        presentationVideo.classList.toggle("dark-mode");
      }

      // Ajusta campos de formulário (inputs, textareas)
      document
        .querySelectorAll(".contact-form input, .contact-form textarea")
        .forEach((field) => {
          field.classList.toggle("dark-mode");
        });

      // Ajusta o botão do formulário
      const formButton = document.querySelector(".contact-form button");
      if (formButton) {
        formButton.classList.toggle("dark-mode");
      }

      console.log("Tema alternado.");
    });
  }
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open"); // Alterna o estado do ícone
      mobileMenu.classList.toggle("show"); // Mostra ou esconde o menu
    });
  }

  // Barra de progresso de rolagem
  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    document.getElementById("progressBar").style.width = scrollPercent + "%";
    console.log(`Barra de progresso atualizada: ${scrollPercent.toFixed(2)}%`);
  });

  // Função para animação de rolagem
  function animateOnScroll() {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // Ajuste do ponto de disparo
      if (sectionTop < triggerPoint) {
        section.classList.add("visible"); // Adiciona a classe quando visível
      }
    });
  }

  // Detecta a rolagem
  window.addEventListener("scroll", animateOnScroll);

  // Lógica do Carrossel de Imagens
  let currentIndex = 0;
  let intervalId = null;
  const carouselInterval = 3000; // Tempo em milissegundos (3 segundos)
  const images = document.querySelector(".carousel-images");

  if (images) {
    const totalImages = images.children.length;

    console.log("Carrossel de imagens encontrado.");

    // Função para exibir a imagem de acordo com o índice
    function showImage(index) {
      if (index >= totalImages) currentIndex = 0;
      if (index < 0) currentIndex = totalImages - 1;

      images.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Função para mostrar a próxima imagem
    function nextImage() {
      currentIndex++;
      showImage(currentIndex);
      resetAutoplay();
    }

    // Função para mostrar a imagem anterior
    function prevImage() {
      currentIndex--;
      showImage(currentIndex);
      resetAutoplay();
    }

    // Função para redefinir o autoplay quando houver interação
    function resetAutoplay() {
      clearInterval(intervalId);
      intervalId = setInterval(nextImage, carouselInterval);
    }

    // Iniciar o autoplay ao carregar a página
    intervalId = setInterval(nextImage, carouselInterval);

    // Adicionar eventos de clique para os botões de controle do carrossel
    document.querySelector(".prev").addEventListener("click", prevImage);
    document.querySelector(".next").addEventListener("click", nextImage);

    // Controle dos botões de pausa e retomada do carrossel
    const pauseButton = document.getElementById("pauseButton");
    const playButton = document.getElementById("playButton");

    if (pauseButton && playButton) {
      pauseButton.addEventListener("click", () => {
        clearInterval(intervalId);
        pauseButton.style.display = "none";
        playButton.style.display = "inline";
      });

      playButton.addEventListener("click", () => {
        intervalId = setInterval(nextImage, carouselInterval);
        pauseButton.style.display = "inline";
        playButton.style.display = "none";
      });
    }

    // Pausar o autoplay quando a aba não estiver visível
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearInterval(intervalId);
      } else {
        intervalId = setInterval(nextImage, carouselInterval);
      }
    });

    // Mostrar a primeira imagem no início
    showImage(currentIndex);
  } else {
    console.log("Carrossel de imagens não encontrado.");
  }

  // Controle do vídeo de apresentação
  const presentationVideo = document.getElementById("presentationVideo");

  if (presentationVideo) {
    console.log("Vídeo de apresentação encontrado.");

    // Pausa o autoplay do carrossel enquanto o vídeo está em reprodução
    presentationVideo.addEventListener("play", () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    // Retoma o autoplay do carrossel quando o vídeo é pausado
    presentationVideo.addEventListener("pause", () => {
      if (images && !document.hidden) {
        intervalId = setInterval(nextImage, carouselInterval);
      }
    });

    // Pausa o vídeo quando a aba está oculta
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        presentationVideo.pause();
      }
    });
  } else {
    console.log("Vídeo de apresentação não encontrado no DOM.");
  }

  // Formulário de Contato
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    });
  }
});
