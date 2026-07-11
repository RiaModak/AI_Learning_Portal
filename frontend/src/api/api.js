import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api/"
});

export const getUsers = () =>
    API.get("users/");

export const getDashboardStats = () =>
    API.get("dashboard-stats/");

export const createUser = (data) =>
    API.post("users/", data);

export const getUser = (id) =>
    API.get(`users/${id}/`);

export const updateUser = (id, data) =>
    API.put(`users/${id}/`, data);

export const deleteUser = (id) =>
    API.delete(`users/${id}/`);

export const getCourses = () =>
    API.get("courses/");

export const createCourse = (data) =>
    API.post("courses/", data);

export const deleteCourse = (id) =>
    API.delete(`courses/${id}/`);

export const updateCourse = (id, data) =>
    API.put(`courses/update/${id}/`, data);

export const getTeachers = () =>
    API.get("teachers/");

export const assignTeacher = (data) =>
    API.post("assign-teacher/", data);

export const removeTeacher = (data) =>
    API.post("remove-teacher/", data);