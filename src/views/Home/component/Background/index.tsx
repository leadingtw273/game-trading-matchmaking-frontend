import backgroundImage from './Background.png';  // 引入背景圖片

// The main App component
export default function Background(){
  const rootStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', 
  };

  return (
    <div style={rootStyle}>
      {/* 其他內容和組件可以在這裡添加 */}
      <h1></h1>
    </div>
  );
};