import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const allPostsUrl = 'https://dev1.humanagencyinc.com/react-tests/api.php/records/quips';

const getAllPosts = async () => {
  const response = await axios.get(allPostsUrl);
  return response.data;
}

export const UseGetAllPosts = () => {
  const {isLoading, data} = useQuery(['allPosts'], getAllPosts);
  return {data, isLoading};
}
