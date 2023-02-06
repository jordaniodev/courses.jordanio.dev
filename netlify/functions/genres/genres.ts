import { Handler } from '@netlify/functions';
import genres from '../../models/genres';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};
export const handler: Handler = async (event, context) => {
  console.log(event.path)
  if (event.path === '/.netlify/functions/genres/' || event.path === '/.netlify/functions/genres') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(genres),
    }
  }
  let fullPathArray = event.path.split('/');
  let id = fullPathArray[fullPathArray.length - 1];
  const [filteredGenres] = genres.filter((genre) => genre.id === Number(id))
  
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(filteredGenres),
  }
}
