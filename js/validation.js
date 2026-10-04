/* =========================================
   Nova Creative - Contact Form Validation
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        clearErrors();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;

        if (name === "") {
            showError("name", "Please enter your name.");
            isValid = false;
        }

        if (email === "") {
            showError("email", "Please enter your email.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        }

        if (subject === "") {
            showError("subject", "Please enter a subject.");
            isValid = false;
        }

        if (message === "") {
            showError("message", "Please enter your message.");
            isValid = false;
        }

        const formMessage = document.getElementById("formMessage");

        if (!isValid) {
            formMessage.textContent = "Please fix the errors above.";
            return;
        }

        formMessage.textContent =
            "Message sent successfully! This is a demo form.";

        form.reset();
    });
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}Error`);

    field.parentElement.classList.add("has-error");
    error.textContent = message;
}

function clearErrors() {
    document.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("has-error");
    });

    document.querySelectorAll(".error-message").forEach((error) => {
        error.textContent = "";
    });

    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
        formMessage.textContent = "";
    }
}
