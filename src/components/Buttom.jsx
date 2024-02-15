const Buttom = (props) => {
    return (
        <button className="h-12 w-38 mt-[5px] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold"><a href={`${props.link}`} target="blank">{props.name}</a></button>
    );
};

export default Buttom;