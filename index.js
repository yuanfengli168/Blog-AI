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


/**
 * Reading Function, read ./content-md-files/contents.md, return the inner html for 
 *  <div class="blog-content"></div>
 * @returns {string} innerHTML content for  <div class="blog-content"></div>
 * https://chat.deepseek.com/a/chat/s/55a96570-a47c-4196-83ee-70af895f5d67, I used marked to do it, but it looks way differnt then
 * what I expected. 
 * 
 * Learned: Promise, fetch, marked. .text(), etc...
 */
function readMD() {
    const response = fetch("./content-md-files/contents.md").then(
        res => {
            return res.text();
        }
    ).then(data => {
        // console.log(data);
        const htmlContent = marked.parse(data);
        console.log(htmlContent);

        // 将 HTML 内容插入到页面中
        document.getElementById('output').innerHTML = htmlContent;
    });
}

readMD();