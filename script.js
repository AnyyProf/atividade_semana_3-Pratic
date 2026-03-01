function bodyLoad()
{
    document.getElementById("bt").style.fontSize = "15px"; 
    document.getElementById("bt").style.backgroundColor="darkred";    
    document.getElementById("bt").style.borderRadius="20px";    
    document.getElementById("bt").style.color="white";    
    document.getElementById("bt").style.padding="10px";    
    document.getElementById("bt").style.borderStyle="none";    

}
function changeTheme()
{
    document.getElementById("body").style.backgroundColor="white";

    document.getElementById("nometitulo").style.backgroundColor="darkorange";

    document.getElementById("anchorTag").style.color="darkblue";

    document.getElementById("anchorTag").style.borderWidth="0px";

}

function changeImageOver()
{
    document.getElementById("img_desenho").src ="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon1.png";
}

function changeImageLeave()
{
    document.getElementById("img_desenho").src ="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";
}

