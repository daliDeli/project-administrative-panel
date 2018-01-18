import axios from "axios";
import { BASE_URL } from "../constants";

class CommunicationService {

  fetchCandidatesReports(successfulResponse, failedResponse) {
    axios.get(`${BASE_URL}reports`)
      .then(response => {

        successfulResponse(response.data);
      })
      .catch(error => {
        failedResponse(error);
      });
  }

  deleteCandidatesReports(reportId, deleteHandler, errorHandler) {
    axios.delete(`${BASE_URL}reports/${reportId}`)
        .then(response => deleteHandler(response))
        .catch(error => errorHandler(error));
    }
  }


export const communicationService = new CommunicationService();