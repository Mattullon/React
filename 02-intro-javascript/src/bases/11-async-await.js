
//  const getImagenPromesa = ()=>
//   new Promise(  resolve => resolve('http:asadadds.com'))
    
 
 //getImagenPromesa().then(console.log)

 //async al ponerle async automaticamente podes 
 // usar las propiedades de una promesa 
  
 
 const getImagen = async()=>{
    try {
        const apiKey = 'FvdTNoVLGsOr3ns63QjxVxvDuqLotKo8'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        
        
        const {data} = await resp.json();
        const {url}= data.images.original;
        console.log(resp)
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
        
    } catch (error) {
         console.warn('no hay internet ')
            }
    }
getImagen()