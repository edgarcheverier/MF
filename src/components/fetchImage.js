class TriggerImage {
  static trigger(image){
  return fetch('https://us-central1-moving-free.cloudfunctions.net/storeImage', {
     method: 'POST',
     body: JSON.stringify({
       image: image.base64
     })
   })
   .catch(err => console.log('Error in the fetch: ', err))
   .then(res => res.json())
   .then(parseRes => {
     console.log('parseRES: ', parseRes);
   });
 }
} 

module.exports =  TriggerImage;
