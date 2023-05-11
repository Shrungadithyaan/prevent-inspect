//prevent right click

document.oncontextmenu = () =>{
    alert("Don't try right click")
    return false
}

document.onkeydown = e => {
    //prevent f12 key
    if(e.key == "f12"){
        alert("Don't try to inspect element") 
        return false
    }

    //prevent showing page source by ctrl + u
    if(e.ctrlKey && e.key == "u"){
        alert("Don't try to view page sources") 
        return false
    }

    //prevent copying anything from page 
    if(e.ctrlKey && e.key == "c"){
        alert("Don't try to copy page element") 
        return false
    }

    //prevent paste anything from other source 
    if(e.ctrlKey && e.key == "v"){
        alert("Don't try to paste anything to page ") 
        return false
    }
}