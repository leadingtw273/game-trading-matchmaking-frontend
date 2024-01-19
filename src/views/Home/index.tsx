// views/home/index.tsx

import './style.scss';
import background from './Background.png';  // 引入背景图片
import LogoTextFrame from './component/logo-text-frame';
import SearchCard from './component/search-card'


Component.displayName = "Home";
export function Component() {
  return (
    <div>
      <div className="background-image" style={{ backgroundImage: `url(${background})` }}>
      <>
      <LogoTextFrame />
      </>
      </div>
      <>
      <SearchCard/>
      </>
    </div>
  );
};
