import { TestBed } from '@angular/core/testing';

import { PointsService } from './points.service';

const responce = require('../../test_data/request.json');

describe('PointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointsService = TestBed.get(PointsService);
    expect(service).toBeTruthy();
  });
});
