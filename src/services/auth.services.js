import customAxios from "../axios/axios";

export async function registerUser(params) {

  const url = '/registerUser';

  const response = await customAxios.post(url, params);

  return response;

}