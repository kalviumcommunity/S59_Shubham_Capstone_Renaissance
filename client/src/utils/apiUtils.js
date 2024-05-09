import axios from 'axios';

export const fetchUserProjects = (userID) => {
    return axios.get(`https://renaissance-server.onrender.com/user/user-project/${userID}`);
};

export const fetchLatestProjects = (userID) => {
    return axios.get(`https://renaissance-server.onrender.com/project/latest/${userID}`);
};

export const fetchProjects = () => {
    return axios.get(`https://renaissance-server.onrender.com/project`);
};

export const forkProject = (userID, projectID, data) => {
    return axios.post(`https://renaissance-server.onrender.com/fork/fork-project/${userID}/${projectID}`, data);
};

export const fetchProject = (projectID) => {
    return axios.get(`https://renaissance-server.onrender.com/project/get-project/${projectID}`);
};

export const fetchChapters = (projectID) => {
    return axios.get(`https://renaissance-server.onrender.com/chapter/project-chapters/${projectID}`);
};

export const fetchUserChapters = (projectID, userID) => {
    return axios.get(`https://renaissance-server.onrender.com/chapter/forked-chapters/${projectID}/${userID}`);
};

export const postChapter = (projectID, data) => {
    return axios.post(`https://renaissance-server.onrender.com/add-chapter/${projectID}`, data);
};

export const postProject = (data) => {
    return axios.post('https://renaissance-server.onrender.com/project/add-project', data);
};

export const fetchChapter = (chapterID) => {
    return axios.get(`https://renaissance-server.onrender.com/chapter/get-chapter/${chapterID}`);
};

export const fetchArtists = () => {
    return axios.get("https://renaissance-server.onrender.com/artist");
};

export const getForkedProject = (userID) => {
    return axios.get(`https://renaissance-server.onrender.com/user/forkedProjects/${userID}`);
};

export const pullChapter = (data) => {
    return axios.post('https://renaissance-server.onrender.com/pull/pull', data);
};