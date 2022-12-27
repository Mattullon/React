 

//  const getImagenPromesa = ()=>
//   new Promise(  resolve => resolve('http:asadadds.com'))
    
 
 //getImagenPromesa().then(console.log)

 //async al ponerle async automaticamente podes 
 // usar las propiedades de una promesa 
  
 
    const getImagen = async()=>{
    
        const apiKey = 'FvdTNoVLGsOr3ns63QjxVxvDuqLotKo8'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        
        
        const {data} = await resp.json();
        const {url}= data.images.original;
        console.log(resp)
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
        }
getImagen().then(console.log('HOLA, SI FUNCIONA '))

       

  
  
  
  



//  peticion
//     .then( resp => resp.json())
//     .then( ({data}) => {
//         const {url}= data.images.original
        
//         const img = document.createElement('img');
//         img.src=url;
//         document.body.append(img);

//     })
//     .catch(console.warn);