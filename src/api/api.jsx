import HTTPService from "../configs/configs";

export const getData = async () => {
  const response = await HTTPService.get("usersData");
  return response.data;
};

export const paginationData = async (feildset, pageNumber, dataNumber) => {
  const response = await HTTPService.get(
    `${feildset}?p=${pageNumber}&l=${dataNumber}`
  );
  return response.data;
};

export const searchData = async (feildset, dataSearch) => {
  const response = await HTTPService.get(`${feildset}?search=${dataSearch}`);
  return response.data;
};

export const editData = async (feildset, id, object) => {
  const response = await HTTPService.put(`${feildset}/${id}`, object);
  return response.data;
};
