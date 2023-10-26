export const createFood=  async (food)=> {
    let newFood= {};
    await fetch('http://localhost:4000/foooods/', {
      method:'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: food.name,
        image: food.image         
    
      })}).then(res=>res.json()).then(data=> {
        newFood = data;
        }
      ).catch(err=>console.log(err));
}

export const updateFood = async (foo, formFood)=>{
    let updated ={};
    await fetch(`http://localhost:4000/foooods/${foo.id}`, {
      method:'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: formFood.name,
        image: formFood.image
      })
    }).then(res => res.json()).then(data=> {
        updated = data;
        }
      ).catch(err=>console.log(err));
  }

  export const deleteFood= async (food)=>{
    let url = `http://localhost:4000/foooods/${food.id}`;
    await fetch(url, {
            method:'DELETE',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              id: food.id
            })
    }).then(res => res.json()).catch(err=>console.log(err));
  }