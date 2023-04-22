import Mission from '../pages/Mission';

describe('Mission component test', () => {
  const component = (
    <Mission
      id="1"
      mission="ilyass"
      description="atlassi"
    />
  );

  it('Testing Mission page rendering', () => {
    expect(component).toMatchSnapshot();
  });
});