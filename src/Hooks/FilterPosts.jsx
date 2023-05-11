import { useMemo } from "react";

//aprovecho el hook Memo para que solo se actualicen los filtros si cambia posts, searchUser o searchBody
const useFilteredPosts = (posts, searchUser, searchBody, searchTitle) => {
  return useMemo(() => {
    let results = [...posts];
    if (searchUser) {
      results = results.filter(
        (post) =>
          post.userId.toString().toLowerCase() == searchUser.toLowerCase()
      );
    }
    if (searchBody) {
      results = results.filter((post) =>
        post.body.toLowerCase().includes(searchBody.toLowerCase())
      );
    }
    if (searchTitle) {
      results = results.filter((post) =>
        post.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }
    return results;
  }, [posts, searchUser, searchBody, searchTitle]);
};
export default useFilteredPosts;
