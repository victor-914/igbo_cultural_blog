import IndexScreen from "../screens/IndexScreen";
import api from "../utils/api";

export default function Home({ blogProps }) {
    console.log(blogProps,"jdjdj")
  return (
    <>
      <IndexScreen data={blogProps} />
    </>
  );
}

export const getStaticProps = async () => {
  const blog = await api.get(
    `/posts?populate=*&pagination[page]=1&pagination[pageSize]=15`
  );
  let blogProps = blog.data;
  return { props: { blogProps } };
};
