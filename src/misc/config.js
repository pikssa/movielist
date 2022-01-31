const  API_BASE_URL='https://api.tvmaze.com';

export async function  apiGet(queryString){
var resultSet=await fetch(`${API_BASE_URL}${queryString}`).then((response)=>{ 
console.log(response);    
return response.json();
})
return resultSet;
}














