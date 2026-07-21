"use strict";


/* =========================================================
   BANCO DE DADOS

   As imagens img01.jpg até img05.jpg são usadas somente
   nas capas da categoria Filosofia da Ciência.

   Para ativar os links futuramente, substitua:

   link: "#"

   pelo endereço desejado.
========================================================= */

const catalogData = [

    {
        id: "mito-filosofia",

        title: "Mito e Filosofia",

        subtitle:
            "Narrativas míticas, explicações simbólicas e o surgimento do pensamento filosófico.",

        symbol: "Ω",

        rgb: "184, 117, 255",

        environments: [

            {
                type: "Conteúdo",
                title: "Origens do pensamento filosófico",
                description:
                    "Textos introdutórios sobre mito, razão e nascimento da Filosofia.",
                icon: "Φ",
                rgb: "196, 150, 255",
                link: "#"
            },

            {
                type: "Atividades",
                title: "Mito, narrativa e explicação",
                description:
                    "Atividades de interpretação, comparação e reflexão filosófica.",
                icon: "✓",
                rgb: "255, 121, 189",
                link: "#"
            },

            {
                type: "Vídeos",
                title: "Do mito ao pensamento racional",
                description:
                    "Videoaulas e materiais audiovisuais sobre a Filosofia antiga.",
                icon: "▶",
                rgb: "255, 157, 99",
                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Mitos, filósofos e narrativas",
                description:
                    "Leituras, textos complementares e materiais de aprofundamento.",
                icon: "✦",
                rgb: "114, 183, 255",
                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "O mito ainda explica o mundo?",
                description:
                    "Espaço de participação, argumentação e debate coletivo.",
                icon: "◌",
                rgb: "94, 227, 195",
                link: "#"
            }

        ]
    },


    {
        id: "teoria-conhecimento",

        title: "Teoria do Conhecimento",

        subtitle:
            "Verdade, crença, razão, experiência, dúvida e possibilidades do conhecimento humano.",

        symbol: "?",

        rgb: "78, 181, 255",

        environments: [

            {
                type: "Conteúdo",
                title: "O que podemos conhecer?",
                description:
                    "Conceitos sobre verdade, crença, razão, experiência e conhecimento.",
                icon: "?",
                rgb: "100, 193, 255",
                link: "#"
            },

            {
                type: "Atividades",
                title: "Razão, dúvida e experiência",
                description:
                    "Questões investigativas e exercícios sobre o conhecimento humano.",
                icon: "✓",
                rgb: "136, 124, 255",
                link: "#"
            },

            {
                type: "Vídeos",
                title: "Caminhos do conhecimento",
                description:
                    "Aulas sobre racionalismo, empirismo, criticismo e ceticismo.",
                icon: "▶",
                rgb: "88, 223, 208",
                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Verdade e pensamento",
                description:
                    "Textos filosóficos e materiais complementares para pesquisa.",
                icon: "✦",
                rgb: "255, 198, 94",
                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "Existe uma verdade absoluta?",
                description:
                    "Debate sobre verdade, opinião, evidência e interpretação.",
                icon: "◌",
                rgb: "255, 120, 157",
                link: "#"
            }

        ]
    },


    {
        id: "etica",

        title: "Ética",

        subtitle:
            "Liberdade, responsabilidade, valores, escolhas, virtudes e convivência humana.",

        symbol: "⚖",

        rgb: "255, 181, 71",

        environments: [

            {
                type: "Conteúdo",
                title: "Liberdade e responsabilidade",
                description:
                    "Estudos sobre valores, escolhas, virtudes e ação moral.",
                icon: "⚖",
                rgb: "255, 196, 87",
                link: "#"
            },

            {
                type: "Atividades",
                title: "Dilemas e decisões éticas",
                description:
                    "Situações-problema para análise, escolha e argumentação.",
                icon: "✓",
                rgb: "255, 140, 93",
                link: "#"
            },

            {
                type: "Vídeos",
                title: "Ética na vida cotidiana",
                description:
                    "Vídeos sobre virtude, dever, liberdade e consequências.",
                icon: "▶",
                rgb: "255, 109, 131",
                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Pensadores da Ética",
                description:
                    "Textos de Aristóteles, Kant, Mill e outros filósofos.",
                icon: "✦",
                rgb: "168, 131, 255",
                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "Como devemos agir?",
                description:
                    "Discussões sobre decisões, valores e responsabilidade social.",
                icon: "◌",
                rgb: "102, 217, 188",
                link: "#"
            }

        ]
    },


    {
        id: "filosofia-politica",

        title: "Filosofia Política",

        subtitle:
            "Poder, Estado, justiça, democracia, cidadania, direitos e organização da sociedade.",

        symbol: "▥",

        rgb: "255, 97, 107",

        environments: [

            {
                type: "Conteúdo",
                title: "Poder, Estado e sociedade",
                description:
                    "Conceitos de poder, justiça, cidadania e organização política.",
                icon: "▥",
                rgb: "255, 115, 124",
                link: "#"
            },

            {
                type: "Atividades",
                title: "Cidadania e participação",
                description:
                    "Atividades sobre direitos, deveres, democracia e vida coletiva.",
                icon: "✓",
                rgb: "255, 156, 95",
                link: "#"
            },

            {
                type: "Vídeos",
                title: "Ideias que organizaram sociedades",
                description:
                    "Aulas sobre contratualismo, democracia, poder e liberdade.",
                icon: "▶",
                rgb: "199, 125, 255",
                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Clássicos da Filosofia Política",
                description:
                    "Leituras de Platão, Hobbes, Locke, Rousseau, Marx e Arendt.",
                icon: "✦",
                rgb: "90, 183, 255",
                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "O que torna uma sociedade justa?",
                description:
                    "Debates sobre desigualdade, direitos, justiça e democracia.",
                icon: "◌",
                rgb: "99, 219, 193",
                link: "#"
            }

        ]
    },


    /* =====================================================
       FILOSOFIA DA CIÊNCIA

       Cada espaço recebe somente uma imagem na capa:

       Espaço 01 = img01.jpg
       Espaço 02 = img02.jpg
       Espaço 03 = img03.jpg
       Espaço 04 = img04.jpg
       Espaço 05 = img05.jpg
    ====================================================== */

    {
        id: "filosofia-ciencia",

        title: "Filosofia da Ciência",

        subtitle:
            "Método científico, hipóteses, evidências, paradigmas, tecnologia e limites da ciência.",

        symbol: "✧",

        rgb: "70, 213, 194",

        environments: [

            {
                type: "Conteúdo",
                title: "Conhecimento e investigação científica",
                description:
                    "Conceitos sobre método, hipótese, evidência e explicação científica.",
                icon: "✧",
                rgb: "84, 226, 207",

                image: "img01.jpg",

                link: "#"
            },

            {
                type: "Atividades",
                title: "Hipóteses, testes e evidências",
                description:
                    "Atividades sobre pesquisa, observação e validação científica.",
                icon: "✓",
                rgb: "100, 169, 255",

                image: "img02.jpg",

                link: "#"
            },

            {
                type: "Vídeos",
                title: "Como a ciência constrói explicações",
                description:
                    "Aulas sobre revoluções científicas, paradigmas e descobertas.",
                icon: "▶",
                rgb: "158, 124, 255",

                image: "img03.jpg",

                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Ciência, história e sociedade",
                description:
                    "Materiais sobre Popper, Kuhn, Bachelard e epistemologia.",
                icon: "✦",
                rgb: "255, 194, 88",

                image: "img04.jpg",

                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "A ciência possui limites?",
                description:
                    "Discussões sobre ciência, tecnologia, ética e sociedade.",
                icon: "◌",
                rgb: "255, 119, 142",

                image: "img05.jpg",

                link: "#"
            }

        ]
    },


    {
        id: "estetica",

        title: "Estética",

        subtitle:
            "Arte, beleza, sensibilidade, criação, interpretação e experiência estética.",

        symbol: "◐",

        rgb: "236, 114, 216",

        environments: [

            {
                type: "Conteúdo",
                title: "Arte, beleza e sensibilidade",
                description:
                    "Conceitos de beleza, criação artística e experiência estética.",
                icon: "◐",
                rgb: "241, 132, 222",
                link: "#"
            },

            {
                type: "Atividades",
                title: "Leitura e interpretação de obras",
                description:
                    "Atividades de observação, análise e produção estética.",
                icon: "✓",
                rgb: "183, 131, 255",
                link: "#"
            },

            {
                type: "Vídeos",
                title: "Filosofia, arte e cultura",
                description:
                    "Videoaulas sobre arte, gosto, beleza e indústria cultural.",
                icon: "▶",
                rgb: "255, 126, 136",
                link: "#"
            },

            {
                type: "Biblioteca — Saiba Mais",
                title: "Pensamento estético",
                description:
                    "Textos, obras e materiais para aprofundamento filosófico.",
                icon: "✦",
                rgb: "255, 191, 97",
                link: "#"
            },

            {
                type: "Fórum de Debates",
                title: "O que transforma algo em arte?",
                description:
                    "Espaço para discutir beleza, cultura, criação e interpretação.",
                icon: "◌",
                rgb: "87, 216, 197",
                link: "#"
            }

        ]
    }

];


/* =========================================================
   ELEMENTOS
========================================================= */

const topbar =
    document.getElementById("topbar");

const catalog =
    document.getElementById("catalogo");

const searchArea =
    document.getElementById("searchArea");

const searchButton =
    document.getElementById("searchButton");

const searchInput =
    document.getElementById("searchInput");

const emptySearch =
    document.getElementById("emptySearch");

const clearSearchButton =
    document.getElementById("clearSearchButton");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNavigation =
    document.getElementById("mainNavigation");

const mobileMenuOverlay =
    document.getElementById("mobileMenuOverlay");

const exploreButton =
    document.getElementById("exploreButton");

const finalExploreButton =
    document.getElementById("finalExploreButton");

const guideButton =
    document.getElementById("guideButton");

const contentModal =
    document.getElementById("contentModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalCloseButton =
    document.getElementById("modalCloseButton");

const modalBackButton =
    document.getElementById("modalBackButton");

const modalAccessButton =
    document.getElementById("modalAccessButton");

const modalBanner =
    document.getElementById("modalBanner");

const modalSymbol =
    document.getElementById("modalSymbol");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalSubtitle =
    document.getElementById("modalSubtitle");

const modalDescription =
    document.getElementById("modalDescription");

const guideModal =
    document.getElementById("guideModal");

const guideModalOverlay =
    document.getElementById("guideModalOverlay");

const guideCloseButton =
    document.getElementById("guideCloseButton");

const guideConfirmButton =
    document.getElementById("guideConfirmButton");

const toast =
    document.getElementById("toast");

const backToTop =
    document.getElementById("backToTop");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   FUNÇÕES AUXILIARES
========================================================= */

function normalizeText(text) {

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


function scrollToCatalog() {

    const firstSection =
        document.getElementById("mito-filosofia");

    if (!firstSection) {
        return;
    }

    firstSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


function updateBodyScroll() {

    const contentModalOpen =
        contentModal.classList.contains("active");

    const guideModalOpen =
        guideModal.classList.contains("active");

    document.body.classList.toggle(
        "modal-open",
        contentModalOpen || guideModalOpen
    );

}


/* =========================================================
   CRIAÇÃO DOS CARTÕES
========================================================= */

function createCard(category, environment, index) {

    const card =
        document.createElement("a");

    card.href =
        environment.link;

    card.dataset.search =
        normalizeText(`
            ${category.title}
            ${category.subtitle}
            ${environment.type}
            ${environment.title}
            ${environment.description}
        `);

    card.style.setProperty(
        "--category-rgb",
        category.rgb
    );

    card.style.setProperty(
        "--card-rgb",
        environment.rgb
    );

    card.setAttribute(
        "aria-label",
        `${environment.type}: ${environment.title}`
    );


    const isScienceImageCard =
        category.id === "filosofia-ciencia" &&
        environment.image;


    /*
       FILOSOFIA DA CIÊNCIA:
       MOSTRA SOMENTE A IMAGEM NA CAPA
    */

    if (isScienceImageCard) {

        card.className =
            "content-card image-only-card";

        card.innerHTML = `

            <img
                class="image-only-cover"
                src="${environment.image}"
                alt="${environment.title}"
                loading="lazy"
            >

        `;

    } else {

        /*
           DEMAIS CATEGORIAS:
           MANTÉM TODAS AS INFORMAÇÕES
        */

        card.className =
            "content-card";

        card.innerHTML = `

            <div class="card-top">

                <span class="card-label">
                    PHILOFLIX
                </span>

                <span class="card-number">
                    ${String(index + 1).padStart(2, "0")}
                </span>

            </div>


            <span class="card-disabled-badge">
                LINK EM BREVE
            </span>


            <span
                class="card-large-icon"
                aria-hidden="true"
            >
                ${environment.icon}
            </span>


            <div class="card-content">

                <span class="card-type">
                    ${environment.type}
                </span>

                <h3>
                    ${environment.title}
                </h3>

                <p>
                    ${environment.description}
                </p>

            </div>

        `;

    }


    card.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            openContentModal(
                category,
                environment
            );

        }
    );


    return card;

}


/* =========================================================
   CRIAÇÃO DAS CATEGORIAS
========================================================= */

function createCategorySection(category) {

    const section =
        document.createElement("section");

    section.className =
        "content-section";

    section.id =
        category.id;

    section.dataset.search =
        normalizeText(
            `${category.title} ${category.subtitle}`
        );

    section.style.setProperty(
        "--category-rgb",
        category.rgb
    );


    const heading =
        document.createElement("div");

    heading.className =
        "section-heading";

    heading.innerHTML = `

        <div class="section-title-area">

            <span
                class="section-symbol"
                aria-hidden="true"
            >
                ${category.symbol}
            </span>

            <div>

                <h2>
                    ${category.title}
                </h2>

                <p>
                    ${category.subtitle}
                </p>

            </div>

        </div>


        <div
            class="section-controls"
            aria-label="Controles da categoria"
        >

            <button
                class="rail-button rail-left"
                type="button"
                aria-label="Mover cartões para a esquerda"
            >
                ‹
            </button>

            <button
                class="rail-button rail-right"
                type="button"
                aria-label="Mover cartões para a direita"
            >
                ›
            </button>

        </div>

    `;


    const rail =
        document.createElement("div");

    rail.className =
        "cards-rail";


    category.environments.forEach(
        function (environment, index) {

            const card =
                createCard(
                    category,
                    environment,
                    index
                );

            rail.appendChild(card);

        }
    );


    section.appendChild(heading);
    section.appendChild(rail);


    const leftButton =
        heading.querySelector(".rail-left");

    const rightButton =
        heading.querySelector(".rail-right");


    leftButton.addEventListener(
        "click",
        function () {

            rail.scrollBy({
                left: -rail.clientWidth * 0.8,
                behavior: "smooth"
            });

        }
    );


    rightButton.addEventListener(
        "click",
        function () {

            rail.scrollBy({
                left: rail.clientWidth * 0.8,
                behavior: "smooth"
            });

        }
    );


    return section;

}


/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function renderCatalog() {

    catalog.innerHTML = "";

    catalogData.forEach(
        function (category) {

            const section =
                createCategorySection(category);

            catalog.appendChild(section);

        }
    );

}


/* =========================================================
   JANELA DOS CARTÕES
========================================================= */

function openContentModal(category, environment) {

    modalBanner.style.setProperty(
        "--modal-rgb",
        environment.rgb
    );

    modalSymbol.textContent =
        environment.icon;

    modalCategory.textContent =
        `${category.title.toUpperCase()} • ${environment.type.toUpperCase()}`;

    modalTitle.textContent =
        environment.title;

    modalSubtitle.textContent =
        category.subtitle;

    modalDescription.textContent =
        environment.description +
        " Este espaço está preparado para receber o endereço do conteúdo quando ele estiver disponível.";


    contentModal.classList.add("active");

    contentModal.setAttribute(
        "aria-hidden",
        "false"
    );

    updateBodyScroll();


    window.setTimeout(
        function () {

            modalCloseButton.focus();

        },
        100
    );

}


function closeContentModal() {

    contentModal.classList.remove("active");

    contentModal.setAttribute(
        "aria-hidden",
        "true"
    );

    updateBodyScroll();

}


modalCloseButton.addEventListener(
    "click",
    closeContentModal
);


modalBackButton.addEventListener(
    "click",
    closeContentModal
);


modalOverlay.addEventListener(
    "click",
    closeContentModal
);


/* =========================================================
   GUIA
========================================================= */

function openGuideModal() {

    guideModal.classList.add("active");

    guideModal.setAttribute(
        "aria-hidden",
        "false"
    );

    updateBodyScroll();

}


function closeGuideModal() {

    guideModal.classList.remove("active");

    guideModal.setAttribute(
        "aria-hidden",
        "true"
    );

    updateBodyScroll();

}


guideButton.addEventListener(
    "click",
    openGuideModal
);


guideCloseButton.addEventListener(
    "click",
    closeGuideModal
);


guideConfirmButton.addEventListener(
    "click",
    closeGuideModal
);


guideModalOverlay.addEventListener(
    "click",
    closeGuideModal
);


/* =========================================================
   AVISO
========================================================= */

let toastTimer;


function showToast() {

    window.clearTimeout(toastTimer);

    toast.classList.add("visible");


    toastTimer =
        window.setTimeout(
            function () {

                toast.classList.remove("visible");

            },
            3500
        );

}


modalAccessButton.addEventListener(
    "click",
    showToast
);


/* =========================================================
   PESQUISA
========================================================= */

function openSearch() {

    searchArea.classList.add("active");

    window.setTimeout(
        function () {

            searchInput.focus();

        },
        100
    );

}


function closeSearchWhenEmpty() {

    if (
        searchInput.value.trim() === ""
    ) {

        searchArea.classList.remove("active");

    }

}


searchButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        openSearch();

    }
);


searchArea.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

    }
);


document.addEventListener(
    "click",
    closeSearchWhenEmpty
);


function filterCatalog(searchTerm) {

    const normalizedTerm =
        normalizeText(searchTerm);

    const sections =
        catalog.querySelectorAll(
            ".content-section"
        );

    let totalVisibleCards = 0;


    sections.forEach(
        function (section) {

            const cards =
                section.querySelectorAll(
                    ".content-card"
                );

            let visibleCardsInSection = 0;


            cards.forEach(
                function (card) {

                    const cardMatches =
                        normalizedTerm === "" ||
                        card.dataset.search.includes(
                            normalizedTerm
                        );

                    card.style.display =
                        cardMatches
                            ? card.classList.contains("image-only-card")
                                ? "block"
                                : "flex"
                            : "none";


                    if (cardMatches) {

                        visibleCardsInSection++;
                        totalVisibleCards++;

                    }

                }
            );


            const categoryMatches =
                normalizedTerm === "" ||
                section.dataset.search.includes(
                    normalizedTerm
                );


            section.classList.toggle(
                "hidden-by-search",
                visibleCardsInSection === 0 &&
                !categoryMatches
            );

        }
    );


    emptySearch.classList.toggle(
        "visible",
        normalizedTerm !== "" &&
        totalVisibleCards === 0
    );

}


searchInput.addEventListener(
    "input",
    function () {

        filterCatalog(
            searchInput.value
        );

    }
);


function clearSearch() {

    searchInput.value = "";

    filterCatalog("");

    searchArea.classList.remove("active");

    searchInput.blur();

    scrollToCatalog();

}


clearSearchButton.addEventListener(
    "click",
    clearSearch
);


/* =========================================================
   MENU MÓVEL
========================================================= */

function openMobileMenu() {

    mobileMenuButton.classList.add(
        "active"
    );

    mainNavigation.classList.add(
        "active"
    );

    mobileMenuOverlay.classList.add(
        "active"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

}


function closeMobileMenu() {

    mobileMenuButton.classList.remove(
        "active"
    );

    mainNavigation.classList.remove(
        "active"
    );

    mobileMenuOverlay.classList.remove(
        "active"
    );

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

}


function toggleMobileMenu() {

    const menuIsOpen =
        mainNavigation.classList.contains(
            "active"
        );

    if (menuIsOpen) {

        closeMobileMenu();

    } else {

        openMobileMenu();

    }

}


mobileMenuButton.addEventListener(
    "click",
    toggleMobileMenu
);


mobileMenuOverlay.addEventListener(
    "click",
    closeMobileMenu
);


mainNavigation
    .querySelectorAll("a")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        }
    );


/* =========================================================
   ROLAGEM
========================================================= */

function handlePageScroll() {

    topbar.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );

    backToTop.classList.toggle(
        "visible",
        window.scrollY > 650
    );

}


window.addEventListener(
    "scroll",
    handlePageScroll,
    {
        passive: true
    }
);


backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


exploreButton.addEventListener(
    "click",
    scrollToCatalog
);


finalExploreButton.addEventListener(
    "click",
    scrollToCatalog
);


/* =========================================================
   TECLADO
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        if (
            contentModal.classList.contains(
                "active"
            )
        ) {

            closeContentModal();
            return;

        }


        if (
            guideModal.classList.contains(
                "active"
            )
        ) {

            closeGuideModal();
            return;

        }


        if (
            mainNavigation.classList.contains(
                "active"
            )
        ) {

            closeMobileMenu();
            return;

        }


        if (
            searchArea.classList.contains(
                "active"
            )
        ) {

            clearSearch();

        }

    }
);


window.addEventListener(
    "resize",
    function () {

        if (window.innerWidth > 980) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function initializePlatform() {

    renderCatalog();

    currentYear.textContent =
        new Date().getFullYear();

    handlePageScroll();

}


document.addEventListener(
    "DOMContentLoaded",
    initializePlatform
);