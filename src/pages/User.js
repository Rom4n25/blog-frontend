import { useNavigate } from "react-router-dom";
import StyledHeader from "../styles/Header/StyledHeader";
import StyledMain from "../styles/StyledMain";
import PostData from "../services/PostData";
import UserData from "../services/UserData";
import StyledButton from "../styles/StyledButton";
import HeaderLogo from "../components/header/HeaderLogo";
import { useLocation } from "react-router-dom";
import PostContainer from "../components/post/PostContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = useParams();
  const [userId, setUserId] = useState();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    UserData()
      .getUserIdFromUsername(username)
      .then((response) => {
        setUserId(response.id);
        setHasLoaded(true);
      });
  }, [username]);

  const loadPosts = async (page) => {
    return await PostData().getAllPostsByUserId(userId, page);
  };

  if (hasLoaded) {
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
          <PostContainer
            loggedUser={location.state.loggedUser}
            loadPosts={loadPosts}
            posts={posts}
            setPosts={setPosts}
          ></PostContainer>
        </StyledMain>
      </>
    );
  }
};
export default User;
