// views/home/index.tsx

import './style.scss';
//import background from './Background.png';  // 引入背景图片
import LogoTextFrame from './component/logo-text-frame';
import SearchCard from './component/search-card';
import Sale from './component/new-sale';


Component.displayName = "Home";
export function Component() {
  return (
  <>
      <div className="background-image"></div>
      <div className="search-frame">
      <LogoTextFrame />
      <SearchCard/>
      </div>
      <div className="sale-frame">       
      <Sale/>
      </div>
  </>
  );
};
