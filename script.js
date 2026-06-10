// Espera a que el DOM este listo antes de registrar interacciones.
document.addEventListener('DOMContentLoaded', () => {
    initSuccessToast();
    initSidebarNavigation();
});

/**
 * Muestra automaticamente el toast de exito y lo oculta despues de unos segundos.
 */
function initSuccessToast() {
    const toast = document.getElementById('success-toast');
    const closeButton = document.getElementById('close-toast-button');

    if (!toast) {
        return;
    }

    setTimeout(() => {
        showToast(toast);
        scheduleToastHide(toast);
    }, 2000);

    if (closeButton) {
        closeButton.addEventListener('click', () => hideToast(toast, false));
    }
}

/**
 * Mantiene listas las interacciones del menu lateral.
 */
function initSidebarNavigation() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('bg-secondary-container')) {
                // Demo visual: actualmente no se bloquea la navegacion del enlace.
            }
        });
    });
}

/**
 * Hace visible el toast manteniendo las clases originales.
 */
function showToast(toast) {
    toast.classList.remove('hidden');
}

/**
 * Programa el cierre automatico del toast luego de mostrarse.
 */
function scheduleToastHide(toast) {
    setTimeout(() => {
        hideToast(toast);
    }, 5000);
}

/**
 * Oculta el toast replicando la transicion existente.
 */
function hideToast(toast, useTransition = true) {
    if (!useTransition) {
        toast.classList.add('hidden');
        return;
    }

    toast.classList.add('opacity-0');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 500);
}
