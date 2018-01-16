import axios from "axios";
import {BASE_URL} from "../constants";

 class CommunicationService {

    fetchCandidatesReports(successfulResponse,failedResponse){
        axios.get(`${BASE_URL}reports`)
        .then(response => {
         
          successfulResponse(response.data);
        })
        .catch(error => {
          failedResponse(error);
        });
    }
 }

 export const communicationService = new CommunicationService();