import { Application } from 'express';
import { environment } from '../../src/environments/environment';
import { ReportService } from '../services/ReportService';

export class ReportResource {
    static endPoints(server: Application): void {
      // get facts
      server.get(environment.api.report.retrieveFacts, (req, res, next) => {
        const factsResult = ReportService.RetrieveQuickFacts();
        res.jsonp(factsResult);
      });
    }
}
