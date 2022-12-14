import axios from "axios";

const urlProperty = "https://capstone-server-two.herokuapp.com/properties";

export const getAllProperties = async (id, name, location, status) => {
  id = id || "";
  let nameFilter = "";
  let locationFilter = "";
  let statusFilter = "";

  if (name) {
    nameFilter = `&propertyName_like=${name}`;
  }
  if (location) {
    locationFilter += `&location_like=${location}`;
  }
  if (status) {
    statusFilter += `&status_like=${status}`;
  }

  return await axios.get(
    `${urlProperty}/${id}?_sort=id&_order=desc${nameFilter}${locationFilter}${statusFilter}`
  );
};

export const searchProperty = async (search) => {
  return await axios.get(`${urlProperty}?q=${search}`);
};

export const addProperty = async (property) => {
  return await axios.post(urlProperty, property);
};

export const editProperty = async (id, property) => {
  return await axios.put(`${urlProperty}/${id}`, property);
};

export const deleteProperty = async (id) => {
  return await axios.delete(`${urlProperty}/${id}`);
};
