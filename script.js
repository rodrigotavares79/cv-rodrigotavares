    // Evita que o navegador restaure a posição de rolagem anterior ao recarregar
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    function renderName(elementId, text, startDelay) {
      const el = document.getElementById(elementId);
      text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.className = "char";
        span.style.animationDelay = (startDelay + i * 0.05) + "s";
        span.textContent = char;
        el.appendChild(span);
      });
    }

    renderName("name1", "Rodrigo", 0.1);
    renderName("name2", "Tavares", 0.5);

    // Menu com linha indicadora móvel
    const navList = document.getElementById("navList");
    const indicator = document.getElementById("navIndicator");
    const navItems = navList.querySelectorAll(".nav-item");

    function moveIndicator(el) {
      indicator.style.left = el.offsetLeft + "px";
      indicator.style.width = el.offsetWidth + "px";
    }

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const targetId = item.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Posiciona a linha embaixo do item ativo ao carregar
    window.addEventListener("load", () => {
      moveIndicator(navList.querySelector(".nav-item.active"));
    });
    window.addEventListener("resize", () => {
      moveIndicator(navList.querySelector(".nav-item.active"));
    });

    // Detecta qual seção está visível ao rolar e atualiza o menu automaticamente
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            const activeItem = navList.querySelector(`.nav-item[data-target="${id}"]`);
            if (activeItem) {
              navItems.forEach((i) => i.classList.remove("active"));
              activeItem.classList.add("active");
              moveIndicator(activeItem);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Acordeão de experiências
    const experienceItems = document.querySelectorAll(".experience-item");

    experienceItems.forEach((item) => {
      const header = item.querySelector(".experience-header");
      const details = item.querySelector(".experience-details");
      const toggle = item.querySelector(".experience-toggle");

      header.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        if (isOpen) {
          item.classList.remove("open");
          details.style.maxHeight = "0px";
          toggle.textContent = "[+]";
        } else {
          item.classList.add("open");
          details.style.maxHeight = details.scrollHeight + "px";
          toggle.textContent = "[x]";
        }
      });
    });
