    // Evita que o navegador restaure a posição de rolagem anterior ao recarregar
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // Dicionário de traduções
    const translations = {
      pt: {
        "nav.home": "Home",
        "nav.sobre": "Sobre Mim",
        "nav.experiencia": "Experiência",
        "nav.contatos": "Contatos",
        "hero.role": "GRC &amp; Segurança da Informação",
        "hero.location.label": "Localização",
        "hero.location.value": "Brasil",
        "hero.experience.label": "Experiência",
        "hero.experience.value": "20+ Anos",
        "current.label": "Atualmente",
        "current.text": "Desenvolvendo processos de Governança de SI e Riscos na <span class=\"fiemg\">FIEMG</span>.",
        "sobre.eyebrow": "&gt;&gt; Sobre Mim",
        "sobre.title": "Um Pouco Da Minha História",
        "sobre.p1": "Eu trabalho com tecnologia há mais de 20 anos e, nesse tempo, passei por inúmeras experiências tanto com gestão quanto como analista.",
        "sobre.p2": "Sou formado em Informática no CES, em Juiz de Fora/MG, e me mudei para Belo Horizonte em 2006. Na capital mineira, acumulei boa experiência como gestor, principalmente na <span class=\"company\">BLIP</span>, com gestão de equipe de Suporte Técnico; na <span class=\"company\">Stefanini</span>, com gerenciamento de contratos de prestação de serviços de TI e equipes de Service Desk, Infraestrutura e Governança; e na <span class=\"company\">VOLL</span>, liderando um time de atendimento especializado no produto. Essas experiências contam mais de 10 anos.",
        "sobre.p3": "Como analista, trabalhei com BI (Business Intelligence) na <span class=\"company\">BLIP</span>, Gerenciamento de Projetos de Infraestrutura na <span class=\"company\">IT One</span>, Auditoria de TI no grupo <span class=\"company\">Oncoclínicas</span> e, atualmente, estou desenvolvendo processos de Governança de SI e Riscos na <span class=\"company\">FIEMG</span>.",
        "sobre.p4": "Sou Pós-Graduado em Banco de Dados e Cibersegurança e Governança pela PUC Minas e tenho diversas certificações.",
        "sobre.p5": "Tenho boa fluência na língua inglesa para conversar, escrever e ler, entendo um pouco de espanhol e sou apaixonado pela língua francesa.",
        "sobre.p6": "Fora isso tudo, dedico meu tempo livre à minha família, ao violão e ao Botafogo.",
        "experiencia.eyebrow": "&gt;&gt; Experiência",
        "experiencia.title": "Meu Histórico Profissional",
        "exp.fiemg.role": "Analista de Segurança da Informação, FIEMG",
        "exp.fiemg.b1": "Condução de análises de risco para identificação de vulnerabilidades e fatores críticos",
        "exp.fiemg.b2": "Elaboração de Políticas de Segurança da Informação (PSI) baseadas em ISO 27001, NIST e CIS Controls",
        "exp.fiemg.b3": "Relatórios e dashboards de KPIs/KRIs para apoiar decisões em Comitês de Segurança",
        "exp.zummit.role": "Auditor Interno e Especialista em Governança de TI, Zummit (Oncoclínicas&amp;Co)",
        "exp.zummit.b1": "Liderança de projetos de auditoria em TI e Segurança da Informação",
        "exp.zummit.b2": "Ponto focal em auditorias externas conduzidas por Deloitte e Grant Thornton",
        "exp.zummit.b3": "Gestão de mudanças, problemas e incidentes críticos como Especialista em Governança de TI",
        "exp.voll.role": "Coordenador de Serviços de TI, VOLL",
        "exp.voll.b1": "Estruturação da equipe de suporte a produtos com base em ITIL 4 e COBIT",
        "exp.voll.b2": "Gestão de incidentes, problemas, mudanças, catálogo de serviços e SLAs",
        "exp.voll.b3": "Relatórios executivos e acompanhamento de metas via metodologia OKRs",
        "exp.form4t.role": "Analista de Segurança da Informação, FORM4T",
        "exp.form4t.b1": "Avaliações de risco baseadas na ISO/IEC 27005",
        "exp.form4t.b2": "Apoio a clientes na implementação de SGSI conforme ISO/IEC 27001",
        "exp.form4t.b3": "Programas de conscientização em segurança e definição de KPIs",
        "exp.itone.role": "Gerente de Projetos de Infraestrutura e Governança, IT-One",
        "exp.itone.b1": "Gerenciamento de projetos de redes e segurança (VMware, Palo Alto)",
        "exp.itone.b2": "Conformidade com LGPD e GDPR orientada pela ISO 27001",
        "exp.itone.b3": "Gestão de vulnerabilidades, riscos e mudanças em ambiente ITSM (ServiceNow)",
        "exp.stefanini.role": "Gerente Operacional e de Serviços, Stefanini Brasil",
        "exp.stefanini.b1": "Liderança de equipes de field services, service desk, cibersegurança e NOC",
        "exp.stefanini.b2": "Elaboração de catálogos de serviços, negociação de SLAs e gestão de contratos",
        "exp.stefanini.b3": "Principais clientes: ArcelorMittal, Alcoa, Novo Nordisk, BH Airport",
        "exp.blipbi.role": "Analista de Business Intelligence, Take Blip",
        "exp.blipbi.b1": "Atendimento de tickets relacionados a problemas em relatórios",
        "exp.blipbi.b2": "Desenvolvimento de scripts e consultas SQL",
        "exp.blipbi.b3": "Criação de dashboards executivos",
        "exp.blipcoord.role": "Coordenador de Suporte Técnico, Take Blip",
        "exp.blipcoord.b1": "Liderança de equipe de Service Desk para clientes externos",
        "exp.blipcoord.b2": "Atendimento a operadoras como Oi, Vivo, Claro, Tim, Movistar e Entel",
        "exp.blipcoord.b3": "Promovido de analista a coordenador ao longo do período",
        "contatos.eyebrow": "&gt;&gt; Contatos",
        "contatos.title": "Vamos Conversar?",
        "contatos.text": "Se quiser bater um papo sobre tecnologia, processos de governança, oportunidades ou qualquer outro assunto estou à disposição."
      },
      en: {
        "nav.home": "Home",
        "nav.sobre": "About Me",
        "nav.experiencia": "Experience",
        "nav.contatos": "Contact",
        "hero.role": "GRC &amp; Information Security",
        "hero.location.label": "Location",
        "hero.location.value": "Brazil",
        "hero.experience.label": "Experience",
        "hero.experience.value": "20+ Years",
        "current.label": "Currently",
        "current.text": "Developing IT Governance and Risk processes at <span class=\"fiemg\">FIEMG</span>.",
        "sobre.eyebrow": "&gt;&gt; About Me",
        "sobre.title": "A Bit Of My Story",
        "sobre.p1": "I've worked in technology for more than 20 years, and during that time I've gone through countless experiences both in management and as an analyst.",
        "sobre.p2": "I graduated in Computer Science at CES, in Juiz de Fora/MG, and moved to Belo Horizonte in 2006. In the state capital, I built solid experience as a manager, mainly at <span class=\"company\">BLIP</span>, managing a Technical Support team; at <span class=\"company\">Stefanini</span>, managing IT service contracts and Service Desk, Infrastructure and Governance teams; and at <span class=\"company\">VOLL</span>, leading a specialized product support team. These experiences add up to more than 10 years.",
        "sobre.p3": "As an analyst, I worked with BI (Business Intelligence) at <span class=\"company\">BLIP</span>, Infrastructure Project Management at <span class=\"company\">IT One</span>, IT Audit at the <span class=\"company\">Oncoclínicas</span> group, and currently I'm developing IT Governance and Risk processes at <span class=\"company\">FIEMG</span>.",
        "sobre.p4": "I hold postgraduate degrees in Databases and in Cybersecurity and Governance from PUC Minas, and I have several certifications.",
        "sobre.p5": "I'm fluent in English (speaking, writing and reading), understand a bit of Spanish, and I'm passionate about the French language.",
        "sobre.p6": "Besides all that, I spend my free time with my family, playing guitar, and following Botafogo.",
        "experiencia.eyebrow": "&gt;&gt; Experience",
        "experiencia.title": "My Professional Background",
        "exp.fiemg.role": "Information Security Analyst, FIEMG",
        "exp.fiemg.b1": "Conducting risk analyses to identify vulnerabilities and critical factors",
        "exp.fiemg.b2": "Developing Information Security Policies (ISP) based on ISO 27001, NIST and CIS Controls",
        "exp.fiemg.b3": "Producing reports and KPI/KRI dashboards to support Security Committee decisions",
        "exp.zummit.role": "Internal Auditor and IT Governance Specialist, Zummit (Oncoclínicas&amp;Co)",
        "exp.zummit.b1": "Leading IT and Information Security audit projects",
        "exp.zummit.b2": "Point of contact for external audits conducted by Deloitte and Grant Thornton",
        "exp.zummit.b3": "Managing changes, problems and critical incidents as IT Governance Specialist",
        "exp.voll.role": "IT Services Coordinator, VOLL",
        "exp.voll.b1": "Structuring the product support team based on ITIL 4 and COBIT",
        "exp.voll.b2": "Managing incidents, problems, changes, service catalog and SLAs",
        "exp.voll.b3": "Executive reporting and goal tracking using the OKR methodology",
        "exp.form4t.role": "Information Security Analyst, FORM4T",
        "exp.form4t.b1": "Risk assessments based on ISO/IEC 27005",
        "exp.form4t.b2": "Supporting clients implementing an ISMS aligned with ISO/IEC 27001",
        "exp.form4t.b3": "Security awareness programs and definition of KPIs",
        "exp.itone.role": "IT Infrastructure Project Manager, Governance, IT-One",
        "exp.itone.b1": "Managing network and security projects (VMware, Palo Alto)",
        "exp.itone.b2": "Ensuring LGPD and GDPR compliance guided by ISO 27001",
        "exp.itone.b3": "Managing vulnerabilities, risks and changes in a ServiceNow ITSM environment",
        "exp.stefanini.role": "Service Delivery and Operational Manager, Stefanini Brasil",
        "exp.stefanini.b1": "Leading field services, service desk, cybersecurity and NOC teams",
        "exp.stefanini.b2": "Building service catalogs, negotiating SLAs and managing contracts",
        "exp.stefanini.b3": "Key clients: ArcelorMittal, Alcoa, Novo Nordisk, BH Airport",
        "exp.blipbi.role": "Business Intelligence Analyst, Take Blip",
        "exp.blipbi.b1": "Handling tickets related to reporting issues",
        "exp.blipbi.b2": "Developing SQL scripts and queries",
        "exp.blipbi.b3": "Building executive dashboards",
        "exp.blipcoord.role": "Technical Support Manager, Take Blip",
        "exp.blipcoord.b1": "Leading a Service Desk team for external clients",
        "exp.blipcoord.b2": "Supporting carriers such as Oi, Vivo, Claro, Tim, Movistar and Entel",
        "exp.blipcoord.b3": "Promoted from analyst to coordinator over the period",
        "contatos.eyebrow": "&gt;&gt; Contact",
        "contatos.title": "Let's Talk?",
        "contatos.text": "If you'd like to chat about technology, governance processes, opportunities, or anything else, feel free to reach out."
      }
    };

    function applyLang(lang) {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key] !== undefined) {
          el.innerHTML = translations[lang][key];
        }
      });
      document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      });
      document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
      try {
        localStorage.setItem("cvLang", lang);
      } catch (e) {}
    }

    const savedLang = (function () {
      try {
        return localStorage.getItem("cvLang");
      } catch (e) {
        return null;
      }
    })();

    applyLang(savedLang === "en" ? "en" : "pt");

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
    });

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
          const navHeight = document.querySelector(".site-nav").offsetHeight;
          const targetPosition =
            targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
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
