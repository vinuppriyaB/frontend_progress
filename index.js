
// const Container = document.getElementsByClassName("contentContainer")[0];
// function showtouser(data)
// {
//     for(let i=0;i<data.length;i++)
//     {
//         const newElement=document.createElement("h3");
//         newElement.textContent =data[i].flag;
//         Container.append(newElement);
//     }
//}
// const url="https://restcountries.eu/rest/v2/all"


const url = "https://jsonplaceholder.typicode.com/posts"
const xhr=new XMLHttpRequest()

xhr.onreadystatechange=function()
{
    if(xhr.readyState===4);
    {
        if(xhr.status===200)
        {
            const data=JSON.parse(xhr.response)
            console.log(data[1])
            for(let i=0;i<data.length;i++)
            {
                if(data[i].userId=="5")
                console.table(data[i])
            }
            
            
           
        }
        else
        {
            console.log("ERROR")
        }
    }
};
xhr.open("GET",url)
xhr.send();


// 