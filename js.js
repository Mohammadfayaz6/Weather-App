async function getgithubdata()
{
    const response= await fetch("https://api.github.com/search/users?q=mohammadfayaz6");
    const data= await response.json();
    
    console.log(data); 
}
getgithubdata();
