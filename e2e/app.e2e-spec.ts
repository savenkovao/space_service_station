import { SpaceServiceStationPage } from './app.po';

describe('space-service-station App', function() {
  let page: SpaceServiceStationPage;

  beforeEach(() => {
    page = new SpaceServiceStationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
