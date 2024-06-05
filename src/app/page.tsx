import { projects } from '../../projects';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex w-full max-w-2xl m-auto pt-10">
        <Navbar/>
      </div>

      {/* Introduction */}
      <div className="flex w-full h-[40rem]">
        <Introduction />
      </div>

      {/* My project list */}
      <div className="flex flex-col space-y-16" >
        {projects.map((project: any) => <ProjectTemplate {...project} />)}
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex justify-center justify-between w-full m-auto">
      <div className="p-4 border border-4 border-blue-300 bg-blue-300" />
      <ul className="flex items-center justify-center flex-row space-x-10 list-none">
        <li>
          <HeaderButton href="/" >Home</HeaderButton>
        </li>
        <li>
          <HeaderButton href="/" >Projects</HeaderButton>
        </li>
        <li>
          <HeaderButton href="/" >About Me</HeaderButton>
        </li>
      </ul>
    </div>
  )
}

function HeaderButton({ children, href }: { children?: React.ReactNode, href: string }) {
  return (
    <a href={href} className="font-bold text-xl">
      {children}
    </a>
  )
}

function Introduction() {
  return (
    <div className="flex justify-center flex-row justify-between w-full max-w-2xl m-auto">
      <div className="flex flex-col">
        <div className="font-bold text-5xl">
          <div>Hello,</div>
          <div>I'm Oscar Luthje</div>
        </div>
        <div className="text-gray-600 text-base w-[15rem]">
          I'm a software developer and computer science student from UC Santa Cruz.
        </div>
      </div>
      <div>
        <img className="rounded" src="https://media.licdn.com/dms/image/C5603AQHhGcjpPQyzPg/profile-displayphoto-shrink_200_200/0/1659380116733?e=2147483647&v=beta&t=IVBpEEqSYAKbVHEyVCPjGuDH1RQ_Q3UnBTOY3PetvLI" />
      </div>
    </div>
  )
}

/**
 * title
 * image
 * github link?
 * website link?
 * description
 * technologies
 * what I learned
 */

// !!! add carousel of images
function ProjectTemplate({
  title,
  images,
  githubLink,
  websiteLink,
  description,
  technologies,
  whatILearned
}: {
  title: string,
  images?: string[],
  githubLink?: string,
  websiteLink?: string,
  description?: string,
  technologies?: string[],
  whatILearned?: string
}) {
  return (
    <div className="flex flex-col max-w-2xl m-auto w-full space-y-4">
      <div className="font-bold text-5xl">{title}</div>
      <div className="flex justify-left">
        {images && images.map(imageSrc =>
          <img className="bg-red-100 max-h-32 object-contain" src={imageSrc}/>
        )}
      </div>
      <div>
        {githubLink && <a href={githubLink} className="font-bold text-xl">Github</a>}
        {websiteLink && <a href={websiteLink} className="font-bold text-xl">Website</a>}
      </div>

      {/* Description */}
      <div>
        <div className="font-bold text-xl">Description</div>
        <div>{description}</div>
      </div>

      {/* Technologies */}
      <div>
        <div className="font-bold text-xl">Technologies</div>
        <ul className="list-disc list-inside pl-2">
          {technologies && technologies.map(tech => <li>{tech}</li>)}
        </ul>
      </div>

      {/* What I learned */}
      {whatILearned && <div>
        <div className="font-bold text-xl">What I Learned</div>
        <div>{whatILearned}</div>
      </div>}

    </div>
  )
}