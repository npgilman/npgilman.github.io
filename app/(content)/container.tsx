import Content from "./content";
import Header from "./header";
import Info from './info';
interface ContainerProps {
  setEntered: () => void;
}
const Container: React.FC<ContainerProps> = ({ setEntered }) => {
  return (
    <div className="flex flex-col flex-grow">
      <Header setEntered={setEntered} />
      {/* <Content /> */}
      <Info />
  </div>
);
};

export default Container;
