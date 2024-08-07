import DescriptionBox from './components/DescriptionBox';
import FlyIn from './components/FlyIn';

const Footer: React.FC = () => (
  <footer className="p-8 text-center md:text-left">
    <figure className="grid grid-flow-row md:grid-cols-[auto_1fr] gap-4 justify-items-center md:justify-items-start md:items-end">
      <img
        tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
        src="images/avatar.jpg"
        className="peer rounded-full border-2 border-white aspect-square w-60 object-cover"
        alt="Jen - close up of face, in a cave on a black sand beach in Iceland"
      />
      <FlyIn>
        <figcaption>
          <DescriptionBox>
            <p className="my-2 text-xs">
              <em className="hidden md:inline">Left: </em>
              <em className="inline md:hidden">Above: </em>
              Jen at Hálsanefshellir Cave, Iceland
            </p>
            <p className="my-2 text-xs">
              <em>Background:</em> Niagara Gorge, downstream of Niagara Falls
              near the Whirlpool Rapids on the US side
            </p>
          </DescriptionBox>
        </figcaption>
      </FlyIn>
    </figure>
  </footer>
);

export default Footer;
