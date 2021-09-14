import { RetrieveQuickFacts} from '../../src/app/shared/models';

export class ReportService {

    static RetrieveQuickFacts(): RetrieveQuickFacts {
      let RetrieveQuickFacts: RetrieveQuickFacts = {
        statusFacts: {
          id: 'SH0515' + Math.floor(Math.random() * 100) + 1,
          tier: 'Gold',
          pts: '125,0' + Math.floor(Math.random() * 99) + 1,
        },
        topFacts: {
          topOne: 'Suite Room',
          topTwo: 'King Bed',
          topThree: 'Highest Floor'
        },
        rfmScore: {
          total: Math.floor(Math.random() * 100) + 1,
          r: Math.floor(Math.random() * 100) + 1,
          f: Math.floor(Math.random() * 100) + 1,
          m: Math.floor(Math.random() * 100) + 1,
        },
        otherFacts: {
          totalStays: Math.floor(Math.random() * 100) + 20,
          nights: Math.floor(Math.random() * 100) + 30,
          avgNights: (Math.random() * 10).toFixed(2),
          lastVisit: '2018-08-15',
          lifetimeValue: 3084.29
        }
      };
      return RetrieveQuickFacts
    }
}
