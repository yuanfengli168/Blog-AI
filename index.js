// collapsible is opened in default, but once clicked. the classname opened will be switch to closed
const arrOfCollapsibles = document.querySelectorAll('.collapsible');
Array.from(arrOfCollapsibles).forEach(ele => {
    ele.onclick = function () {
        if (ele.classList.contains("opened")) {
            ele.classList.remove("opened");
            ele.classList.add("closed");
        }
        else {
            ele.classList.remove("closed");
            ele.classList.add("opened");
        }
    }
})