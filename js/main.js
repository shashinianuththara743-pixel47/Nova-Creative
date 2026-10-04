/* =========================================
   Nova Creative - Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupDarkMode();

    if (document.getElementById("projectGrid")) {
        loadProjects();
    }
});

/* Mobile navigation */
function setupNavigation() {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (!menuButton || !navMenu) return;

    menuButton.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}

/* Dark mode with localStorage */
function setupDarkMode() {
    const themeButton = document.getElementById("themeButton");

    if (!themeButton) return;

    const savedTheme = localStorage.getItem("novaTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        localStorage.setItem("novaTheme", isDark ? "dark" : "light");
        themeButton.textContent = isDark ? "☀️" : "🌙";
    });
}

/* Dynamic portfolio content from JSON */
async function loadProjects() {
    const projectGrid = document.getElementById("projectGrid");

    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Could not load project data.");
        }

        const projects = await response.json();

        renderProjects(projects);

        document.querySelectorAll(".filter-button").forEach((button) => {
            button.addEventListener("click", () => {
                document.querySelectorAll(".filter-button").forEach((item) => {
                    item.classList.remove("active");
                });

                button.classList.add("active");

                const selectedCategory = button.dataset.filter;

                const filteredProjects =
                    selectedCategory === "All"
                        ? projects
                        : projects.filter(
                              (project) => project.category === selectedCategory
                          );

                renderProjects(filteredProjects);
            });
        });
    } catch (error) {
        projectGrid.innerHTML = `
            <p class="loading">
                Unable to load projects. If you opened the HTML file directly,
                run the project with a local server.
            </p>
        `;
        console.error(error);
    }
}

function renderProjects(projects) {
    const projectGrid = document.getElementById("projectGrid");

    if (projects.length === 0) {
        projectGrid.innerHTML = "<p class='loading'>No projects found.</p>";
        return;
    }

    projectGrid.innerHTML = projects.map((project) => `
        <article class="project-card">
            <div class="project-image">
                ${
                    project.image
                        ? `<img src="${project.image}" alt="${project.title} project preview">`
                        : `<span class="project-placeholder">✦</span>`
                }
            </div>
            <span class="project-category">${project.category}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </article>
    `).join("");
}
