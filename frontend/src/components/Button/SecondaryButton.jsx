const   SecondaryButton = ({link,value}) => {
  return (
    <a
      class="inline-flex items-center justify-center backdrop-blur-md rounded-xl border border-theme-white  px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-theme-light-white hover:text-theme-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      href={link}
    >
      {value}
    </a>
  );
};
export default SecondaryButton;
