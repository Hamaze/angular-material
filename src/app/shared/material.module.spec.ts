import { MaterialModule } from './material.module';

describe('Shared\materialModule', () => {
  let MaterialModule: MaterialModule;

  beforeEach(() => {
    MaterialModule = <MaterialModule>{ };
  });

  it('should create an instance', () => {
    expect(MaterialModule).toBeTruthy();
  });
});
