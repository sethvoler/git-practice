import { render } from 'enzyme';

export const snapshotTest = ({ name, desc, component }) => {
  describe(name, () => {
    it(`${name} ${desc}`, () => {
      const renderComp = render(component);
      expect(renderComp).toMatchSnapshot();
    });
  });
}
