const addtoLocalStorage=()=>{
   
    const getUser=document.getElementById("user_id")
    const user=getUser.value;
    const valueInput = document.getElementById("user_value");
    const value=valueInput.value;

    localStorage.setItem(user,value);
    getUser.value='';
    valueInput.value='';

}