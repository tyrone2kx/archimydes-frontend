import './loader.css';

interface IProps {
  pad?: string;
  width?: string;
}

const Loader = ({ pad }: IProps) => {
  return (
    <div
      style={{
        padding: pad,
      }}
      className="p-4 h-full w-full flex justify-center"
    >
      <div className="h-[60px] w-[60px]">
        <div className="custom-loader"></div>
        {/* <img className="h-full w-full rotating" src={logo} /> */}
      </div>
    </div>
  );
};

export default Loader;
