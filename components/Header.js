import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Header = ({ blok }) => {
    console.log("Header", blok)
  return (
    <div className="" {...storyblokEditable(blok)}>
      {/* {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))} */}
    </div>
  );
};

export default Header;