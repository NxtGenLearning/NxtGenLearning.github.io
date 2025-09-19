
document.addEventListener('DOMContentLoaded', function(){
  // Add hover delay: show submenu on mouseenter, hide on mouseleave after delay
  const menuItems = document.querySelectorAll('.nav li');
  menuItems.forEach(item => {
    let timer;
    item.addEventListener('mouseenter', ()=>{
      clearTimeout(timer);
      // close sibling submenus for cleanliness
      const siblings = Array.from(item.parentElement.children).filter(ch => ch !== item);
      siblings.forEach(s => s.classList.remove('show-submenu'));
      item.classList.add('show-submenu');
    });
    item.addEventListener('mouseleave', ()=>{
      timer = setTimeout(()=>{ item.classList.remove('show-submenu'); }, 220);
    });
  });
  // Also hide submenu if clicked outside
  document.addEventListener('click', (e)=>{
    if(!e.target.closest('.nav')){
      document.querySelectorAll('.nav li.show-submenu').forEach(i=>i.classList.remove('show-submenu'));
    }
  });
});
