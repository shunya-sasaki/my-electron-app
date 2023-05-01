export const Navi = () => {
  return (
    <div className="flex flex-row justify-between content-center bg-gray-500 mx-auto">
      <div className="p-1.5 text-xl font-extrabold text-white">
        My Electron App
      </div>
      <ul className=" w-64 flex flex-row justify-between list-disc items-center text-white">
        <li className="w-32 p-1.5 ">
          <a
            className="hover:text-red-500"
            href="https://tailwindcss.com/docs/installation"
          >
            Tailwindcss
          </a>
        </li>
        <li className="w-32 p-1.5">
          <a
            className="hover:text-red-500"
            href="https://shunya-sasaki.github.io/my-note/"
          >
            My memo
          </a>
        </li>
      </ul>
    </div>
  );
};
