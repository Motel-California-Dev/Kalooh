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
