const ErrorAlert = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src={
            "https://i.ibb.co/FxhyW6c/blue-block-phone-computer-glasses-black-full-rim-round-john-jacobs-rich-acetate-jj-e10334-c1-john-ja.png"
          }
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default ErrorAlert;
