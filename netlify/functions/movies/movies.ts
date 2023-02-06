import { Handler } from '@netlify/functions';
import movies from '../../models/movies';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


export const handler: Handler = async (event) => {
  const {Genre_id} = (event.queryStringParameters) as any;
  
  if(!!Genre_id){
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(movies.filter((movie) => movie.Genre_id === Number(Genre_id))),
    }
  }
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(movies),
  }
}
