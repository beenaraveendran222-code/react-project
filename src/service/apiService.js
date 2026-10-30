import axiosService from "../api/axiosService";

// save resume API : called by ResumeInput component when finish button clicks
export const saveResumeApi = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}


// view resume API : called by view component when the page loads in browser
export const viewResumeApi = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// view all resumes API : called by Saved component when the page loads in browser
export const getAllResumeApi = async ()=>{
    return await axiosService("GET",`/resumes/`,{})
}

// remove resumes API : called by Saved component when click the delete button
export const deleteAllResumeApi = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

// Update resumes API : called by Edit component when click the update button 
export const editAllResumeApi = async (resumeId,resumeDetails)=>{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

// Download resumes API : called by view component when click the download button 
export const downloadResumeApi = async (resumeDetails)=>{
    return await axiosService("POST",`/downloads`,resumeDetails)
}

// get download resumes API : called by download component when page loads in browser
export const getAllDownloadResumeApi = async ()=>{
    return await axiosService("GET",`/downloads`,{})
}