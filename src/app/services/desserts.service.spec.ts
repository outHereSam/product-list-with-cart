import { DessertsService } from './desserts.service';

describe('DessertsService', () => {
  let service: DessertsService;

  beforeEach(() => {
    service = new DessertsService();
  });

  it('should return a Dessert List with 9 desserts', (done: DoneFn) => {
    service.getAllDesserts().then((desserts) => {
      expect(desserts.length).toBe(9);
      done();
    });
  });
});
