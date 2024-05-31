import axios from 'axios';

export const fetchUserProjects = (userID) => {
    return axios.get(`${import.meta.env.VITE_API_USER_URI}/user-project/${userID}`);
};

export const fetchLatestProjects = (userID) => {
    return axios.get(`${import.meta.env.VITE_API_PROJECT_URI}/latest/${userID}`);
};

export const fetchProjects = () => {
    return axios.get(`${import.meta.env.VITE_API_PROJECT_URI}`);
};

export const forkProject = (userID, projectID, data) => {
    return axios.post(`${import.meta.env.VITE_API_FORK_URI}/fork-project/${userID}/${projectID}`, data);
};

export const fetchProject = (projectID) => {
    return axios.get(`${import.meta.env.VITE_API_PROJECT_URI}/get-project/${projectID}`);
};

export const fetchChapters = (projectID) => {
    return axios.get(`${import.meta.env.VITE_API_CHAPTER_URI}/project-chapters/${projectID}`);
};

export const fetchUserChapters = (forkID, userID) => {
    return axios.get(`${import.meta.env.VITE_API_CHAPTER_URI}/forked-chapters/${forkID}/${userID}`);
};

export const postChapter = (forkID, data) => {
    return axios.post(`${import.meta.env.VITE_API_CHAPTER_URI}/add-chapter/${forkID}`, data);
};

export const postProject = (data) => {
    return axios.post(`${import.meta.env.VITE_API_PROJECT_URI}/add-project`, data);
};

export const fetchChapter = (chapterID) => {
    return axios.get(`${import.meta.env.VITE_API_CHAPTER_URI}/get-chapter/${chapterID}`);
};

export const fetchArtists = () => {
    return axios.get(`${import.meta.env.VITE_API_ARTIST_URI}`);
};

export const getForkedProject = (userID) => {
    return axios.get(`${import.meta.env.VITE_API_USER_URI}/forkedProjects/${userID}`);
};

export const getFork = (forkID) => {
    return axios.get(`${import.meta.env.VITE_API_FORK_URI}/get-fork/${forkID}`);
};

export const pullChapter = (data) => {
    return axios.post(`${import.meta.env.VITE_API_PULL_URI}/pull`, data);
};

export const checkForkDone = (projectID, userID) => {
    return axios.get(`${import.meta.env.VITE_API_FORK_URI}/check-fork/${userID}/${projectID}`)
}

export const getOneUser = (userID) => {
    return axios.get(`${import.meta.env.VITE_API_USER_URI}/getUser/${userID}`)
}

export const fetchApprovalRequests = (userID) => {
    return axios.get(`${import.meta.env.VITE_API_PULL_URI}/requests/${userID}`)
}

export const setProfileImage = (userID, file) => {
    const formData = new FormData()
    formData.append('profile-image', file)
    return axios.patch(`${import.meta.env.VITE_API_FILE_URI}/set-profile-image/${userID}`, formData)
}

export const getRequest = (requestID) => {
    return axios.get(`${import.meta.env.VITE_API_PULL_URI}/get-pull/${requestID}`);
};

export const approveChapter = (chapterID) => {
    return axios.patch(`${import.meta.env.VITE_API_CHAPTER_URI}/approve-chapter/${chapterID}`);
}

export const clearPull = (requestID) => {
    return axios.delete(`${import.meta.env.VITE_API_PULL_URI}/clear-pull/${requestID}`);
};

export const fetchDataFromGoogleAuth = () => {
    return axios.get(`${import.meta.env.VITE_API_GOOGLE_URI}/google/session`, {
        withCredentials: true
    });
};

export const updateUser = (data, userID) => {
    return axios.patch(`${import.meta.env.VITE_API_USER_URI}/update/${userID}`, data)
}

export const postChapterByOwner = (projectID, data) => {
    return axios.post(`${import.meta.env.VITE_API_CHAPTER_URI}/post-chapter/${projectID}`, data)
}