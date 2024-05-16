export default function Button({text}) {
  return (
    <div className="rounded-md bg-color-1 text-white text-center px-3 lg:px-8 py-2 lg:py-3 text-nowrap text-xs lg:text-lg lg:font-medium cursor-pointer">
      {text}
    </div>
  );
}
