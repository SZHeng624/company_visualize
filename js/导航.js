(function () {
  // 定义一个局部的选择器函数，避免全局污染
  const localQuerySelector = (sel, ele = document) => ele.querySelectorAll(sel);

  // 获取所有的下拉菜单（即包含 .dropdown-menu 的菜单项）
  const dropdownItems = localQuerySelector(".navbar-item.dropdown");

  dropdownItems.forEach((item) => {
    // 获取每个下拉菜单的子菜单项（例如 科技公司1, 科技公司2, 科技公司3）
    const submenuItems = localQuerySelector(".dropdown-menu li", item);

    // 如果存在子菜单项，则添加事件监听
    if (submenuItems.length > 0) {
      item.addEventListener("mouseover", () => {
        const submenu = item.querySelector(".dropdown-menu");
        submenu.classList.add("show");
      });

      item.addEventListener("mouseout", () => {
        const submenu = item.querySelector(".dropdown-menu");
        submenu.classList.remove("show");
      });
    }
  });
})();

(function () {
  // 定义一个局部的选择器函数，避免全局污染
  const localQuerySelector = (sel, ele = document) => ele.querySelectorAll(sel);

  // 获取所有的下拉菜单（即包含 .dropdown-menu 的菜单项）
  const dropdownItems = localQuerySelector(".navbar-item.dropdown");

  dropdownItems.forEach((item) => {
    // 获取每个下拉菜单的子菜单项（例如 科技公司1, 科技公司2, 科技公司3）
    const submenuItems = localQuerySelector(".dropdown-menu li", item);

    // 如果存在子菜单项，则添加事件监听
    if (submenuItems.length > 0) {
      item.addEventListener("mouseover", () => {
        const submenu = item.querySelector(".dropdown-menu");
        submenu.classList.add("show");
      });

      item.addEventListener("mouseout", () => {
        const submenu = item.querySelector(".dropdown-menu");
        submenu.classList.remove("show");
      });
    }
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".navbar-item");
  let activeItem = null;

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      // 移除所有 navbar-active 类
      navItems.forEach((navItem) => navItem.classList.remove("navbar-active"));
      // 添加 navbar-active 类到当前悬停的 item
      this.classList.add("navbar-active");
      activeItem = this; // 更新 activeItem 为当前悬停的 item
    });
  });

  document.getElementById("header").addEventListener("mouseleave", function () {
    // 移除所有 navbar-active 类
    navItems.forEach((navItem) => navItem.classList.remove("navbar-active"));
    // 如果有 activeItem，则添加 navbar-active 类到最后一个悬停的 item
    if (activeItem) {
      activeItem.classList.add("navbar-active");
    }
  });
});
