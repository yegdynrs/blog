// 设置 tabs 标签
function setTabs() {
    $('.tabs .nav-tabs').on('click', 'a', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const $tab = $(e.target.parentElement.parentElement.parentElement);
        $tab.find('.nav-tabs .active').removeClass('active');
        $tab.find(e.target.parentElement).addClass('active');
        $tab.find('.tab-content .active').removeClass('active');
        $tab.find($(e.target).attr('class')).addClass('active');
        return false;
    });
}

$(function() {
    setTabs();
})

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register("./worker.js")
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

