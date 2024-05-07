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

export const forkProject = (userID, projectID) => {
    return axios.post(`http://localhost:8080/project/fork-project/${userID}/${projectID}`);
};

export const fetchProject = (projectID) => {
    return axios.get(`https://renaissance-server.onrender.com/project/get-project/${projectID}`);
};

export const fetchChapters = (projectID) => {
    return axios.get(`https://renaissance-server.onrender.com/chapter/project-chapters/${projectID}`);
};

export const postChapter = (projectID, data) => {
    return axios.post(`http://localhost:8080/chapter/add-chapter/${projectID}`, data);
};

export const postProject = (data) => {
    return axios.post('https://renaissance-server.onrender.com/project/add-project', data);
};

export const fetchChapter = (chapterID) => {
    return axios.get(`http://localhost:8080/chapter/get-chapter/${chapterID}`);
};

export const fetchArtists = () => {
    return axios.get("https://renaissance-server.onrender.com/artist");
};

export const getForkedProject = (userID) => {
    return axios.get(`http://localhost:8080/user/forkedProjects/${userID}`);
};


