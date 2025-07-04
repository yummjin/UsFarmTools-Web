import { BellIcon, HelpIcon } from '@/assets/icons';
import { BackgroundImage } from '@/assets/images';

const baseStyle = { height: '62px', border: false };

export const HomeAppBar = (
  handleBellClick?: () => void,
  handleHelpClick?: () => void,
) => ({
  ...baseStyle,
  backgroundImage: `url(${BackgroundImage})`,
  renderRight: () => (
    <div className="flex gap-x-5">
      <button
        className="size-[26px] cursor-pointer outline-none"
        onClick={handleBellClick}
      >
        <img src={BellIcon} />
      </button>
      <button
        className="size-[26px] cursor-pointer outline-none"
        onClick={handleHelpClick}
      >
        <img src={HelpIcon} />
      </button>
    </div>
  ),
});

export const NormalAppBar = (title: string, bgImage?: string) => ({
  backgroundImage: `url(${bgImage})`,
  renderLeft: () => {
    if (title) {
      return <span className="ml-1.5 text-xl font-semibold">{title}</span>;
    }
    return null;
  },
  ...baseStyle,
});

export const CenteredAppBar = (title: string) => ({
  ...baseStyle,
  title: title,
  backgroundColor: '#FFF',
});
