import emptyimage from '../../assets/empty_comment.svg';
import Button from '../Button';


interface IProps {
  title: string;
  description: string;
  info?: string;
  onClick?: () => void;
  img?: any;
  buttonText?: string;
  fullText?: boolean;
  height?: string;
  buttonComponent?: React.ReactElement;
}

const EmptyState = ({
  title,
  description,
  onClick,
  img,
  buttonText,
  info,
  fullText,
  height,
  buttonComponent,
}: IProps) => {
  return (
    <>
      <section style={{ height }} className="flex justify-center items-center w-full py-4">
        <div className="flex flex-col items-center w-full">
          <img src={img || emptyimage} />
          <div
            className={`w-[80%] md:w-[50%] 2xl:w-[20%] ${
              fullText && 'w-[90%] md:w-[90%] 2xl:w-[90%]'
            }`}
          >
            <p className="text-center mt-4 font-bold text-gray-700">{title}</p>
            <p className={`text-center mt-3 text-gray-700 text-sm ${info ? 'mb-1' : 'mb-4'}`}>
              {description}
            </p>
            <p className={`text-center text-gray-700 text-sm mb-6`}>{info}</p>
          </div>
          {onClick && (
            <div>
              <Button label={buttonText || 'Add new'} onClick={onClick} />
            </div>
          )}
          {buttonComponent ? buttonComponent : null}
        </div>
      </section>
    </>
  );
};

export default EmptyState;
