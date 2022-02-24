function Home() {
    function handleClick() {
    }
    return (
        <div className="Home" className="w-full h-full">
            <div className="m-auto text-center max-w-[90vw] w-full h-fit mt-[14vh]">
                <header className="text-2xl md:text-5xl leading-snug font-thin text-zinc-700 h-[24vh] min-h-[120px] max-h-80">
                    <h1 className=""><b>Artificial Intelligence</b><br></br>
                PXL <b>Fashion</b> Viewer
                </h1>
                </header>
                <div className="flex flex-row justify-between">
                    <input type="text" placeholder="IMAGE URL or KEYWORD"
                        className="shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] rounded-full px-8 py-4 text-left flex-1" />
                    <button className="rounded-md w-14 md:w-20 my-2 text-zinc-500 bg-gray-200 ml-2 md:ml-10 tracking-wider" onClick={handleClick}>검색</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
