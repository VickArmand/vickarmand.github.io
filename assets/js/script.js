function hideNav()
{
    const main = document.getElementById('main');
    const nav = document.getElementById('nav');
    if(nav.style.display == "block")
    {
        nav.style.display = "none";
        main.style.marginLeft = "0";
    }
    else
    {
        nav.style.display = "block";
        main.style.marginLeft = "150px";
    }
}