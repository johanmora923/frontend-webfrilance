export function ExternalRedirect({ to }) {
    window.open(to, '_blank');
    return null;
}
