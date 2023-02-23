/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
interface ButtonOrangeProps {
  title: string;
  subTitle?: string;
  icon?: any;
  iconLeft?: any;
  background?: boolean;
  onClick?: () => void;
  border?: boolean;
  enable?: boolean;
}

const ButtonOrange = ({
  title,
  subTitle,
  icon,
  iconLeft,
  background = true,
  border = true,
  onClick,
  enable = true,
}: ButtonOrangeProps) => {
  if (!background) {
    return (
      <div
        className={`border-w flex flex-row px-3 py-1 ${
          border ? 'border-orange-600' : 'border-transparent'
        } rounded-lg border-[1px] cursor-pointer`}
        onClick={enable ? onClick : undefined}
      >
        {iconLeft}
        <div className="flex-row">
          <p
            className={`${
              icon && 'mr-1'
            } text-base font-medium text-orange-600 text-center`}
          >
            {title}
          </p>
          {!!subTitle && (
            <p className="text-base font-light text-center text-orange-600">{subTitle}</p>
          )}
        </div>
        {icon}
      </div>
    );
  }

  return (
    <div
      className="border-w flex flex-row px-3 py-1 text-center bg-orange-600 border-orange-600 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {iconLeft}
      <div className="flex-row">
        <p className={`${icon && 'mr-1'} text-base font-medium text-white text-center`}>
          {title}
        </p>
        {!!subTitle && (
          <p className={`${icon && 'mr-1'} text-base font-light text-white text-center`}>
            {subTitle}
          </p>
        )}
      </div>
      {icon}
    </div>
  );
};

export default ButtonOrange;
