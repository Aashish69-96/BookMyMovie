import LOGO from "../../assets/Logo.png";
const Navigation = () => {
  return (
    <header class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-theme-light-dark-2 bg-theme-light-dark py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-xl">
      <div class="px-4">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0">
            <a aria-current="page" class="flex items-center" href="/">
              <img class="h-8 w-auto" src={LOGO} alt="BookMyMovieLogo"></img>
              <p class="sr-only">Website Title</p>
            </a>
          </div>
          <div class="hidden md:flex md:items-center md:justify-center md:gap-5">
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
              Movies
            </a>
            <a class="inline-block rounded-lg px-2 py-1 text-sm font-medium text-theme-light-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
              Theatres
            </a>
          </div>
          <div class="flex items-center justify-end gap-3">
            <a
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href="/login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navigation;
