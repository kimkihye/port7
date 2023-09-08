const panels = document.querySelector(".panels");
const panels_li = panels.querySelectorAll("li");
const btn = document.querySelectorAll(".btn li");

btn.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();

        for(let el of btn) el.classList.remove("on");
        btn[index].classList.add("on");

        panels.style.marginLeft = `${-100 * index}%`;
    })
})