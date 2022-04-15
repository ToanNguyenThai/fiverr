import { createContext, useState } from "react";
import axios from "axios";
import { api_url, tokenByClass } from '../config'

const JobContext = createContext()
function JobProvider({ children }) {
    const [job, setJob] = useState()
    const getJob = async (jobName) => {
        const result = await axios({
            method: 'get',
            url: `${api_url}/jobs/by-name?name=${jobName}`,
            headers: {
                'tokenByClass': tokenByClass
            }
        })
        console.log(result);
    }
    return (
        <JobContext.Provider value={getJob}>
            {children}
        </ JobContext.Provider>
    );
}
export { JobContext, JobProvider }