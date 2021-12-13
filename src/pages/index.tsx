import React from "react";
import { graphql } from "gatsby";

interface IProps {
  content: string;
  name: string;
  title: string;
}
interface IHome {
  storyblokEntry: IProps;
}

interface Data extends IHome {
  data: IHome;
}
const HomePage = ({ data }: Data) => {
  const story = data.storyblokEntry;
  console.log(data);

  const [name, setName] = React.useState("");

  const content = JSON.parse(story.content);
  console.log("content", content);
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      HomePage got it {story.name} {content.title}
    </div>
  );
};

export default HomePage;

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
    }
  }
`;
