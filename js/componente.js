const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menu-btn");
const menusItemsDropsDown = document.querySelectorAll(".menu-item-dropdown");

menusItemsDropsDown.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
        const subMenu = menuItem.querySelector(".sub-menu");
        const isActive = menuItem.classList.toggle('sub-menu-toggle');
        if(subMenu) {
            if(isActive) {
                subMenu.style.height = `${subMenu.scrollHeight + 6}px`;
                subMenu.style.padding = "0.5rem";
            }else{
                subMenu.style.padding = "0";
                subMenu.style.height = "0";
            }
        }
        menusItemsDropsDown.forEach((item) => {
            if(item !== menuItem) {
                const  otherSubmenu = item.querySelector(".sub-menu");
                if(otherSubmenu) {
                    item.classList.remove("sub-menu-toggle");
                    otherSubmenu.style.height = "0";
                    otherSubmenu.style.padding = "0"; 
                }
            }
        }) 
    });
});

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle('minimize');

    menusItemsDropsDown.forEach((item) => {
        const subMenu = item.querySelector(".sub-menu");
        if(subMenu) {
            item.classList.remove("sub-menu-toggle");
            subMenu.style.height = "0";
            subMenu.style.padding = "0";
        }
    });
})
