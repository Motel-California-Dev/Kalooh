import axios from '../../config/axios';

export async function getNotes({lati, long}){
    return await axios
      .get("posts", {
        params: {
          lati,
          long
        }
      })
      .then(res => {
        console.log('Note retrieval successful! Fetched ' + res.data.length + ' notes\n');
        return res.data;
      })
      .catch(err => {
        console.log(`${JSON.stringify(err)}`);
      });
}

export async function getNote(id){
  return await axios.get('posts/' + id)
    .then(res => {
      console.log('Note retrieval successful! Fetched note with id:' + res.data[0].id + '\n');
      return res.data[0];
    })
    .catch(err => {
      console.log(`${JSON.stringify(err)}`);
    });
}

export async function postNote(post){
  await axios.post('posts', post)
    .then(res => {
      console.log(JSON.stringify(res));
    })
    .catch(err => {
      console.log(JSON.stringify(err));
    }
  );
}