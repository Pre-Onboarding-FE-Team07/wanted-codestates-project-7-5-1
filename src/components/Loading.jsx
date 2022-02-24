const Loading = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-8 text-center">
      <div className="mx-auto">
        <div className=" mb-6 flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-8 border-t-8 border-gray-200 border-t-gray-500 ease-linear"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
