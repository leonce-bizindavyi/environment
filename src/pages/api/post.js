import executeQuery from '@/Config/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function createPost(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)


    res.status(200).json('Success !')
    try {
        // Exécutez la requête SQL pour insérer une vidéo dans la base de données
        //const rows = await executeQuery('');
    
      } catch (error) {
      }
  } else if(req.method === 'GET') {
    res.status(200).json('Success !')
  }
}