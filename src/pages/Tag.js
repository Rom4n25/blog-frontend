import { useNavigate } from "react-router-dom";
import StyledHeader from "../styles/Header/StyledHeader";
import StyledMain from "../styles/Main/StyledMain";
import PostData from "../services/PostData";
import StyledButton from "../styles/StyledButton";
import HeaderLogo from "../components/header/HeaderLogo";
import PostMessageContainer from "../components/message/PostMessageContainer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Tag = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    PostData()
      .getAllPostsByTag(name, 0)
      .then((posts) => setPosts(posts));
  }, [name]);

  const loadPosts = async (page) => {
    return await PostData().getAllPostsByTag(name, page);
  };

  return (
    <>
      <StyledHeader>
        <HeaderLogo />
        <StyledButton
          onClick={() => {
            navigate("/");
          }}
        >
          Mikroblog
        </StyledButton>
      </StyledHeader>
      <StyledMain>
        <PostMessageContainer
          loggedUser={sessionStorage.getItem("loggedUser")}
          loadPosts={loadPosts}
          posts={posts}
          setPosts={setPosts}
        ></PostMessageContainer>
      </StyledMain>
    </>
  );
};
export default Tag;
