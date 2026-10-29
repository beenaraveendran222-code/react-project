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