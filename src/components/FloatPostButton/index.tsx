import { useNavigate } from "react-router-dom";
import { FloatButton, Image, Tooltip } from "antd";

import postIcon from "@/assets/icon/post.svg";

import "./style.scss";

export default function FloatPostButton() {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/post");
  };

  return (
    <Tooltip color="#B6AB99" placement="left" title="刊登商品">
      <FloatButton
        className="float-post-button__button"
        icon={<Image className="float-post-button__icon" src={postIcon} preview={false} />}
        onClick={handleClickButton}
      />
    </Tooltip>
  );
}
