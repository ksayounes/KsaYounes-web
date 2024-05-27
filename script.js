onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  function navigateToSecondPage() {
    window.location.href = 'second-page.html';
}
