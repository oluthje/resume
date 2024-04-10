// import Link from "next/Link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <div className="flex justify-end pt-5 pr-20">
        <Navbar/>
      </div> */}
      <main className="flex flex-col items-center justify-between p-24 space-y-2">
        <div>Hi, I&apos;m Oscar</div>
        <div>This website is in progress ¯\_(ツ)_/¯</div>
        <div>Soon it shall contain my all of my awesome projects...</div>
      </main>
    </div>
  );
}

// function Navbar() {
//   return (
//     <ul className="flex flex-row space-x-2 list-none">
//       <li>
//         <Link href="/">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link href="/">
//           Projects
//         </Link>
//       </li>
//       <li>
//         <Link href="/">
//           About
//         </Link>
//       </li>
//     </ul>
//   )
// }
