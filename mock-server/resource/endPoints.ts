import { ReportService } from "../services/ReportService";

let retrieveFacts = ReportService
    .RetrieveQuickFacts();

const endPoints = {
  retrieveFacts
};

export default endPoints;
